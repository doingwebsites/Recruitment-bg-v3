"use client";

import { Linkedin, Facebook } from "lucide-react";

export function SocialSidebar() {
  return (
    <>
      {/* Vertical Sidebar - Visible on large screens (≥ 1436px) */}
      <div className="hidden 2xl:flex fixed left-15 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200"
          aria-label="Facebook"
        >
          <Facebook size={28} />
        </a>

        <div className="w-px h-20 bg-[#085689]/20 my-2" />

        <span
          className="text-black text-md font-bold tracking-[3px] uppercase"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Recruitment agency
        </span>
      </div>

      {/* Bottom Bar - Visible on screens smaller than 1436px */}
      <div className="2xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#f3f3f3]  border-slate-200 py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#085689] hover:text-[#78B6D9] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={25} />
          </a>

          <span className="text-black text-sm font-bold tracking-widest uppercase">
            Recruitment agency
          </span>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#085689] hover:text-[#78B6D9] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={25} />
          </a>
        </div>
      </div>
    </>
  );
}