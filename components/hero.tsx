'use client';

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, ChevronDown } from "lucide-react"

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Placements Made" },
  { value: "95%", label: "Client Retention" },
]

export function Hero(): React.JSX.Element {

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


  
  setTimeout(() => {
    element.style.boxShadow = "none";
  }, 1200);
};

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20 lg:mb-[0px] md:mb-[50px] sm:md-[0px]">
      <div
        className="absolute inset-0 bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto text-center">
       
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[500] font-poppins text-foreground leading-[1.1] text-balance mb-6 ">
            IT Recruitment Agency for <span className="text-[#085689]">Tech Companies</span>

          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
 We connect companies with IT professionals through expert IT recruitment and talent acquisition services.

          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => scrollToSection("#companies")}
            className="bg-[#085689]  w-[150px] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base">
              Hire a talent
            </Button>
            <Button
                          onClick={() => scrollToSection("#jobs")}

              variant="outline"
              className="bg-trasparent  w-[150px] text-black hover:bg-[#78B6D9] hover:text-white  rounded-lg px-8 py-6 border-2  border-[#78B6D9]/50  text-base"
            >
              Find a job
            </Button>
          </div>

          <button

            className="mt-16 animate-bounce text-foreground/60 hover:text-primary transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
