import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export default function OpenSource() {
  const contributions = [
    {
      title: "OpenClaw",
      description:
        "A personal AI assistant you run on your own devices. Integrates with WhatsApp, Telegram, Slack, and Discord for seamless multi-platform AI interactions.",
      tags: ["TypeScript", "AI Assistant", "LLMs", "Multi-Platform"],
      link: "https://github.com/openclaw/openclaw",
    },
    {
      title: "Agency Agents",
      description:
        "A curated collection of AI agent personalities and system prompts designed for Claude, Cursor, and other AI-powered development tools.",
      tags: ["AI Agents", "Prompts", "Claude", "Developer Tools"],
      link: "https://github.com/msitarzewski/agency-agents",
    },
    {
      title: "elizaOS / eliza",
      description:
        "An all-in-one platform for building AI-powered applications. Multi-agent framework supporting TypeScript, Rust, and Python with extensible plugin architecture.",
      tags: ["TypeScript", "AI Platform", "Multi-Agent", "Open Source"],
      link: "https://github.com/elizaOS/eliza",
    },
  ]

  return (
    <div id="open-source">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Open Source Contributions</h3>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
            Projects I've contributed to in the open source community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {contributions.map((contribution, index) => (
            <div key={index}>
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-primary/30 border border-border group">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{contribution.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{contribution.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {contribution.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full transition-all duration-300 hover:border-primary/60">
                    <Link href={contribution.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
