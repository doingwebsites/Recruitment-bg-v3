import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" 
        aria-hidden="true"
      />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Using Radix UI Badge */}
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2" />
            10+ Years of IT Recruitment Excellence
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
            IT Recruitment That Builds{" "}
            <span className="text-accent">Strong Teams</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Connecting companies with top IT talent for over 10 years. 
            Strategic, honest, and focused on long-term success.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto group">
              <Link href="#contact">
                Hire Talent
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="#contact">
                Find a Job
              </Link>
            </Button>
          </div>

          {/* Stats with Separator */}
          <div className="mt-20 pt-12 max-w-2xl mx-auto">
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
          </div>
        </div>
      </div>
    </section>
  )
}
