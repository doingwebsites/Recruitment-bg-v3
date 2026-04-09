import * as React from "react"
import { Check } from "lucide-react"

interface Reason {
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    title: "10+ Years Experience",
    description: "Deep expertise in IT recruitment and the Bulgarian tech market.",
  },
  {
    title: "Strong Industry Network",
    description: "Access to a vast pool of qualified IT professionals and decision-makers.",
  },
  {
    title: "Personalized Approach",
    description: "Tailored recruitment strategies that match your unique needs and culture.",
  },
  {
    title: "Transparent Communication",
    description: "Clear, honest updates throughout the entire hiring process.",
  },
  {
    title: "Focus on Long-term Success",
    description: "We prioritize sustainable placements over quick wins.",
  },
]

export function WhyChooseUs(): React.JSX.Element {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-6">
              Your Trusted Partner in Tech Recruitment
            </h2>
            <p className="text-lg text-background/70 leading-relaxed">
              We combine industry expertise with a genuine passion for connecting the right 
              people with the right opportunities. Our track record speaks for itself.
            </p>
          </div>

          {/* Reasons List */}
          <div className="flex flex-col gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{reason.title}</h3>
                  <p className="text-background/70">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
