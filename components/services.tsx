"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Plus, Users, Briefcase, Clock, Globe, Search, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  intro: string;
  sections: Array<{
    heading: string;
    points: string[];
  }>;
}

const services: Service[] = [
  {
    icon: Users,
    title: "Permanent IT Recruitment",
    subtitle: "Building Teams That Last",
    intro: "",
    sections: [
      {
        heading: "Hire with Confidence",
        points: [
          "Clear understanding of your hiring needs and expectations",
          "Deep dive into your company culture and team dynamics",
          "Careful selection of candidates who match both skills and mindset",
          "Focus on long-term retention, not short-term placement",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Stronger, more stable teams",
          "Better cultural alignment",
          "Reduced hiring risk",
          "Professionals who grow with your business",
        ],
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Recruitment & Employer Branding",
    subtitle: "Position Your Company to Attract the Right Talent",
    intro: "",
    sections: [
      {
        heading: "Improve How You Hire",
        points: [
          "Analysis of your current hiring process",
          "Clear positioning of your company in the tech market",
          "Practical advice on attracting and engaging candidates",
          "Support in building a consistent and honest employer image",
        ],
      },
      {
        heading: "What Changes",
        points: [
          "More relevant candidates",
          "Better candidate experience",
          "Stronger market presence",
          "Higher offer acceptance rates",
        ],
      },
    ],
  },
  {
    icon: Clock,
    title: "Project-Based IT Recruitment",
    subtitle: "Flexible Hiring for Immediate Needs",
    intro: "",
    sections: [
      {
        heading: "Move Fast, Stay Effective",
        points: [
          "Quick understanding of project scope and requirements",
          "Access to professionals available for contract or part-time work",
          "Fast shortlisting and streamlined selection",
          "Focus on candidates who can adapt and deliver immediately",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Reduced downtime",
          "On-demand expertise",
          "Efficient project delivery",
          "Flexible hiring without long-term commitment",
        ],
      },
    ],
  },
  {
    icon: Globe,
    title: "Remote IT Hiring & Global Talent",
    subtitle: "Build Strong Teams Without Location Limits",
    intro: "",
    sections: [
      {
        heading: "Hire Beyond Borders",
        points: [
          "Access to a wider pool of tech talent",
          "Focus on communication, ownership, and reliability",
          "Support in building remote-ready teams",
          "Guidance on remote hiring best practices",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Stronger distributed teams",
          "Improved collaboration across locations",
          "Access to talent you can’t reach locally",
          "Scalable hiring model",
        ],
      },
    ],
  },
  {
    icon: Search,
    title: "Executive Search & Headhunting",
    subtitle: "Finding Leaders Who Make an Impact",
    intro: "",
    sections: [
      {
        heading: "Targeted Search Approach",
        points: [
          "Identification of proven leaders in the market",
          "Direct outreach to passive candidates",
          "Discreet and structured hiring process",
          "Focus on leadership, vision, and long-term impact",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "High-quality leadership candidates",
          "Faster access to decision-makers",
          "Confidential and professional process",
          "Leaders aligned with your business goals",
        ],
      },
    ],
  },
  {
    icon: UserCheck,
    title: "For Candidates",
    subtitle: "Find a Role That Actually Fits",
    intro: "",
    sections: [
      {
        heading: "Your Goals Come First",
        points: [
          "Clear conversation about your skills and direction",
          "Honest feedback and realistic opportunities",
          "Roles aligned with your expectations and lifestyle",
          "Support throughout the entire hiring process",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Relevant job opportunities",
          "Transparent communication",
          "Faster feedback",
          "Long-term career support",
        ],
      },
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);
  const [expandedMobiles, setExpandedMobiles] = React.useState<Set<string>>(new Set());

  const closePanel = () => setSelectedService(null);

  const toggleMobile = (service: Service) => {
    setExpandedMobiles((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(service.title)) {
        newSet.delete(service.title);
      } else {
        newSet.add(service.title);
      }
      return newSet;
    });
  };

  const isSelected = (service: Service) => selectedService?.title === service.title;
  const isExpandedMobile = (service: Service) => expandedMobiles.has(service.title);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 lg:mb-[100px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            Our IT Recruitment Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const selected = isSelected(service);
            const expanded = isExpandedMobile(service);

            return (
              <React.Fragment key={index}>
                <Card
                  className="group cursor-pointer hover:border-[#78B6D9] hover:shadow-lg transition-all duration-300 bg-[#f5f5f5] overflow-hidden"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      toggleMobile(service);
                    } else {
                      setSelectedService(service);
                    }
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-[#085689]" />
                        </div>
                        <CardTitle className="text-lg leading-tight pt-1">
                          {service.title}
                        </CardTitle>
                      </div>

                      <div
                        className={`mt-1 p-2 rounded-full transition-all duration-300 group-hover:scale-110
                          ${selected || expanded ? "rotate-45 bg-[#085689]/10" : "group-hover:rotate-12"}`}
                      >
                        {(selected || expanded) ? (
                          <X className="w-5 h-5 text-[#085689]" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#085689]" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* ==================== MOBILE EXPANSION WITH ANIMATION ==================== */}
                <div
                  className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
                    expanded ? "max-h-[1200px] opacity-100 mb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-white border border-[#78B6D9]/30 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                        <p className="text-lg text-[#085689] font-medium">{service.subtitle}</p>
                      </div>
                      <button 
                        onClick={() => toggleMobile(service)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                      {service.sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="text-xl font-semibold text-black mb-5">
                            {section.heading}
                          </h4>
                          <ul className="space-y-3">
                            {section.points.map((point, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-[17px] leading-relaxed text-gray-600"
                              >
                                <span className="text-[#085689] text-xl leading-none mt-0.5 flex-shrink-0">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="mt-10">
                      {service.title === "Permanent IT Recruitment" && (
                        <Button
                          onClick={() => scrollToSection("#companies")}
                          className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3.5 rounded-xl"
                        >
                          Learn more <Users className="w-4 h-4 ml-2" />
                        </Button>
                      )}

                      {service.title === "For Candidates" && (
                        <Button
                          onClick={() => scrollToSection("#jobs")}
                          className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3.5 rounded-xl"
                        >
                          See all Jobs <Search className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>

                    {service.title === "Executive Search & Headhunting" && (
                      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                          <div className="text-[2rem] font-bold text-[#085689]">25</div>
                          <div className="text-sm text-gray-600">Senior Roles</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[2rem] font-bold text-[#085689]">95%</div>
                          <div className="text-sm text-gray-600">Offer Acceptance Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[2rem] font-bold text-[#085689]">6-15</div>
                          <div className="text-sm text-gray-600">Days to Present Candidates</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xl text-slate-600 leading-relaxed mt-[80px]">
            We provide end-to-end IT recruitment services, helping companies hire top tech talent locally and globally.
          </p>
        </div>
      </div>

      {/* ==================== ORIGINAL DESKTOP SLIDING PANEL (UNTOUCHED) ==================== */}
      <div
        className={`fixed inset-0 z-50 flex items-start justify-end transition-all duration-300 ${selectedService ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-[#ededed]/90 backdrop-blur-md transition-opacity duration-300 ${selectedService ? "opacity-100" : "opacity-0"}`}
          onClick={closePanel}
        />

        <div
          className={`relative h-full w-full md:w-[50%] bg-[#efeeef] shadow-xl transform transition-transform duration-500 ease-out overflow-y-auto
            ${selectedService ? "translate-x-0" : "translate-x-full"}`}
        >
          {selectedService && (
            <div className="p-6 md:p-8">
              {/* ... Your exact original panel content ... */}
              <button
                onClick={closePanel}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <div className="w-20 h-20 rounded-2xl bg-[#085689]/10 flex items-center justify-center mb-8">
                <selectedService.icon className="w-12 h-12 text-[#085689]" />
              </div>

              <h3 className="text-3xl font-bold text-black mb-2">
                {selectedService.title}
              </h3>
              <p className="text-xl text-[#085689] font-medium mb-6">
                {selectedService.subtitle}
              </p>

              <p className="text-lg leading-relaxed text-gray-600 mb-10">
                {selectedService.intro}
              </p>

              <div className="grid grid-cols-1 [@media(min-width:1235px)]:grid-cols-2 gap-8 md:gap-12">
                {selectedService.sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-xl font-semibold text-black mb-5">
                      {section.heading}
                    </h4>
                    <ul className="space-y-3">
                      {section.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[17px] leading-relaxed text-gray-600"
                        >
                          <span className="text-[#085689] text-xl leading-none mt-0.5 flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                {selectedService.title === "Permanent IT Recruitment" && (
                  <Button
                    onClick={() => scrollToSection("#companies")}
                    className="w-full sm:w-auto px-8 py-3.5 text-base font-medium bg-[#085689] hover:bg-[#0a6a9c] text-white rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center gap-2"
                  >
                    Learn more
                    <Users className="w-4 h-4" />
                  </Button>
                )}

                {selectedService.title === "For Candidates" && (
                  <Button
                    onClick={() => scrollToSection("#jobs")}
                    className="w-full sm:w-auto px-8 py-3.5 text-base font-medium bg-[#085689] hover:bg-[#0a6a9c] text-white rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center gap-2"
                  >
                    See all Jobs
                    <Search className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {selectedService.title === "Executive Search & Headhunting" && (
                <div className="mt-16 border-t border-gray-200 pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-[2rem] font-bold leading-none text-[#085689]">25</div>
                      <div className="mt-4 text-md font-medium text-gray-700">Senior Roles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[2rem] font-bold leading-none text-[#085689]">95%</div>
                      <div className="mt-4 text-md font-medium text-gray-700">Offer Acceptance Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[2rem] font-bold leading-none text-[#085689]">6-15</div>
                      <div className="mt-4 text-md font-medium text-gray-700">Days to Present Candidates</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}