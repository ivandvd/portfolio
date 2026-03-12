import Hero from "@/components/hero"
import Metrics from "@/components/metrics"
import TechStack from "@/components/tech-stack"
import About from "@/components/about"
import CurrentlyBuilding from "@/components/currently-building"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Education from "@/components/education"
import GitHubContributions from "@/components/github-calendar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ivan David | AI Engineer",
  description:
    "Portfolio of Ivan David, an AI Engineer specializing in machine learning, deep learning, data science, predictive modeling, LLMs, and building intelligent systems that drive business value.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Metrics />
      <About />
      <div className="container px-4 md:px-6 mx-auto max-w-6xl pb-8">
        <TechStack />
      </div>
      <CurrentlyBuilding />
      <Experience />
      <Projects />
      <Testimonials />
      <Education />
      <div className="container px-4 md:px-6 mx-auto max-w-6xl pb-24">
        <GitHubContributions />
      </div>
    </div>
  )
}
