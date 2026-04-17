"use client";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapPin, Filter, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";


// ─── Job details ────────────────────────────────────────────────────────────
const jobDetails = {
  1: {
    overview: "We're looking for a motivated Frontend Developer to join our growing product team in Sofia. You'll be building rich, interactive user interfaces on a platform used by enterprise clients across Europe and contributing to architecture decisions from day one.",
    responsibilities: ["Develop and maintain React/Next.js web applications", "Collaborate with designers to implement pixel-perfect UIs", "Write clean, well-tested, and maintainable code", "Integrate RESTful APIs and GraphQL endpoints", "Participate in code reviews and agile ceremonies"],
    requirements: ["2–5 years of hands-on React & Next.js experience", "Solid understanding of TypeScript", "Familiarity with state management (Redux, Zustand, etc.)", "Knowledge of HTML5, CSS3 and responsive design", "Experience with Git and version control workflows"],
    niceToHave: ["Experience with animation libraries (Framer Motion)", "Familiarity with testing libraries (Jest, RTL)", "Prior work on data visualization projects"],
    offers: ["Competitive salary (negotiable)", "Flexible hybrid work schedule", "Health & dental insurance", "Annual learning budget (€1,000)", "Team events and company retreats"],
  },
  2: {
    overview: "A senior full-stack position for a developer who wants to shape the architecture of a modern SaaS platform. You will lead feature development across the entire stack, mentor junior engineers, and work directly with product management.",
    responsibilities: ["Architect and lead full-stack feature delivery", "Build scalable Java Spring services and React frontends", "Define API contracts and data models", "Mentor and support junior developers", "Participate in technical planning and sprint ceremonies"],
    requirements: ["5+ years of professional Java & Spring development", "Strong React skills and modern JavaScript knowledge", "Deep understanding of microservices architecture", "Experience with PostgreSQL or similar relational DBs", "Excellent communication skills in English"],
    niceToHave: ["Experience with Kafka or RabbitMQ", "Familiarity with Kubernetes and container orchestration", "Domain knowledge in fintech or SaaS"],
    offers: ["B2B contract with premium rates", "Remote flexibility", "Conference and certification budget", "Equity options after 1 year", "Top-tier hardware of your choice"],
  },
  3: {
    overview: "A fully remote Senior Frontend Engineer role focused on building a next-generation component library and design system used across multiple product teams. You'll drive the frontend architecture and work closely with UX/product.",
    responsibilities: ["Build and maintain a shared Vue/Nuxt component library", "Define frontend architecture standards", "Collaborate with UX to create accessible, responsive UIs", "Review pull requests and mentor mid-level engineers", "Optimize performance and Core Web Vitals"],
    requirements: ["2–5 years of Vue.js and Nuxt experience", "Strong TypeScript proficiency", "Solid knowledge of accessibility standards (WCAG)", "Experience with design systems and component APIs", "Excellent async communication skills"],
    niceToHave: ["Experience maintaining open-source Vue libraries", "Knowledge of Storybook or similar tools", "Familiarity with visual regression testing"],
    offers: ["Fully remote, async-first culture", "Competitive freelance or employment rate", "Co-working budget (€200/month)", "Dedicated learning time (Fridays)", "Annual team retreats in Europe"],
  },
  4: {
    overview: "Join our creative technology team as a React Developer working on immersive 3D web experiences for high-profile brands. You'll blend frontend development with WebGL and Three.js to push the boundaries of what's possible in the browser.",
    responsibilities: ["Develop interactive 3D experiences with Three.js and React", "Collaborate with creative directors and motion designers", "Optimize WebGL scenes for performance across devices", "Integrate APIs and CMS data into immersive UIs", "Contribute to internal tooling and R&D"],
    requirements: ["1–2 years of React experience", "Hands-on exposure to Three.js or WebGL", "Solid TypeScript fundamentals", "Understanding of the rendering pipeline and shader basics", "Portfolio demonstrating creative frontend work"],
    niceToHave: ["Experience with GSAP or Framer Motion", "Familiarity with GLSL shaders", "Background in design, animation, or digital art"],
    offers: ["Regular employment contract", "Hybrid schedule (Sofia office)", "Creative, non-corporate environment", "Access to licensed design/dev tools", "Hardware and home office budget"],
  },
  5: {
    overview: "We need a Backend Java Developer to help scale our microservices infrastructure handling millions of daily transactions. You'll work in a cross-functional team delivering a high-throughput platform and help set technical direction for the backend chapter.",
    responsibilities: ["Design, develop and maintain Java microservices", "Build and optimize RESTful and event-driven APIs", "Ensure high availability and performance of services", "Write comprehensive unit and integration tests", "Participate in on-call rotation for production systems"],
    requirements: ["2–5 years of professional Java & Spring Boot development", "Experience with PostgreSQL and query optimization", "Understanding of microservices and distributed systems", "Proficiency with Docker and CI/CD pipelines", "Strong problem-solving and analytical skills"],
    niceToHave: ["Experience with Kafka or RabbitMQ", "Familiarity with Kubernetes", "Knowledge of DDD and Clean Architecture"],
    offers: ["B2B contract with competitive rates", "100% remote flexibility available", "Premium health insurance package", "Conference and certification budget", "Top-tier hardware of your choice"],
  },
  6: {
    overview: "A senior freelance engagement to lead the redesign of a legacy ERP platform. You'll work closely with the CTO to architect a modern .NET and React solution, guide a small team, and deliver a scalable system that will serve the business for years to come.",
    responsibilities: ["Lead full-stack development across .NET and React", "Architect scalable and maintainable system designs", "Refactor legacy codebase to modern patterns", "Mentor and guide junior and mid-level developers", "Communicate technical plans to non-technical stakeholders"],
    requirements: ["5+ years of .NET and C# development", "Strong proficiency in React and modern JavaScript", "Experience designing and consuming REST APIs", "Knowledge of SQL Server and Entity Framework", "Proven track record of delivering large-scale projects"],
    niceToHave: ["Experience with Azure cloud services", "ERP or logistics domain knowledge", "Familiarity with DevOps / GitHub Actions", "Prior team lead or architect role"],
    offers: ["Competitive freelance day rate", "Flexible hours and hybrid schedule", "Long-term engagement (12+ months)", "Opportunity for permanent role", "Remote-first culture"],
  },
  7: {
    overview: "We're growing our backend team in Varna and looking for a Senior Backend Engineer to own our Node.js API layer. You'll work on a consumer-facing platform with a rapidly expanding user base, ensuring reliability, scalability, and developer experience.",
    responsibilities: ["Design and maintain Node.js/Express microservices", "Own the API layer for our consumer-facing platform", "Work with MongoDB and Redis for data and caching", "Drive observability, logging, and alerting improvements", "Collaborate with frontend and mobile teams on API contracts"],
    requirements: ["2–5 years of Node.js and Express experience", "Strong MongoDB skills and NoSQL data modeling", "Experience with REST API design best practices", "Proficiency with Docker and cloud infrastructure", "Commitment to code quality and test coverage"],
    niceToHave: ["Experience with GraphQL APIs", "Familiarity with serverless (AWS Lambda / Vercel)", "Knowledge of message queues (Bull, SQS)"],
    offers: ["Regular employment contract", "Hybrid schedule (Varna office)", "Health insurance and wellness budget", "Annual training allowance", "Modern office with great sea views"],
  },
  8: {
    overview: "A hands-on React Developer role within our in-house product team in Varna. You'll work in a fast-paced environment building customer-facing features, collaborating daily with designers and backend engineers, and shipping real code to real users.",
    responsibilities: ["Build and ship product features with React and Next.js", "Implement responsive UI with Tailwind CSS", "Collaborate closely with backend and design teams", "Write and maintain component tests", "Participate in sprint planning and retrospectives"],
    requirements: ["1–2 years of React development experience", "Familiarity with Next.js and the App Router", "Good understanding of Tailwind CSS", "Basic knowledge of RESTful API consumption", "Ability to work independently and take ownership"],
    niceToHave: ["Experience with Storybook", "Prior work in a product startup environment", "Familiarity with A/B testing tools"],
    offers: ["B2B contract", "Office-based in Varna", "Friendly and supportive team culture", "Flexible working hours", "Regular salary reviews"],
  },
};

// ─── Sample jobs ─────────────────────────────────────────────────────────────
const sampleJobs = [
  { id: 1, title: "Frontend Web Developers with React & Next.js", seniority: "2-5 years", location: "Sofia", type: "Hybrid", contract: "regular", techStack: ["React", "Next.js", "TypeScript"], posted: "15 april." },
  { id: 2, title: "Principal Developer Full Stack", seniority: "5+ years", location: "Sofia", type: "Hybrid", contract: "b2b", techStack: ["Java", "Spring", "React"], posted: "15 april." },
  { id: 3, title: "Senior Frontend Engineer", seniority: "2-5 years", location: "Plovdiv", type: "Remote", contract: "freelance", techStack: ["Vue", "Nuxt", "TypeScript"], posted: "15 april." },
  { id: 4, title: "React Developer", seniority: "1-2 years", location: "Sofia", type: "Hybrid", contract: "regular", techStack: ["React", "Three.js", "TypeScript"], posted: "15 april." },
  { id: 5, title: "Backend Java Developer", seniority: "2-5 years", location: "Sofia", type: "Hybrid", contract: "b2b", techStack: ["Java", "Spring Boot", "PostgreSQL"], posted: "15 april." },
  { id: 6, title: "Full Stack .NET Developer", seniority: "5+ years", location: "Plovdiv", type: "Hybrid", contract: "freelance", techStack: ["C#", ".NET", "React"], posted: "15 april." },
  { id: 7, title: "Senior Backend Engineer", seniority: "2-5 years", location: "Varna", type: "Hybrid", contract: "regular", techStack: ["Node.js", "Express", "MongoDB"], posted: "15 april." },
  { id: 8, title: "Frontend React Developer", seniority: "1-2 years", location: "Varna", type: "Office", contract: "b2b", techStack: ["React", "Next.js", "Tailwind"], posted: "15 april." },
];

// ─── Modal component — rendered via Portal directly on document.body ─────────
function JobModal({ job, onClose }) {



  const details = jobDetails[job.id];

  React.useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  React.useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, []);

  const BulletList = ({ items, color }) => (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 leading-snug">
          <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          {item}
        </li>
      ))}
    </ul>
  );

  const modalContent = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @media (min-width: 640px) {
          .modal-panel {
            align-self: center !important;
            max-width: 72rem !important;
            height: 90dvh !important;
          }
        }
      `}</style>

      <div
        className="modal-panel bg-white w-full flex flex-col"
        style={{
          height: "100dvh",
          maxHeight: "100dvh",
          animation: "slideUp 0.35s cubic-bezier(0.32, 0.72, 0, 1) forwards",
          overflow: "hidden",
        }}
      >
        {/* Header — pinned, never scrolls */}
        <div className="bg-[#085689] p-6 text-white relative shrink-0" >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.15)" }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
          >
            <X className="w-4 h-4" />
          </button>

          <h2 className="text-xl font-bold leading-tight pr-12 mb-1 text-white">{job.title}</h2>
          <p className="text-sm opacity-75 mb-4">{job.seniority}</p>

          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              <MapPin className="w-3 h-3" /> {job.location}
            </span>
            <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              {job.type}
            </span>
            <span className="text-xs px-3 py-1 rounded-full capitalize" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              {job.contract}
            </span>
            {job.techStack.map((t, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(120,182,217,0.35)", border: "1px solid rgba(120,182,217,0.5)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body — only this part scrolls */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="bg-slate-50  p-4">
            <p className="text-xs font-semibold text-[#085689] uppercase tracking-widest mb-2">Position Overview</p>
            <p className="text-sm text-slate-700 leading-relaxed">{details.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#085689] uppercase tracking-widest mb-1">Responsibilities</p>
              <BulletList items={details.responsibilities} color="#78B6D9" />
            </div>
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#085689] uppercase tracking-widest mb-1">Requirements</p>
              <BulletList items={details.requirements} color="#78B6D9" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#10b981] uppercase tracking-widest mb-1">Nice to Have</p>
              <BulletList items={details.niceToHave} color="#10b981" />
            </div>
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#f59e0b] uppercase tracking-widest mb-1">What We Offer</p>
              <BulletList items={details.offers} color="#f59e0b" />
            </div>

          </div>
          <p className="text-md text-slate-600 leading-relaxed text-center max-w-5xl mx-auto mt-5 mb-5">
            By applying for this position, you agree that your personal data will be processed according to our privacy policy.
          </p>
        </div>




        {/* Footer — pinned at bottom, never scrolls */}
        <div className="shrink-0 px-5 py-4 border-t border-slate-100">
          <button
            onClick={() => console.log(`Applying for: ${job.title}`)}
            className="w-full bg-[#085689] hover:bg-[#0a6a9e] text-white py-4 rounded-2xl font-semibold text-base transition-all active:scale-[0.98]"
          >
            Apply for this role
          </button>
        </div>
      </div>
    </div>
  );


  // completely outside the page scroll container
  return ReactDOM.createPortal(modalContent, document.body);
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function JobsSection() {
  const [selectedLocations, setSelectedLocations] = React.useState([]);
  const [selectedType, setSelectedType] = React.useState("all");
  const [selectedTech, setSelectedTech] = React.useState("all");
  const [selectedSeniorities, setSelectedSeniorities] = React.useState([]);
  const [selectedContracts, setSelectedContracts] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilters, setShowFilters] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState(null);

  const [openSections, setOpenSections] = React.useState({
    technology: true, seniority: true, location: true, contract: true, workModel: true,
  });

  const toggleSection = (section) =>
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

  const locations = ["Sofia", "Plovdiv", "Varna", "Fully Remote"];
  const seniorityOptions = ["1-2 years", "2-5 years", "5+ years"];
  const contractOptions = [
    { value: "regular", label: "Regular" },
    { value: "b2b", label: "B2B" },
    { value: "freelance", label: "Freelance" },
  ];
  const techOptions = [
    { value: "all", label: "All" }, { value: "React", label: "React" },
    { value: "Next.js", label: "Next.js" }, { value: "Java", label: "Java" },
    { value: "Vue", label: "Vue" }, { value: "Node.js", label: "Node.js" },
    { value: ".NET", label: ".NET" }, { value: "TypeScript", label: "TypeScript" },
  ];

  const filteredJobs = sampleJobs.filter((job) => {
    const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(job.location);
    const typeMatch = selectedType === "all" || job.type.toLowerCase() === selectedType;
    const techMatch = selectedTech === "all" || job.techStack.includes(selectedTech);
    const seniorityMatch = selectedSeniorities.length === 0 || selectedSeniorities.includes(job.seniority);
    const contractMatch = selectedContracts.length === 0 || selectedContracts.includes(job.contract);
    const searchLower = searchQuery.toLowerCase().trim();
    const searchMatch = !searchLower || job.title.toLowerCase().includes(searchLower) ||
      job.techStack.some(tech => tech.toLowerCase().includes(searchLower));
    return locationMatch && typeMatch && techMatch && seniorityMatch && contractMatch && searchMatch;
  });

  return (
    <section id="jobs" className="py-16 lg:py-24 lg:mb-[120px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Modal rendered via portal — no longer inside the section */}
        {selectedJob && (
          <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">Careers</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">Job Positions</h2>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <div className="w-full md:w-[50%]">
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
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Mobile filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 mx-auto bg-[#085689] text-white px-6 py-3 rounded-2xl mb-6"
          >
            <Filter className="w-5 h-5" />
            Filters
            {showFilters && <X className="w-5 h-5" />}
          </button>

          {/* Filters panel */}
          <div className={`lg:w-80 lg:shrink-0 transition-all ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-[#f5f5f5] border border-slate-200 rounded-3xl p-6 lg:sticky lg:top-8 space-y-6">

              <div>
                <button onClick={() => toggleSection('technology')} className="w-full flex items-center justify-between text-lg font-semibold mb-3 hover:text-[#085689] transition-colors">
                  Technology
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSections.technology ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.technology ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {techOptions.map((tech) => (
                      <button key={tech.value} onClick={() => setSelectedTech(tech.value)}
                        className={`py-3 px-4 rounded-2xl text-sm font-medium transition-all ${selectedTech === tech.value ? "bg-[#78B6D9] text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}>
                        {tech.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <button onClick={() => toggleSection('seniority')} className="w-full flex items-center justify-between text-lg font-semibold mb-3 hover:text-[#085689] transition-colors">
                  Seniority
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSections.seniority ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.seniority ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="space-y-3 pt-1">
                    {seniorityOptions.map((s) => (
                      <label key={s} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={selectedSeniorities.includes(s)}
                          onChange={() => setSelectedSeniorities((prev) => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])}
                          className="w-5 h-5 accent-[#78B6D9] rounded" />
                        <span className="text-slate-700">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <button onClick={() => toggleSection('location')} className="w-full flex items-center justify-between text-lg font-semibold mb-3 hover:text-[#085689] transition-colors">
                  Location
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSections.location ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.location ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="space-y-3 pt-1">
                    {locations.map((loc) => (
                      <label key={loc} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={selectedLocations.includes(loc)}
                          onChange={() => setSelectedLocations((prev) => prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc])}
                          className="w-5 h-5 accent-[#78B6D9] rounded" />
                        <span className="text-slate-700">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <button onClick={() => toggleSection('contract')} className="w-full flex items-center justify-between text-lg font-semibold mb-3 hover:text-[#085689] transition-colors">
                  Contract Type
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSections.contract ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.contract ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="space-y-3 pt-1">
                    {contractOptions.map((c) => (
                      <label key={c.value} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={selectedContracts.includes(c.value)}
                          onChange={() => setSelectedContracts((prev) => prev.includes(c.value) ? prev.filter(x => x !== c.value) : [...prev, c.value])}
                          className="w-5 h-5 accent-[#78B6D9] rounded" />
                        <span className="text-slate-700">{c.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <button onClick={() => toggleSection('workModel')} className="w-full flex items-center justify-between text-lg font-semibold mb-3 hover:text-[#085689] transition-colors">
                  Work Model
                  <ChevronDown className={`w-5 h-5 transition-transform ${openSections.workModel ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.workModel ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="space-y-2 pt-1">
                    {["all", "hybrid", "remote", "office"].map((type) => (
                      <button key={type} onClick={() => setSelectedType(type)}
                        className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${selectedType === type ? "bg-[#78B6D9] text-white" : "hover:bg-slate-100 text-slate-700"}`}>
                        {type === "all" ? "All" : type === "hybrid" ? "Hybrid" : type === "remote" ? "Fully Remote" : "Office"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job cards */}
          <div className="flex-1">
            <div className="mb-8 flex items-baseline gap-3">
              <span className="text-2xl font-semibold">{filteredJobs.length} positions</span>
              {searchQuery && <span className="text-slate-500 text-sm">matching "{searchQuery}"</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-[#f5f5f5] border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black group-hover:text-[#085689] transition-colors line-clamp-2">{job.title}</h3>
                      <p className="text-[#085689] font-medium mt-1">{job.seniority}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm">
                        <div className="flex items-center gap-1.5 text-slate-600"><MapPin className="w-4 h-4" />{job.location}</div>
                        <div className="px-3 py-1 bg-[#085689] text-white rounded-full text-xs font-medium">{job.type}</div>
                        <div className="px-3 py-1 bg-[#085689] text-white rounded-full text-xs font-medium capitalize">{job.contract}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl">{tech}</span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bg-[#78B6D9] hover:bg-[#0a6a9e] text-white px-4 py-2 rounded-2xl text-xs font-medium transition-all active:scale-95"
                    >
                      View Position
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-20 text-slate-500">No jobs found matching your criteria.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}