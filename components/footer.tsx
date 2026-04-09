import * as React from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Linkedin, Mail } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

interface FooterLinks {
  services: FooterLink[]
  company: FooterLink[]
  candidates: FooterLink[]
}

const footerLinks: FooterLinks = {
  services: [
    { label: "Permanent Recruitment", href: "#services" },
    { label: "Executive Search", href: "#services" },
    { label: "Remote Hiring", href: "#services" },
    { label: "Employer Branding", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  candidates: [
    { label: "Find a Job", href: "#contact" },
    { label: "Submit CV", href: "#contact" },
    { label: "Career Advice", href: "#" },
  ],
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
}

const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:contact@recruitment.bg",
    label: "Email",
  },
]

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-semibold tracking-tight">
                Recruitment<span className="text-accent">.bg</span>
              </span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              IT recruitment agency connecting top tech talent with leading companies in Bulgaria and beyond.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent transition-colors group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-background group-hover:text-accent-foreground transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Candidates */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              For Candidates
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.candidates.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Using Radix UI Separator */}
        <Separator className="my-12 bg-background/10" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            &copy; {currentYear} Recruitment.bg. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-background/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-background/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
