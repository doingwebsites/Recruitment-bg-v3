"use client"

import { Linkedin, Facebook } from "lucide-react"

export function SocialSidebar() {
  return (
    <div className="fixed left-15 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <Linkedin size={30} />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200"
        aria-label="Facebook"
      >
        <Facebook size={30} />
      </a>
      <div className="w-px h-16 bg-primary/20" />
      <span
        className="text-md text-primary tracking-widest uppercase font-bold"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Recruitment agency
      </span>
    </div>
  )
}
