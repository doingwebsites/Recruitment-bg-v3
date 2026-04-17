"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const hireWithClarity = [
  "Precise hiring needs assessment",
  "Deep understanding of your company culture",
  "Long-term talent acquisition strategy",
  "Expert guidance on remote & hybrid hiring",
];

const whyChooseUs = [
  "Access to 25,000+ curated tech professionals",
  "Significantly reduced time-to-hire",
  "High retention through cultural fit matching",
  "Market insights, salary benchmarking & flexible engagement models",
];

export function CompaniesSection() {
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


    }
  };

  return (
    <section id="companies" className="py-20 lg:py-28 bg-transparent lg:mb-[120px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Who we serve
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            Connecting Companies with Exceptional Tech Talent
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed">
            With deep industry expertise and a personalized approach, we connect
            companies with pre-vetted senior developers and engineers who truly fit
            your culture and drive long-term success.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full">
                <span className="font-semibold">Why Companies Choose Us</span>
              </div>
            </div>

            <ul className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>



          <div>
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="inline-flex items-center gap-2 bg-[#085689]/10 text-[#085689] px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Hire with Clarity</span>
              </div>
            </div>
            <ul className="space-y-6">
              {hireWithClarity.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#085689]/10 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#085689]" />
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base"
          >
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  );
}