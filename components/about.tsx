import * as React from "react";
import Image from "next/image";
import { Heart, Handshake, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Honesty",
  },
  {
    icon: Handshake,
    title: "Relationships",
  },
  {
    icon: Sparkles,
    title: "Passion",
  },
];

export function About(): React.JSX.Element {
  return (
    <section className="py-24 lg:py-32 lg:mb-[120px] md:mb-[50px] sm:md-[0px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: */}
          <div className="space-y-10">

            <div>
              <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
                About Us
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">
                Partnering to Build Exceptional Tech Teams
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach is simple: listen carefully, understand deeply, and deliver consistently.
                Whether you&apos;re a startup scaling your engineering team or an enterprise seeking
                senior leadership, we bring the same dedication to every partnership.
              </p>
            </div>

            {/* Small Icons Row - Below Description */}
            <div className="grid grid-cols-3 gap-6 md:gap-10">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-row items-center gap-2 ${value.title === "Relationships" ? "-ml-3" : ""}`}
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#78B6D9]" />
                    </div>

                    <p className="text-sm font-medium text-black tracking-tight">
                      {value.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column*/}
          <div className="relative w-full aspect-[16/10] lg:aspect-[4/3]  overflow-hidden">
            <Image
              src="/uploaded/team1.jpg"
              alt="Team collaborating to build exceptional tech teams"
              width={1400}
              height={800}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}