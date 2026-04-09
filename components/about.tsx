import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Handshake, Sparkles, type LucideIcon } from "lucide-react"

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: Heart,
    title: "Honesty",
    description: "Transparent communication at every step of the recruitment process.",
  },
  {
    icon: Handshake,
    title: "Long-term Relationships",
    description: "Building partnerships that last, not just filling positions.",
  },
  {
    icon: Sparkles,
    title: "Passion for People",
    description: "Genuine care for both candidates and clients we work with.",
  },
]

export function About(): React.JSX.Element {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">
              A Decade of Building Tech Teams
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With more than 10 years of IT recruitment experience, we have built a trustworthy 
              and strategic approach to hiring top professionals. We understand the tech industry, 
              its challenges, and what it takes to build successful teams.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach is simple: listen carefully, understand deeply, and deliver consistently. 
              Whether you&apos;re a startup scaling your engineering team or an enterprise seeking 
              senior leadership, we bring the same dedication to every partnership.
            </p>
          </div>

          {/* Values Grid - Using Radix UI Card */}
          <div className="flex flex-col gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="bg-secondary/50">
                  <CardHeader className="flex-row items-start gap-6 pb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{value.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
