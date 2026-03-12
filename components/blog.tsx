"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const posts = [
  {
    title: "Building a Bun Runtime Skill for OpenClaw",
    description: "How I created a reusable OpenClaw skill leveraging Bun's native runtime capabilities for filesystem, process, and network operations.",
    tags: ["Bun", "OpenClaw", "Skills", "TypeScript"],
    href: "/blog/building-bun-runtime-skill",
  },
  {
    title: "What I Learned While Building an SSU Management System",
    description: "Lessons from developing a real-world Social Security Unit management system — from business logic modeling to database-level integrity.",
    tags: ["System Design", "Backend", "Security"],
    href: "/blog/ssu-management-system",
  },
  {
    title: "How OpenClaw Works: Understanding AI Agents Through a Real Architecture",
    description: "A deep dive into OpenClaw's architecture — the agentic loop, tool use, context injection, and persistent memory.",
    tags: ["AI Agents", "OpenClaw", "Architecture"],
    href: "/blog/how-openclaw-works",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Blog</h2>
            <p className="mx-auto max-w-[700px] text-base md:text-lg text-muted-foreground leading-relaxed">
              Writing about AI agents, system design, and building things that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link key={index} href={post.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-primary/30 border border-border">
                  <CardContent className="p-6 flex flex-col justify-between h-full gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors pr-2">
                          {post.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 flex-shrink-0 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:border-primary/60">
              <Link href="/blog">
                View All Posts
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
