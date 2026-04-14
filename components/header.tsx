"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "For Companies", href: "#companies" },
  { label: "Jobs", href: "#jobs" },
  { label: "About Us", href: "#about" },
  { label: "smart.R", href: "#smart.r" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "backdrop-blur-md py-3"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 xl:px-12">
          <nav className="relative flex items-center justify-between h-14">
            <Link href="/" className="block flex-shrink-0">
              <img
                src="/uploaded/recr-blue.png"
                alt="Recruitment.bg"
                className="h-9 lg:h-12 w-auto transition-all duration-300"
              />
            </Link>

            <div
              className={`hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-8 transition-opacity duration-300 ${isScrolled
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
                }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative text-md text-foreground/80 hover:text-primary transition-colors duration-200 py-1"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#085689] rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                </Link>
              ))}

              <Button className="bg-[#085689] hover:bg-[#78B6D9] text-primary-foreground  rounded-lg px-6 py-5">
                Contact Us
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 text-foreground transition-transform duration-300 hover:scale-110 ${isScrolled ? "block" : "block lg:hidden"
                }`}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-full lg:w-1/2 bg-[#085689] shadow-2xl transform transition-transform duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full p-8 pt-20 relative">

            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:scale-110 transition-transform duration-200"
              aria-label="Close menu"
            >
              <X size={34} strokeWidth={2.5} />
            </button>


            <div className="flex flex-col gap-6 text-lg text-white">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-3 text-lg text-white hover:text-white/80 transition-all duration-300 border-b border-white/20 last:border-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-12">
              <Button
                className="w-full bg-white text-[#000000] hover:bg-white/90 rounded-xl py-6 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}