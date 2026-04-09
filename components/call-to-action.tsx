import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@recruitment.bg",
    href: "mailto:contact@recruitment.bg",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+359 2 123 4567",
    href: "tel:+35921234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sofia, Bulgaria",
  },
]

export function CallToAction(): React.JSX.Element {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you&apos;re looking to hire top IT talent or seeking your next career opportunity, 
            we&apos;re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form Card */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="lg:col-span-2 bg-foreground text-background">
            <CardHeader>
              <CardTitle className="text-background">Contact Information</CardTitle>
              <CardDescription className="text-background/70">
                Reach out to us directly through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-background/60 mb-1">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                )

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}

              <Separator className="bg-background/20" />

              <div>
                <p className="text-sm text-background/60 mb-3">Business Hours</p>
                <p className="font-medium">Monday - Friday</p>
                <p className="text-background/70">9:00 AM - 6:00 PM EET</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
