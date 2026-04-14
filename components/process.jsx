"use client";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We learn your culture, tech stack, and exactly who you need.",
    },
    {
        number: "02",
        title: "Search",
        description: "We tap our network of 31,000+ pre-vetted candidates.",
    },
    {
        number: "03",
        title: "Screen",
        description: "Technical assessments and culture fit. Only top 5% pass.",
    },
    {
        number: "04",
        title: "Present",
        description: "You get a shortlist of qualified candidates with detailed profiles.",
    },
    {
        number: "05",
        title: "Close",
        description: "We manage offers, negotiation, and onboarding support.",
    },
];

function Stat({ value, label }) {
    return (
        <div>
            <span className="block text-4xl font-bold text-accent-foreground md:text-5xl">
                {value}
            </span>
            <span className="mt-2 block text-sm uppercase tracking-widest text-accent-foreground/70">
                {label}
            </span>
        </div>
    );
}

export function ProcessSection() {
    return (
        <section id="process" className="bg-transparent px-4 py-24 md:px-8 md:py-32 mb-[200px]">
            <div className="mx-auto max-w-7xl">

                {/* Centered Header */}
                <div className="mb-20 text-center">
                    <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
                        How it works
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
                        The Process
                    </h2>
                </div>

                {/* Process Steps Grid */}
                <div className="grid gap-px bg-transparent md:grid-cols-5">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="group bg-transparent p-6 transition-colors hover:bg-accent-foreground hover:text-accent md:p-8"
                        >
                            <span className="mb-4 block text-5xl font-bold text-[#78B6D9] transition-colors group-hover:text-accent/30 md:text-6xl">
                                {step.number}
                            </span>
                            <h3 className="mb-3 text-xl font-bold  transition-colors group-hover:text-accent text-[#085689]">
                                {step.title}
                            </h3>
                            <p className="text-sm  leading-relaxed transition-colors group-hover:text-accent/80 text-slate-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Row */}

            </div>
        </section>
    );
}