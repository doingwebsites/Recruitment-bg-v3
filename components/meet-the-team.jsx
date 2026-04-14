"use client";

import Image from "next/image";

export function MeetTheTeam() {
  return (
    <section className="py-20 lg:py-28 mb-[200px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#085689] uppercase tracking-wider mb-4">
            Meet the Team
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-poppins tracking-tight text-slate-900 mb-6">
            Nice to meet you
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Dedicated to matching your skills with the right opportunity.
          </p>
        </div>

        <div className="relative shadow-2xl">
          <Image
            src="/uploaded/team2.jpg"   // ← Change this to your actual image path
            alt="Our Team"
            width={1400}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>
        
      </div>
    </section>
  );
}