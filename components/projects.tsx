import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import OpenSource from "./open-source"

export default function Projects() {
  const projects = [
    {
      title: "Clelp.ai",
      description:
        "The first review platform where AI agents rate AI tools. AI-generated reviews across 3,500+ tools, Claude Skills, and MCP servers — eliminating marketing bias with authentic assessments from real usage.",
      tags: ["Next.js", "AI Agents", "LLMs", "API"],
      codeLink: null,
      liveLink: "https://clelp.ai/",
    },
    {
      title: "Seneca Lab",
      description:
        "AI simulation platform combining Stoic philosophy with statistical rigor. Translates abstract potential into quantifiable landscapes using modern data simulation for your most critical decisions.",
      tags: ["AI Simulation", "Data Analytics", "Decision Science"],
      codeLink: null,
      liveLink: "https://www.seneca-lab.com/",
    },
    {
      title: "Rava AI",
      description:
        "Agentic AI-powered GTM platform for founders and growth-stage teams. Acts as your GTM co-founder — delivering a complete system that learns, adapts, and executes from idea validation to market traction.",
      tags: ["AI Agents", "GTM", "Startups", "Automation"],
      codeLink: null,
      liveLink: "https://ravaai.web.app/",
    },
    {
      title: "BeReach",
      description:
        "AI-powered LinkedIn lead generation platform. Tracks 10+ engagement signals to identify warm prospects, generates personalized outreach, and integrates with CRMs via REST API.",
      tags: ["Chrome Extension", "AI", "LinkedIn", "Lead Gen"],
      codeLink: null,
      liveLink: "https://berea.ch/",
    },
    {
      title: "Synthetically",
      description:
        "Market validation platform that turns early-stage ideas into decision-grade clarity. Define your audience, pressure-test the concept, and get actionable insights on what to fix, keep, and focus on.",
      tags: ["Market Validation", "AI", "Startups", "Analytics"],
      codeLink: null,
      liveLink: "https://synthetically.in/",
    },
    {
      title: "Digital Meld",
      description:
        "AI, automation, and cloud consulting firm helping businesses transform through data analytics, Microsoft Cloud solutions, computer vision, and enterprise security.",
      tags: ["AI Consulting", "Cloud", "Automation", "Enterprise"],
      codeLink: null,
      liveLink: "https://digitalmeld.io/",
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-base md:text-lg text-muted-foreground leading-relaxed">
              AI-powered products and platforms I&apos;ve built and contributed to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="project-card group">
                <Card className="overflow-hidden h-full flex flex-col border border-border hover:border-primary/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300">
                  <CardContent className="project-content flex-1 flex flex-col p-6">
                    <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-3 flex-1 leading-relaxed">{project.description}</p>
                    <div className="project-tags mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-5 flex gap-3">
                      {project.codeLink && (
                        <Button size="sm" variant="outline" asChild className="flex-1 transition-all duration-300 hover:border-primary/60">
                          <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </Link>
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild className="flex-1 transition-all duration-300 hover:border-primary/60">
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Visit
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Include Open Source section directly under Projects */}
          <div className="mt-20">
            <OpenSource />
          </div>
        </div>
      </div>
    </section>
  )
}
