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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20 lg:mb-[0px] md:mb-[50px] sm:md-[0px]">
      <div
        className="absolute inset-0 bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge - Using Radix UI Badge */}
          {/* <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium bg-transparent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2" />
            14+ Years of Recruitment Excellence
          </Badge> */}

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[500] font-poppins text-foreground leading-[1.1] text-balance mb-6 ">
            IT Talent Acquisition <span className="text-[#085689]">Experts</span>

          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            We connect IT candidates with the right positions through our personalized recruitment services.


          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[#085689]  w-[150px] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base">
              Hire a talent
            </Button>
            <Button
              variant="outline"
              className="bg-trasparent  w-[150px] text-black hover:bg-[#78B6D9] hover:text-white  rounded-lg px-8 py-6 text-base"
            >
              Find a job
            </Button>
          </div>

          {/* Stats with Separator */}
          {/* <div className="mt-15 pt-12 max-w-2xl mx-auto">
            <Separator className="mb-12" />
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
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
