"use client";

import * as React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinks {
  services: FooterLink[];
  company: FooterLink[];
  candidates: FooterLink[];
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
    { label: "Find a Job", href: "#jobs" },
    { label: "Submit CV", href: "#contact" },
    { label: "Career Advice", href: "#contact" },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/recruitmentbg",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:contact@recruitment.bg",
    label: "Email",
  },
];

const scrollToSection = (href: string) => {
  const id = href.replace("#", "");
  const element = document.getElementById(id);

  if (!element) return;

  const headerOffset = 100;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  element.style.transition = "box-shadow 0.6s ease";
  element.style.boxShadow = "0 0 0 6px rgba(8, 86, 137, 0.25)";
  setTimeout(() => {
    element.style.boxShadow = "none";
  }, 1400);
};

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f3f3f3] text-black border-t border-white/10 mt-[-150px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand / Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/uploaded/recr-logo.png"
                alt="Recruitment.bg"
                className="h-10 w-auto"
              />
            </Link>
            
            <p className="text-black text-sm leading-relaxed mb-2 max-w-xs">
              IT recruitment agency connecting top tech talent with leading companies in Bulgaria and beyond.
            </p>

            {/* Sofia, Bulgaria - Added here */}
            <p className="text-[#085689] font-medium text-sm mb-6">
              Sofia, Bulgaria
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-[#78B6D9] group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#085689]">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-slate-500 hover:text-[#78B6D9] text-left transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#085689]">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-slate-500 hover:text-[#78B6D9] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Candidates */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#085689]">
              For Candidates
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.candidates.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-slate-500 hover:text-[#78B6D9] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-500">
            © {currentYear} Recruitment.bg. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-500 hover:text-[#78B6D9] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-[#78B6D9] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}