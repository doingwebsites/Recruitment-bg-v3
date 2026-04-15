import * as React from "react"
import { Check } from "lucide-react"

const reasons = [
  {
    title: "15+ Years Experience",
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
  {
    title: "Dedicated Candidate Support",
    description: "We guide and support candidates through every step, ensuring a smooth experience.",
  },
]

export function WhyChooseUs(): React.JSX.Element {
  return (
    <section id="why-us" className="py-24 lg:py-32 lg:mb-[120px] md:mb-[50px] sm:md-[0px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
         <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
         <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Your Trusted Partner in Tech Recruitment
          </h2>
           <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We combine industry expertise with a genuine passion for connecting the right 
            people with the right opportunities. Our track record speaks for itself.
          </p>
        </div>

        {/* Reasons Grid - 3 columns on large screens, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex gap-4 group mt-5"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#78B6D9] flex items-center justify-center ">
                <Check className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#085689]">
                  {reason.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}