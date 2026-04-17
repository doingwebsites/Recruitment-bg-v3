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
import { CheckCircle } from "lucide-react";

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

  // CAPTCHA State
  const [captchaAnswer, setCaptchaAnswer] = React.useState("");
  const [userCaptchaInput, setUserCaptchaInput] = React.useState("");
  const [captchaError, setCaptchaError] = React.useState("");

  // Hardcoded CAPTCHA (simple math question)
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

  async function onSubmit(data: ContactFormData) {
    setCaptchaError("");

    // Validate CAPTCHA
    if (userCaptchaInput.trim() !== correctAnswer) {
      setCaptchaError("Incorrect answer. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          mode,
          interest: mode === "company" ? interest : undefined,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      form.reset();
      setUserCaptchaInput(""); // Reset captcha input
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

        {/* ... existing fields (Name, Email, Phone, Title, Company Interest, Message) ... */}
        {/* Keep all your existing FormFields unchanged */}

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
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={messagePlaceholder}
                  className="min-h-[140px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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