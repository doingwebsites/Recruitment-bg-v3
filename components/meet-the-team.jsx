"use client";

import Image from "next/image";
import { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiLinkedinBoxFill
} from "react-icons/ri";
import { TbPointFilled  } from "react-icons/tb";


export function MeetTheTeam() {
  const [scrollContainer, setScrollContainer] = useState(null);

  const scroll = (direction) => {
    if (!scrollContainer) return;

    const isMobile = window.innerWidth < 640;
    const scrollAmount = isMobile
      ? scrollContainer.offsetWidth
      : scrollContainer.offsetWidth / 3;

    scrollContainer.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const teamMembers = [
    {
      name: "Veselin Raykov",
      image: "/members/ai/veselin.jpg",
      linkedin: "https://bg.linkedin.com/in/veselinraykovhr",
      quote: "After countless meetings, one thing hasn't changed—I still believe in people. Results, no excuses.",
    },
    {
      name: "Diana Tosheva",
      image: "/members/diana.png",
      linkedin: "https://bg.linkedin.com/in/diana-tosheva-037144208",
      quote: "Competative by nature, inspired by results",
    },
    {
      name: "Svetlana Manolova",
      image: "/members/ai/svetlana1.png",
      linkedin: "https://bg.linkedin.com/in/svetlana-manolova-62051b197",
      quote: "Loves to sing, travel and be with the family. Believes in people genuinely until proven otherwise",
    },
    {
      name: "Mirela Nikolova",
       image: "/members/ai/mirela.png",
      linkedin: "https://bg.linkedin.com/in/mirela-nikolova",
      quote: "Building bridges between talent and companies — fuelled by hope that culture actually fits.",
    },
    {
      name: "Silvia Markova",
      image: "/members/ai/silvia1.png",
      linkedin: "https://bg.linkedin.com/in/silvia-markova-b98470233",
      quote: "I refuse to rush the fit. The right person always arrives exactly when the team needs it.",
    },
    {
      name: "Irina Tojeva",
      image: "/members/ai/irina.png",
      linkedin: "https://linkedin.com/in/irina-tojeva",
      quote: "Passion for knowledge, passion for better recruitment, and turning 'the why's' into 'you belong here.",
    },
    {
      name: "Victor Stefanov",
      image: "/members/victor.png",
      linkedin: "https://linkedin.com/in/victor-stefanov",
      quote: "Great companies hire talent. Smart ones build relationships first.",
    },
    {
      name: "Gabriela Vejinova",
      image: "/members/ai/gabi2.png",
      linkedin: "https://www.linkedin.com/in/gabriela-vezhinova-80886a371/",
      quote: "I match people to roles the way a good editor finds the perfect sentence: invisible until it clicks.",
    },
    {
      name: "Valentina Nikolova",
      image: "/members/valentina.png",
      linkedin: "https://bg.linkedin.com/in/valentina-nikolova-958563215",
      quote: "Connecting people with opportunities through caffeine, curiosity, and a soft spot for East Asian culture and art.",
    },

    {
      name: "Gabriela Ignatova",
      image: "/members/ai/gabi1.png",
      linkedin: "https://linkedin.com/in/gabriela-ignatova",
      quote: "Strategic enough to spot talent, human enough to notice when someone's eyes light up.",
    },
    {
      name: "Andrea Miteva",
      image: "/members/ai/andrea.jpg",
      linkedin: "https://bg.linkedin.com/in/andrea-miteva-70b7ab366?trk=people-guest_people_search-card",
      quote: "Matching talented professionals with the right opportunities, with a people-first focus.",
    },
    {
      name: "Kalin Motovilkov",
      image: "/members/ai/kalin.jpg",
      linkedin: "https://bg.linkedin.com/in/kalin-motovilkov",
      quote: "Serious about results, slightly amused by how perfect they are.",
    },

    {
      name: "Yulia Rapinchuk",
      image: "/members/ai/yulia.jpg",
      linkedin: "https://linkedin.com/in/yulia-rapinchuk",
      quote: "I build relationships strong enough to survive both market crashes and group-chat memes.",
    },


    // {
    //   name: "Tania Danilenko",
    //   image: "/members/ai/tania.png",
    //   linkedin: "https://bg.linkedin.com/in/tanya-danilenko-8221391a9",
    //   quote: "I hunt for that rare spark where a developer's weird side project meets a company's secret ambition.",
    // },

  ];

  return (
    <section id="about" className="py-20 lg:py-28 lg:mb-[120px] md:mb-[50px] sm:md-[0px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
            Nice to meet you
          </h2>
        </div>

        {/* Hero Team Image */}
        <div className="relative shadow-2xl rounded-3xl overflow-hidden mb-20">
          <Image
            src="/uploaded/team2.jpg"
            alt="Our Team"
            width={1400}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto mb-24 mt-[100px]">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <TbPointFilled  size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">No BS</h3>
                <p className="text-gray-600">Just straight talk with honesty</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <TbPointFilled  size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Ghosting</h3>
                <p className="text-gray-600">We always reply</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <TbPointFilled  size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Real Conversations</h3>
                <p className="text-gray-600">We say no to templates</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <TbPointFilled  size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">No position</h3>
                <p className="text-gray-600">We will let you know. But still will be looking.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Carousel */}
        <div>
          <div
            ref={setScrollContainer}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 snap-start group sm:w-[33.333%] sm:px-3 mt-[50px]"
              >
                <div className="rounded-3xl overflow-hidden transition-all duration-500 h-full flex flex-col items-center">

                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-[200px] h-[200px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover border-4 border-[#085689] rounded-[100%] duration-700 group-hover:scale-101 transition-all"
                      />
                    </div>

                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200" aria-label={`${member.name} LinkedIn`}>
                        <RiLinkedinBoxFill className="mt-6" size={36} />
                      </a>
                    )}
                  </div>

                  <div className="p-7 flex-1 flex flex-col items-center relative">
                    <div className="mb-5 text-center">
                      <p className="font-semibold text-lg text-gray-900">{member.name}</p>
                      <p className="text-[#085689] text-sm mt-1">{member.title}</p>
                    </div>
                    <div className="text-gray-600 text-[15px] leading-relaxed italic text-center flex-1">
                      "{member.quote}"
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="flex gap-3 mt-[50px]">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full border text-white border-gray-300 flex items-center bg-[#085689] justify-center hover:bg-[#78B6D9] active:bg-gray-200 transition-all"
                aria-label="Scroll left"
              >
                <RiArrowLeftSLine size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full border text-white border-gray-300 flex items-center bg-[#085689] justify-center hover:bg-[#78B6D9] active:bg-gray-200 transition-all"
                aria-label="Scroll right"
              >
                <RiArrowRightSLine size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}