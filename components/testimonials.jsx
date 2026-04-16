"use client";

import * as React from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Diana from Recruitment.bg helped me find a role that perfectly matched my skills and career goals. The process was seamless from application to offer.",
    name: "Georgi Dimitrov",
    position: "AI Engineer",
    company: "NeuralSystems",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    id: 2,
    text: "Outstanding service! They understood exactly what I was looking for and connected me with the right opportunities. Highly recommended.",
    name: "Maria Ivanova",
    position: "HR Director",
    company: "GlobalTech",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    id: 3,
    text: "The team made the entire hiring process smooth and transparent. I found a great Full Stack role within just 3 weeks.",
    name: "Stefan Todorov",
    position: "DevOps Engineer",
    company: "InfraCore",
    avatar: "/avatars/avatar3.jpg",
  },
  {
    id: 4,
    text: "Professional, responsive, and truly care about matching the right talent with the right company. Best recruitment experience I've had.",
    name: "Elena Petrova",
    position: "Senior Frontend Developer",
    company: "ScaleFlow",
    avatar: "/avatars/avatar4.jpg",
  },
  {
    id: 5,
    text: "Thanks to Recruitment.bg I joined my dream company. Their personalized approach made all the difference.",
    name: "Ivan Kolev",
    position: "Backend Architect",
    company: "DataSphere",
    avatar: "/avatars/avatar5.jpg",
  },
  {
    id: 6,
    text: "Very professional and efficient. They guided me through every step and helped negotiate a great offer.",
    name: "Svetlana Marinova",
    position: "Product Manager",
    company: "InnovateBG",
    avatar: "/avatars/avatar6.jpg",
  },
  {
    id: 7,
    text: "They really listen to what you want. Found me a remote position with excellent work-life balance.",
    name: "Nikolay Hristov",
    position: "Mobile Developer",
    company: "AppVision",
    avatar: "/avatars/avatar7.jpg",
  },
  {
    id: 8,
    text: "Fast, reliable and always available. They helped us hire 6 great developers in 2025.",
    name: "Atanas Georgiev",
    position: "CTO",
    company: "TechNova",
    avatar: "/avatars/avatar8.jpg",
  },
  {
    id: 9,
    text: "The best recruitment agency I've worked with in Bulgaria. Very high quality candidates.",
    name: "Viktoria Dimitrova",
    position: "Talent Acquisition Lead",
    company: "BrightFuture",
    avatar: "/avatars/avatar9.jpg",
  },
  {
    id: 10,
    text: "They helped me make a big career jump. Extremely supportive throughout the whole process.",
    name: "Boris Angelov",
    position: "Senior Software Engineer",
    company: "QuantumSoft",
    avatar: "/avatars/avatar10.jpg",
  },
  {
    id: 11,
    text: "Outstanding communication and real care for both candidates and clients.",
    name: "Daniela Stoyanova",
    position: "UX/UI Designer",
    company: "PixelCraft",
    avatar: "/avatars/avatar11.jpg",
  },
  {
    id: 12,
    text: "Found me a leadership role I didn't even know existed. Incredible network!",
    name: "Plamen Vasilev",
    position: "Engineering Manager",
    company: "CoreSystems",
    avatar: "/avatars/avatar12.jpg",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToPrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-slide every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 lg:py-28 lg:mb-[120px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Success stories from our hirings and IT clients
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Hear from candidates and employers who found success through our work together.
          </p>
        </div>

        {/* Testimonials Container with Arrows */}
        <div className="relative min-h-[520px] md:min-h-[480px]">
          
          {/* Left Arrow */}
       <button
            onClick={goToPrev}
            className="hidden md:flex absolute  lg:-left-20 top-42 -translate-y-1/2 z-20 
                       bg-[#085689] hover:bg-[#78B6D9] p-4 rounded-full shadow-lg hover:shadow-xl 
                       transition-all duration-200 items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Testimonials Grid */}
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
              isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
            }`}
          >
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#f5f5f5] rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <Quote className="w-10 h-10 text-[#78B6D9] mb-6" />

                <p className="text-slate-700 leading-relaxed flex-1 mb-8">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
        <button
            onClick={goToNext}
            className="hidden md:flex absolute -right-6 lg:-right-20 top-42 -translate-y-1/2 z-20 
                       bg-[#085689] hover:bg-[#78B6D9] p-4 rounded-full shadow-lg hover:shadow-xl 
                       transition-all duration-200 items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? "bg-[#085689] scale-125" 
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}