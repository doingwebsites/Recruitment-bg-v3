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
import { Spinner } from "@/components/ui/spinner";
import { CheckCircle } from "lucide-react";

import { Turnstile } from "@marsidev/react-turnstile";

import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

type Mode = "candidate" | "company";

interface ContactFormProps {
  mode?: Mode;
}

export function ContactForm({ mode = "candidate" }: ContactFormProps): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [turnstileToken, setTurnstileToken] = React.useState<string>("");
  const [turnstileError, setTurnstileError] = React.useState(false);
  const [turnstileReady, setTurnstileReady] = React.useState(false);

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
    if (!turnstileToken) {
      alert("Please wait for the security check to complete.");
      return;
    }

    setIsSubmitting(true);
    setTurnstileError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          mode,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message");
      }

      setIsSubmitted(true);
      form.reset();
      setTurnstileToken("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
    setTurnstileError(false);
    setTurnstileReady(true);
  };

  const handleTurnstileError = () => {
    setTurnstileError(true);
    setTurnstileToken("");
    setTurnstileReady(false);
  };

  const handleTurnstileExpire = () => {
    setTurnstileToken("");
  };

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
            setTurnstileToken("");
            setTurnstileError(false);
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
        {/* Your existing form fields remain exactly the same */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{mode === "company" ? "Company Name" : "Full Name"}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={mode === "company" ? "Company Name" : "John Doe"}
                    {...field}
                  />
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
                <FormLabel>{mode === "company" ? "Title" : "Job Title / Position"}</FormLabel>
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

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    mode === "company"
                      ? "Tell us about your hiring needs, positions, budget range..."
                      : "Tell us about your career goals and what you're looking for..."
                  }
                  className="min-h-[140px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Turnstile Widget */}
        <div className="flex justify-center py-2">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={handleTurnstileSuccess}
            onError={handleTurnstileError}
            onExpire={handleTurnstileExpire}
            options={{
              theme: "light",
              size: "normal",
              retry: "auto",           // Important for dev mode
              retryInterval: 1000,
            }}
          />
        </div>

        {turnstileError && (
          <p className="text-center text-red-600 text-sm">
            Security check failed. Please refresh the page and try again.
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#085689] hover:bg-[#0a6a9c]"
          disabled={isSubmitting || !turnstileToken}
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