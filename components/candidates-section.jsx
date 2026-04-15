"use client";

import { User, Target, HeartHandshake } from "lucide-react";

const candidateSteps = [
    {
        icon: <User className="w-9 h-9" />,
        title: "You tell us what you actually look for",
        description: "I'm a React developer who loves remote work. I'm looking for a team where I can grow and work in a flexible environment.",
    },
    {
        icon: <Target className="w-9 h-9" />,
        title: "We match you with the right opportunities",
        description: "Our AI (smart.R) + experienced recruiters connect you with roles that truly fit your goals.",
    },
    {
        icon: <HeartHandshake className="w-9 h-9" />,
        title: "We support you through the process",
        description: "Fast feedback, honest guidance, and long-term support throughout your journey.",
    },
];

export function CandidatesSection() {
    return (
        <section className=" px-4 py-24 md:px-8 md:py-32 lg:mb-[120px] md:mb-[50px] sm:md-[0px]">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                        FOR CANDIDATES
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
                        Your Next Career Move
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        We take the time to understand your goals, skills, and aspirations to connect you with 
                        opportunities that genuinely feel right.
                    </p>
                </div>

                {/* Desktop: Horizontal Line + Numbers on Top */}
                <div className="hidden md:flex justify-center mb-12">
                    <div className="relative w-full max-w-4xl">
                        <div className="absolute top-5 left-0 right-0 h-px bg-[#78B6D9]/30" />
                        <div className="relative flex justify-between px-8">
                            <span className="px-5 text-3xl font-bold text-[#78B6D9] ml-[-20px]">01</span>
                            <span className=" px-5 text-3xl font-bold text-[#78B6D9] ">02</span>
                            <span className=" px-5 text-3xl font-bold text-[#78B6D9] mr-[-20px]">03</span>
                        </div>
                    </div>
                </div>

                {/* Steps */}
                <div className="relative">

                    {/* Mobile: Vertical Line */}
                    <div className="md:hidden absolute left-[20px] top-12 bottom-6 w-px bg-[#78B6D9]/30" />

                    <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
                        {candidateSteps.map((step, index) => (
                            <div 
                                key={index} 
                                className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 text-center relative"
                            >
                                {/* Mobile Number + Icon Row */}
                                <div className="flex items-center gap-6 md:hidden">
                                    {/* Number for Mobile */}
                                    <div className="w-10 h-10 flex-shrink-0  flex items-center justify-center z-10">
                                        <span className="text-xl font-bold text-[#78B6D9]">0{index + 1}</span>
                                    </div>

                                    {/* Small Icon */}
                                    {/* <div className="w-5 h-5 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100">
                                        <div className="text-[#085689]">
                                            {step.icon}
                                        </div>
                                    </div> */}
                                </div>

                                {/* Desktop Icon Only */}
                                <div className="hidden md:block w-10 h-12 mx-auto flex items-center justify-center  rounded-2xl  mb-6">
                                    <div className="text-[#085689]">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Title + Description */}
                                <div className="flex-1 md:text-center">
                                    <h3 className="font-semibold text-lg text-black mb-3 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 text-[15px] leading-relaxed px-2">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Desktop Numbers (already handled above the grid) */}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}