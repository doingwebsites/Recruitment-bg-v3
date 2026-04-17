"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const features = [
    "Our recruiters understand your needs first - Smart.R helps them move faster and stay focused.",
    "We take a human-first approach, enhanced by smart matching and structured candidate data across your talent pipeline.",
    "Faster shortlists, streamlined communication, better conversations, and less time lost in manual admin work.",
    "Clear collaboration between all stakeholders - HR managers, directors, recruiters, and hiring managers.",
    "Built by real processes and recruiters. Used by recruiters.",
]

export function SmartRSection() {

    const scrollToSection = (href) => {
        const id = href.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            // Highlight effect
            element.style.transition = "all 0.4s ease";
            element.style.boxShadow = "0 0 0 4px rgba(8, 86, 137, 0.15)";
            setTimeout(() => {
                element.style.boxShadow = "none";
            }, 1200);
        }
    };

    return (
        <section id="smartr" className="py-24 md:py-32 px-6 lg:mb-[120px] md:mb-[50px] sm:md-[0px]" >
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <p className="text-md font-medium text-[#085689] uppercase tracking-wider">
                        Own Technology
                    </p>


                </div>


                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
                    Smart.R — our intelligent <span className="text-[#085689]">HR ATS</span> system
                </h2>


                <p className="text-xl text-slate-600 leading-relaxed mb-5">
                    15+ years of hands-on recruitment - now supported by our own ATS and recruitment CRM platform, built around how real hiring actually works.
                </p>

                <ul className="space-y-4 text-left max-w-2xl mx-auto mb-12 mt-10">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-4 text-muted-foreground "
                        >
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <span className="leading-relaxed text-lg ">{feature}</span>
                        </li>
                    ))}
                </ul>


                 <p className="text-xl text-slate-600 leading-relaxed mb-5">
                    Smart.R is used internally as our applicant tracking system and recruitment software, helping us deliver better hiring results for our clients. 
                </p>
                 <p className="text-xl text-slate-600 leading-relaxed mb-5">
                   It’s also available to HR teams who want to improve their own hiring processes.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    <a href="https://smartr-olive.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base">
                            See smart.R in action
                        </Button>
                    </a>

                    <Button
                        onClick={() => scrollToSection("#contact")}
                        variant="outline"
                        className="bg-trasparent text-black hover:bg-[#78B6D9] hover:text-white rounded-lg px-8 py-6 text-base"
                    >
                        Book a consultation
                    </Button>
                </div>
            </div>
        </section>
    )
}
