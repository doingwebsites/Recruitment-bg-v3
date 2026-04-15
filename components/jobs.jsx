"use client";

import * as React from "react";
import { MapPin, Clock, Filter, X } from "lucide-react";

const sampleJobs = [
  {
    id: 1,
    title: "Frontend Web Developers with React & Next.js",
    company: "MobiSystems",
    location: "Sofia",
    type: "Hybrid",
    posted: "15 april.",
    logo: "/company-logos/logo1.svg",
    category: "frontend",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Principal Developer Full Stack",
    company: "European Bank",
    location: "Sofia",
    type: "Hybrid",
    posted: "15 april.",
    logo: "/company-logos/logo2.svg",
    category: "fullstack",
    techStack: ["Java", "Spring", "React", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Senior Frontend Engineer",
    company: "Scalefocus",
    location: "Plovdiv",
    type: "Remote",
    posted: "15 april.",
    logo: "/company-logos/logo3.svg",
    category: "frontend",
    techStack: ["Vue", "Nuxt", "TypeScript"],
  },
  {
    id: 4,
    title: "React Developer",
    company: "Chaos Group",
    location: "Sofia",
    type: "Hybrid",
    posted: "15 april.",
    logo: "/company-logos/logo4.svg",
    category: "frontend",
    techStack: ["React", "Three.js", "TypeScript"],
  },
  {
    id: 5,
    title: "Backend Java Developer",
    company: "Chaos Group",
    location: "Sofia",
    type: "Hybrid",
    posted: "15 april.",
    logo: "/company-logos/logo5.svg",
    category: "backend",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Full Stack .NET Developer",
    company: "Chaos Group",
    location: "Plovdiv",
    type: "Hybrid",
    posted: "15 april.",
    logo: "/company-logos/logo6.svg",
    category: "fullstack",
    techStack: ["C#", ".NET", "React"],
  },
  {
    id: 7,
    title: "Senior Backend Engineer",
    company: "Chaos Group",
    location: "Varna",
    type: "Hybrid",
    posted: "15 april.",
    logo: "/company-logos/logo7.svg",
    category: "backend",
    techStack: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 8,
    title: "Frontend React Developer",
    company: "Chaos Group",
    location: "Varna",
    type: "Office",
    posted: "15 april.",
    logo: "/company-logos/logo8.svg",
    category: "frontend",
    techStack: ["React", "Next.js", "Tailwind"],
  },
  
];

export function JobsSection() {
  const [selectedLocations, setSelectedLocations] = React.useState([]);
  const [selectedType, setSelectedType] = React.useState("all");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [showFilters, setShowFilters] = React.useState(false);

  const locations = ["Sofia", "Plovdiv", "Varna", "Fully Remote"];

  const categoryOptions = [
    { value: "all", label: "All" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ];

  const filteredJobs = sampleJobs.filter((job) => {
    const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(job.location);
    const typeMatch = selectedType === "all" || job.type.toLowerCase() === selectedType;
    const categoryMatch = selectedCategory === "all" || job.category === selectedCategory;

    return locationMatch && typeMatch && categoryMatch;
  });

  // Dynamic subtitle text
  const getCategoryLabel = () => {
    if (selectedCategory === "frontend") return "Frontend Development";
    if (selectedCategory === "backend") return "Backend Development";
    if (selectedCategory === "fullstack") return "Full Stack Development";
    return "Development";
  };

  return (
    <section id="jobs" className="py-16 lg:py-24 mb-[200px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
            Careers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Job Listings
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Discover your next opportunity in the Bulgarian IT sector. Over 50+ current positions from leading companies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 mx-auto bg-[#085689] text-white px-6 py-3 rounded-2xl mb-6"
          >
            <Filter className="w-5 h-5" />
            Filters
            {showFilters && <X className="w-5 h-5" />}
          </button>

          {/* Filters Panel */}
          <div className={`lg:w-80 lg:shrink-0 transition-all ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-[#f5f5f5] border border-slate-200 rounded-3xl p-6 lg:sticky lg:top-8">
              
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="font-semibold text-xl">Filters</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Job Category</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categoryOptions.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`py-3 px-4 rounded-2xl text-sm font-medium transition-all ${
                        selectedCategory === cat.value
                          ? "bg-[#78B6D9] text-white"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <h3 className="font-semibold text-lg mb-6 hidden lg:block">Location</h3>
              <div className="space-y-3">
                {locations.map((loc) => (
                  <label key={loc} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedLocations.includes(loc)}
                      onChange={() =>
                        setSelectedLocations((prev) =>
                          prev.includes(loc)
                            ? prev.filter((l) => l !== loc)
                            : [...prev, loc]
                        )
                      }
                      className="w-5 h-5 accent-[#78B6D9] rounded"
                    />
                    <span className="text-slate-700">{loc}</span>
                  </label>
                ))}
              </div>

              {/* Work Type Filter */}
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Type</h3>
                <div className="space-y-2">
                  {["all", "hybrid", "remote", "office"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${
                        selectedType === type
                          ? "bg-[#78B6D9] text-white"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      {type === "all" && "All"}
                      {type === "hybrid" && "Hybrid"}
                      {type === "remote" && "Fully Remote"}
                      {type === "office" && "Office"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="flex-1">
            <div className="mb-8">
              <span className="text-2xl font-semibold ">{filteredJobs.length} listings</span>
              <span className="text-slate-500 ml-2">for {getCategoryLabel()}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-[#f5f5f5] border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
                >
                  <div className="flex gap-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-12 h-12 rounded-2xl object-contain border border-slate-100 flex-shrink-0"
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black group-hover:text-[#085689] transition-colors line-clamp-2">
                        {job.title}
                      </h3>
                      <p className="text-[#085689] font-medium mt-1">{job.company}</p>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Clock className="w-4 h-4" />
                          {job.posted}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto pt-6">
                    {job.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}