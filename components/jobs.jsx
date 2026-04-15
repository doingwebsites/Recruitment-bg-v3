"use client";

import * as React from "react";
import { MapPin, Clock, Filter, X, Search } from "lucide-react";

const sampleJobs = [
  {
    id: 1,
    title: "Frontend Web Developers with React & Next.js",
    seniority: "2-5 years",
    location: "Sofia",
    type: "Hybrid",
    contract: "regular",
    logo: "/company-logos/logo1.svg",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind"],
    posted: "15 april.",
  },
  {
    id: 2,
    title: "Principal Developer Full Stack",
    seniority: "5+ years",
    location: "Sofia",
    type: "Hybrid",
    contract: "b2b",
    logo: "/company-logos/logo2.svg",
    techStack: ["Java", "Spring", "React", "PostgreSQL"],
    posted: "15 april.",
  },
  {
    id: 3,
    title: "Senior Frontend Engineer",
    seniority: "2-5 years",
    location: "Plovdiv",
    type: "Remote",
    contract: "freelance",
    logo: "/company-logos/logo3.svg",
    techStack: ["Vue", "Nuxt", "TypeScript"],
    posted: "15 april.",
  },
  {
    id: 4,
    title: "React Developer",
    seniority: "1-2 years",
    location: "Sofia",
    type: "Hybrid",
    contract: "regular",
    logo: "/company-logos/logo4.svg",
    techStack: ["React", "Three.js", "TypeScript"],
    posted: "15 april.",
  },
  {
    id: 5,
    title: "Backend Java Developer",
    seniority: "2-5 years",
    location: "Sofia",
    type: "Hybrid",
    contract: "b2b",
    logo: "/company-logos/logo5.svg",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
    posted: "15 april.",
  },
  {
    id: 6,
    title: "Full Stack .NET Developer",
    seniority: "5+ years",
    location: "Plovdiv",
    type: "Hybrid",
    contract: "freelance",
    logo: "/company-logos/logo6.svg",
    techStack: ["C#", ".NET", "React"],
    posted: "15 april.",
  },
  {
    id: 7,
    title: "Senior Backend Engineer",
    seniority: "2-5 years",
    location: "Varna",
    type: "Hybrid",
    contract: "regular",
    logo: "/company-logos/logo7.svg",
    techStack: ["Node.js", "Express", "MongoDB"],
    posted: "15 april.",
  },
  {
    id: 8,
    title: "Frontend React Developer",
    seniority: "1-2 years",
    location: "Varna",
    type: "Office",
    contract: "b2b",
    logo: "/company-logos/logo8.svg",
    techStack: ["React", "Next.js", "Tailwind"],
    posted: "15 april.",
  },
];

export function JobsSection() {
  const [selectedLocations, setSelectedLocations] = React.useState([]);
  const [selectedType, setSelectedType] = React.useState("all");
  const [selectedTech, setSelectedTech] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilters, setShowFilters] = React.useState(false);

  const locations = ["Sofia", "Plovdiv", "Varna", "Fully Remote"];

  const techOptions = [
    { value: "all", label: "All" },
    { value: "React", label: "React" },
    { value: "Next.js", label: "Next.js" },
    { value: "Java", label: "Java" },
    { value: "Vue", label: "Vue" },
    { value: "Node.js", label: "Node.js" },
    { value: ".NET", label: ".NET" },
    { value: "TypeScript", label: "TypeScript" },
  ];

  const filteredJobs = sampleJobs.filter((job) => {
    const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(job.location);
    const typeMatch = selectedType === "all" || job.type.toLowerCase() === selectedType;
    const techMatch = selectedTech === "all" || job.techStack.includes(selectedTech);

    const searchLower = searchQuery.toLowerCase().trim();
    const searchMatch = !searchLower ||
      job.title.toLowerCase().includes(searchLower) ||
      job.techStack.some(tech => tech.toLowerCase().includes(searchLower));

    return locationMatch && typeMatch && techMatch && searchMatch;
  });

  const getSubtitle = () => {
    if (selectedTech !== "all") return selectedTech;
    return "Development";
  };

  return (
    <section id="jobs" className="py-16 lg:py-24 lg:mb-[120px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
            Careers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Job Listings
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Discover your next opportunity in the Bulgarian IT sector. Over 50+ current positions from leading companies.
          </p>
        </div>

        {/* Search Bar - Centered on md & lg, Full width on mobile */}
        <div className="flex justify-center mb-10">
          <div className="w-full md:w-[50%] lg:w-[50%]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs by title or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 pl-12 pr-12 py-4 rounded-3xl text-lg focus:outline-none focus:border-[#78B6D9] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
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

              {/* Technology Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Technology</h3>
                <div className="grid grid-cols-2 gap-2">
                  {techOptions.map((tech) => (
                    <button
                      key={tech.value}
                      onClick={() => setSelectedTech(tech.value)}
                      className={`py-3 px-4 rounded-2xl text-sm font-medium transition-all ${selectedTech === tech.value
                        ? "bg-[#78B6D9] text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                    >
                      {tech.label}
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
                      className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${selectedType === type
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

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="mb-8 flex items-baseline gap-3">
              <span className="text-2xl font-semibold">{filteredJobs.length} listings</span>
              <span className="text-slate-500">for {getSubtitle()}</span>
              {searchQuery && (
                <span className="text-slate-500 text-sm">matching "{searchQuery}"</span>
              )}
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-[#f5f5f5] border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
                >
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black group-hover:text-[#085689] transition-colors line-clamp-2">
                        {job.title}
                      </h3>
                      <p className="text-[#085689] font-medium mt-1">{job.seniority}</p>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                          {job.type}
                        </div>
                        <div className="px-3 py-1 bg-[#78B6D9] text-white rounded-full text-xs font-medium capitalize">
                          {job.contract}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-between mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs shrink-0 ml-4">
                      <Clock className="w-3.5 h-3.5" />
                      {job.posted}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-20 text-slate-500">
                No jobs found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}