import { z } from "zod"
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val),
      { message: "Please enter a valid phone number" }
    ),
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters" })
    .max(100, { message: "Title must be less than 100 characters" }),
  inquiryType: z.enum(["hiring", "job-seeking", "partnership", "other"], {
    required_error: "Please select an inquiry type",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),

    captcha: z
  .string()
  .min(1, { message: "Please verify you are not a robot" }),
})
export type ContactFormData = z.infer<typeof contactFormSchema>

export const inquiryTypeOptions = [
  { value: "hiring", label: "I want to hire talent" },
  { value: "job-seeking", label: "I am looking for a job" },
  { value: "partnership", label: "Partnership inquiry" },
  { value: "other", label: "Other" },
] as const

