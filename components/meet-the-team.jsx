"use client";

import Image from "next/image";
import { 
  RiMessage2Line, 
  RiUserSearchLine, 
  RiReplyLine, 
  RiCloseCircleLine 
} from "react-icons/ri";

export function MeetTheTeam() {
  return (
    <section className="py-20 lg:py-28 lg:mb-[120px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Meet the Team
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 text-balance">
            Nice to meet you
          </h2>
        </div>

        <div className="relative shadow-2xl rounded-xl overflow-hidden">
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
        <div className="mt-30 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <RiMessage2Line size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">No BS</h3>
                <p className="text-gray-600">Just straight talk with honesty</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <RiReplyLine size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Ghosting</h3>
                <p className="text-gray-600">We always reply</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <RiMessage2Line size={32} />   {/* You can change this icon if you prefer */}
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Real Conversations</h3>
                <p className="text-gray-600">We say no to templates</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#085689] mt-1">
                <RiUserSearchLine size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">No position</h3>
                <p className="text-gray-600">We will let you know. But still will be looking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}