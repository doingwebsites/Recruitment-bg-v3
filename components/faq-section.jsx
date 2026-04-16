"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const faqs = [
  {
    q: "How do you handle data protection & legal?",
    a: "We operate with full compliance to all relevant data protection regulations, including GDPR. Every step of our process is transparent, documented, and designed to protect both clients and candidates.",
  },
  {
    q: "How fast is your administrative process?",
    a: "Our process is built for speed and simplicity. We minimize unnecessary steps, reduce back-and-forth, and keep communication direct.",
  },
  {
    q: "How quickly do you present candidates?",
    a: "We typically present the first relevant candidates within a few days. Our proactive sourcing and pre-qualified talent pool allow us to move fast without compromising on relevance or fit.",
  },
  {
    q: "How do you ensure candidate quality?",
    a: "We focus on quality over quantity. Instead of forwarding stacks of CVs, we speak directly with candidates, assess their experience, motivation, and fit, and only introduce people who genuinely align with the role and your expectations.",
  },
  {
    q: "What if the role is hard to fill?",
    a: "For challenging roles, we take a consultative approach. We analyze the brief, provide honest feedback, and adjust the strategy where needed. This might include refining requirements, repositioning the role, or exploring alternative talent pools—always with realistic expectations.",
  },
  {
    q: "Q: Do you provide a guarantee period?",
    a: "Yes, every successful hire comes with a guarantee period. If things don’t work out during that time, we provide a replacement candidate at no additional cost—ensuring continuity and reducing your hiring risk.",
  },
  {
    q: "What’s your experience in IT recruitment?",
    a: "With over 15 years in IT recruitment, we bring deep market knowledge and a strong understanding of technical roles and trends. We speak the language of both clients and candidates, enabling us to accurately assess needs and match the right people to the right opportunities.",
  },
  {
    q: "Is exclusivity part of your terms?",
    a: "No exclusivity required. You’re free to work with one or multiple providers—we’re confident in our ability to deliver value without locking you in.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState([]);

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

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  // Split into two columns for desktop
  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4);

  const renderFaq = (faq, globalIndex) => {
    const isOpen = openItems.includes(globalIndex);

    return (
      <div
        key={globalIndex}
        className="border border-slate-200 rounded-2xl overflow-hidden bg-[#f5f5f5] mb-4 last:mb-0 transition-all duration-300"
      >
        <button
          onClick={() => toggleItem(globalIndex)}
          className="w-full px-6 py-6 flex items-center justify-between text-left group hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-4">   {/* Changed to items-center */}
            <div className="w-8 h-8 rounded-full bg-[#085689]/10 flex-shrink-0 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-[#085689]" />
            </div>
            <h3 className="text-xl font-semibold text-black pr-8 leading-tight">
              {faq.q}
            </h3>
          </div>

          <ChevronDown
            className={`w-6 h-6 text-[#085689] transition-transform duration-500 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-8 pl-[72px] text-lg text-slate-600 leading-relaxed">
            {faq.a}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-tranparent lg:mb-[120px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Got questions?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-2">
            {leftFaqs.map((faq, i) => renderFaq(faq, i))}
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {rightFaqs.map((faq, i) => renderFaq(faq, i + 4))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base"
          >
            Still have questions? Let’s talk
          </Button>
        </div>
      </div>
    </section>
  );
}