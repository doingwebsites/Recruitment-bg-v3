"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiLinkedinBoxFill
} from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";

export function MeetTheTeam() {
  const [scrollContainer, setScrollContainer] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!scrollContainer) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    if (!scrollContainer) return;

    updateScrollState();

    scrollContainer.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [scrollContainer]);

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
      quote: "I am fair by nature, lives in the nature.",
    },
    {
      name: "Silvia Markova",
      image: "/members/ai/silvia1.png",
      linkedin: "https://bg.linkedin.com/in/silvia-markova-b98470233",
      quote: "Reliable person who recharges with books, hiking, coffee and successful hires.",
    },
    {
      name: "Irina Tojeva",
      image: "/members/ai/irina1.png",
      linkedin: "https://linkedin.com/in/irina-tojeva",
      quote: "A rebellious empath who cuts through bad hiring and makes the right matches happen.",
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
      quote: "I love nature, my kinds and positive vibes. No excuses in work, no excuses in real life.",
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
      quote: "Not a corporate lady, just a human. Researcher, parent, village life, mountain lover.",
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
      name: "Tania Danilenko",
      image: "/members/ai/tania.png",
      linkedin: "https://bg.linkedin.com/in/tanya-danilenko-8221391a9",
      quote: "Consistent, reliable, and kind. I value respectful people.",
    },
    {
      name: "Yulia Rapinchuk",
      image: "/members/ai/yulia.jpg",
      linkedin: "https://linkedin.com/in/yulia-rapinchuk",
      quote: "I build relationships strong enough to survive both market crashes and group-chat memes.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 lg:mb-[120px] md:mb-[50px] sm:md-[0px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
            Nice to meet you
          </h2>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto mb-20">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <TbPointFilled size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">No BS</h3>
                <p className="text-gray-600">Just straight talk with honesty</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <TbPointFilled size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Ghosting</h3>
                <p className="text-gray-600">We always reply</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-[-15px]">
            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <TbPointFilled size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Real Conversations</h3>
                <p className="text-gray-600">We say no to templates</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <TbPointFilled size={32} />
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
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mt-[-30px]"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-[80%] flex-shrink-0 snap-start group sm:w-[33.333%] sm:px-3 mt-[50px]"
              >
                <div className="rounded-3xl overflow-hidden flex flex-col items-center">

                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-[200px] h-[200px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover border-4 border-[#085689] rounded-full"
                      />
                    </div>

                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200">
                        <RiLinkedinBoxFill className="mt-6" size={36} />
                      </a>
                    )}
                  </div>

                  <div className="p-7 flex-1 flex flex-col items-center">
                    <p className="font-semibold text-lg text-gray-900">{member.name}</p>
                    <div className="text-gray-600 text-[15px] italic text-center mt-4">
                      "{member.quote}"
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
        <div className="flex items-center justify-center mt-[-20px]">
  <div className="flex gap-3 mt-[50px]">

    {/* Left Arrow */}
    <button
      onClick={() => scroll("left")}
      className={`w-11 h-11 rounded-full text-white bg-[#085689] flex items-center justify-center
        transform transition-all duration-200 ease-out
        ${canScrollLeft
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-75 translate-y-2 pointer-events-none"
        }`}
    >
      <RiArrowLeftSLine size={24} />
    </button>

    {/* Right Arrow */}
    <button
      onClick={() => scroll("right")}
      className={`w-11 h-11 rounded-full text-white bg-[#085689] flex items-center justify-center
        transform transition-all duration-200 ease-out
        ${canScrollRight
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-75 translate-y-2 pointer-events-none"
        }`}
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