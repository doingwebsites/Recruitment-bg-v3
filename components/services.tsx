"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Plus, Users, Briefcase, Clock, Globe, Search, UserCheck } from "lucide-react";

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
    title: "Permanent Recruitment",
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
    title: "Project-Based Recruitment",
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
    title: "Remote Hiring",
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

  const closePanel = () => setSelectedService(null);

  const isSelected = (service: Service) => selectedService?.title === service.title;

  return (
    <section id="services" className="py-24 lg:py-32 lg:mb-[100px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - unchanged */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            What we do
          </h2>
        </div>

        {/* Services Grid - unchanged */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const selected = isSelected(service);

            return (
              <Card
                key={index}
                className="group cursor-pointer hover:border-[#78B6D9] hover:shadow-lg transition-all duration-300 bg-[#f5f5f5] overflow-hidden"
                onClick={() => setSelectedService(service)}
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
                        ${selected ? "rotate-45 bg-[#085689]/10" : "group-hover:rotate-12"}`}
                    >
                      {selected ? (
                        <X className="w-5 h-5 text-[#085689]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#085689]" />
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Sliding Panel - Updated with Two-Column Layout */}
      <div
        className={`fixed inset-0 z-50 flex items-start justify-end transition-all duration-300 ${
          selectedService ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#ededed]/90 backdrop-blur-md transition-opacity duration-300 ${
            selectedService ? "opacity-100" : "opacity-0"
          }`}
          onClick={closePanel}
        />

        <div
          className={`relative h-full w-full md:w-[50%] bg-[#efeeef] shadow-xl transform transition-transform duration-500 ease-out overflow-y-auto
            ${selectedService ? "translate-x-0" : "translate-x-full"}`}
        >
          {selectedService && (
            <div className="p-6 md:p-8">
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

              {/* Two Columns only above 1235px */}
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}