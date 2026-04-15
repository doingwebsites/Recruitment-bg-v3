import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Clock, Globe, Search, UserCheck, type LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Users,
    title: "Permanent Recruitment",
    description: "Helping companies grow with long-term hires that fit your culture and technical needs.",
  },
  {
    icon: Briefcase,
    title: "Recruitment & Employer Branding",
    description: "Strategic consulting on hiring processes and employer positioning in the tech market.",
  },
  {
    icon: Clock,
    title: "Project-Based Recruitment",
    description: "Flexible hiring solutions for part-time, contract, or short-term project needs.",
  },
  {
    icon: Globe,
    title: "Remote Hiring",
    description: "Support for companies building distributed and remote-first engineering teams.",
  },
  {
    icon: Search,
    title: "Executive Search & Headhunting",
    description: "Specialized recruitment for senior, C-level, and leadership IT positions.",
  },
  {
    icon: UserCheck,
    title: "For Candidates",
    description: "Helping IT professionals find the right opportunities that match their career goals.",
  },
]

export function Services(): React.JSX.Element {
  return (
    <section id="services" className="py-24 lg:py-32 lg:mb-[100px] md:mb-[50px] sm:md-[0px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            What we do
          </h2>
        </div>

        {/* Services Grid - Using Radix UI Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:border-[#78B6D9] hover:shadow-lg transition-all duration-300 bg-[#f5f5f5]"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-[#085689]" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
