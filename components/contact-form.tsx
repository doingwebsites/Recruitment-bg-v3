"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { CheckCircle, Upload } from "lucide-react";

import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

type Mode = "candidate" | "company";
type Interest = "hiring" | "demo";

interface ContactFormProps {
  mode?: Mode;
}

export function ContactForm({ mode = "candidate" }: ContactFormProps): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [interest, setInterest] = React.useState<Interest>("hiring");

  // File Upload State
  const [file, setFile] = React.useState<File | null>(null);

  // CAPTCHA State
  const [userCaptchaInput, setUserCaptchaInput] = React.useState("");
  const [captchaError, setCaptchaError] = React.useState("");

  const captchaQuestion = "8 + 5?";
  const correctAnswer = "13";

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      title: "",
      message: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  async function onSubmit(data: ContactFormData) {
    setCaptchaError("");

    if (userCaptchaInput.trim() !== correctAnswer) {
      setCaptchaError("Incorrect answer. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Use FormData to handle file uploads
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("title", data.title);
      formData.append("message", data.message);
      formData.append("mode", mode);
      
      if (mode === "company") {
        formData.append("interest", interest);
      }
      
      if (mode === "candidate" && file) {
        formData.append("cv", file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        // Note: Headers are omitted because the browser automatically 
        // sets multipart/form-data and the boundary
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      form.reset();
      setUserCaptchaInput("");
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const messagePlaceholder = mode === "candidate"
    ? "Tell us about your career goals and what you're looking for..."
    : interest === "hiring"
      ? "Tell us about your hiring needs, positions, number of roles, budget range, timeline..."
      : "I'd like to schedule a Smart.r ATS/CRM demonstration...";

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#085689]/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-[#085689]" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
        <p className="text-slate-600">We'll get back to you within 24 hours.</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setIsSubmitted(false);
            setUserCaptchaInput("");
            setCaptchaError("");
            setFile(null);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{mode === "company" ? "Company Name" : "Full Name"}</FormLabel>
                <FormControl>
                  <Input placeholder={mode === "company" ? "Company Name" : "John Doe"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Phone + Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+359 888 123 456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title / Position</FormLabel>
                <FormControl>
                  <Input
                    placeholder={mode === "company" ? "Hiring Manager" : "Senior Frontend Developer"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Company Interest Dropdown */}
        {mode === "company" && (
          <div>
            <FormLabel>I'm interested in:</FormLabel>
            <Select value={interest} onValueChange={(value: Interest) => setInterest(value)}>
              <SelectTrigger className="h-12 w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hiring">Hiring for my company</SelectItem>
                <SelectItem value="demo">Smart.r ATS/CRM demonstration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormMessage />
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={messagePlaceholder}
                  className="min-h-[140px] resize-none"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* === CAPTCHA SECTION === */}
        <div className="pt-4 border-t border-slate-200">
          <FormLabel className="text-sm font-medium text-slate-700 mb-2 block">
            Security Check
          </FormLabel>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="bg-slate-100 border border-slate-300 rounded-xl px-5 py-3 text-lg font-mono tracking-wider flex-shrink-0">
              {captchaQuestion}
            </div>
            
            <div className="flex-1 w-full">
              <Input
                type="text"
                placeholder="Enter answer here"
                value={userCaptchaInput}
                onChange={(e) => setUserCaptchaInput(e.target.value)}
                className="h-12"
              />
              {captchaError && (
                <p className="text-red-600 text-sm mt-1.5">{captchaError}</p>
              )}
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Please solve this simple math question to prove you're not a robot.
          </p>
        </div>

        {/* === CV UPLOAD SECTION (CANDIDATE ONLY) === */}
        {mode === "candidate" && (
          <div className="pt-6 border-t border-slate-200">
            <FormLabel className="text-sm font-medium text-slate-700 mb-2 block">
              Upload your CV
            </FormLabel>
            <div className="relative">
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="h-12 file:bg-[#085689] file:text-white file:border-0 file:rounded-md file:px-4 file:mr-4 file:h-full cursor-pointer"
              />
            </div>
            {file && (
              <div className="mt-3 flex items-center text-sm text-green-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>{file.name} uploaded successfully</span>
              </div>
            )}
            <p className="text-xs text-slate-500 mt-2">
              Accepted formats: PDF, DOCX. Max size: 5MB.
            </p>
          </div>
        )}

        <p className="text-center text-sm text-slate-500 mt-6">
          We typically reply within 24 hours during business days
        </p>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#085689] hover:bg-[#0a6a9c]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner className="mr-2" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}