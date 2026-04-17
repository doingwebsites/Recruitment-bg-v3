"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { 
    label: "For Companies", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Who we serve", href: "#companies" },
      { label: "Q&A", href: "#faq" },
    ]
  },
  { 
    label: "For Candidates", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Why us?", href: "#candidates" },
      { label: "See our jobs", href: "#jobs" },
    ]
  },
  { label: "About Us", href: "#about" },
  { label: "smart.R ATS / CRM", href: "#smartr" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      element.style.transition = "all 0.4s ease";
      element.style.boxShadow = "0 0 0 4px rgba(8, 86, 137, 0.15)";
      setTimeout(() => element.style.boxShadow = "none", 1200);
    }

    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 xl:px-12">
          <nav className="relative flex items-center justify-between h-14">
            
            {/* Logo */}
            <Link href="/" className="block flex-shrink-0">
              <img
                src="/uploaded/recr-logo.png"
                alt="Recruitment.bg"
                className="h-9 lg:h-12 w-auto transition-all duration-300"
              />
            </Link>


            {/* Desktop Navigation - Hides when scrolled */}
            <div
              className={`hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-8 transition-opacity duration-300 ${
                isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.label} className="relative group">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="group flex items-center gap-1.5 text-md text-foreground/80 hover:text-primary transition-colors duration-200 py-1 b"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>

                      {/* Desktop Dropdown */}
                      <div className={`absolute top-full left-0 mt-3 w-56 bg-[#f5f5f5] rounded-2xl shadow-xl py-3 px-2 transition-all duration-300 origin-top ${openDropdown === item.label ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                        {item.dropdownItems?.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => scrollToSection(subItem.href)}
                            className="w-full text-left px-5 py-3 hover:text-[#085689] rounded-xl text-[15px] transition-colors"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="group relative text-md text-foreground/80 hover:text-primary transition-colors duration-200 py-1"
                  >
                    {item.label}
                  </button>
                );
              })}

              <Button onClick={() => scrollToSection("#contact")} className="bg-[#085689] hover:bg-[#78B6D9] text-primary-foreground rounded-lg px-6 py-5">
                Contact Us
              </Button>
            </div>

            {/* Hamburger Button - Shows when scrolled (even on desktop) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 text-foreground transition-transform duration-300 hover:scale-110 ${
                isScrolled ? "block" : "block lg:hidden"
              }`}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </nav>
        </div>
      </header>





      {/* ===================== MOBILE / SLIDE MENU ===================== */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />

        <div
          className={`absolute top-0 right-0 h-full w-full lg:w-1/2 bg-[#085689] shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8 pt-20 relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:scale-110 transition-transform duration-200"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            <div className="flex flex-col gap-6 text-lg text-white">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-3 text-left text-lg text-white hover:text-white/80 transition-all border-b border-white/20"
                      >
                        {item.label}
                        <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>

                      <div className={`pl-6 mt-2 transition-all duration-300 overflow-hidden ${openDropdown === item.label ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                        {item.dropdownItems?.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => scrollToSection(subItem.href)}
                            className="block py-3 text-white/90 hover:text-white w-full text-left"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="py-3 text-left text-lg text-white hover:text-white/80 transition-all border-b border-white/20 last:border-none"
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-auto pt-12">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-white text-[#000000] hover:bg-white/90 rounded-xl py-6 text-base font-medium"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}