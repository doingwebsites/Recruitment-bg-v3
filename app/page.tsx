

import * as React from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { SpecializedRecruitment } from "@/components/specialized"
import { TrustSection } from "@/components/track-record"
import { CompaniesSection } from "@/components/companies-section"
import { ProcessSection } from "@/components/process"
import { About } from "@/components/about"
import { MeetTheTeam } from "@/components/meet-the-team"
import { SmartRSection } from "@/components/smartr"
import { CandidatesSection } from "@/components/candidates-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { JobsSection } from "@/components/jobs"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"
import DynamicBackground from "@/components/dynamic-background";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">

      <DynamicBackground />

      <SocialSidebar />

      <Header />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <SpecializedRecruitment />
      </ScrollReveal>

      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>

      <ScrollReveal>
        <CompaniesSection />
      </ScrollReveal>

      {/* <ScrollReveal>
        <ProcessSection />
      </ScrollReveal> */}

      <ScrollReveal>
        <SmartRSection />
      </ScrollReveal>

      <ScrollReveal>
        <CandidatesSection />
      </ScrollReveal>

      {/* <ScrollReveal>
        <About />
      </ScrollReveal> */}

      {/* <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal> */}

      <ScrollReveal>
        <JobsSection />
      </ScrollReveal>

      {/* <ScrollReveal>
        <Testimonials />
      </ScrollReveal> */}

      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      <ScrollReveal>
        <MeetTheTeam />
      </ScrollReveal>

      <ScrollReveal>
        <CallToAction />
      </ScrollReveal>


      <Footer />

    </main>
  )
}
