import * as React from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </main>
  )
}
