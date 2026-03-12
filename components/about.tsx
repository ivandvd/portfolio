import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const features = [
    {
      emoji: "01",
      title: "AI & Machine Learning",
      description: "Building and deploying deep learning models, LLM fine-tuning, RAG architectures, and production ML pipelines at scale.",
    },
    {
      emoji: "02",
      title: "Blockchain Forensics",
      description: "On-chain investigation, wallet forensics, transaction tracing, and AI-powered anomaly detection for crypto security.",
    },
    {
      emoji: "03",
      title: "Software Engineering",
      description: "Full-stack development with Python, TypeScript, and modern frameworks. Building developer tools, APIs, and serverless infrastructure.",
    },
    {
      emoji: "04",
      title: "Operations & Strategy",
      description: "Leading cross-functional teams, managing product lifecycles, and translating technical capabilities into business outcomes.",
    },
  ]

  return (
    <div className="w-full">
      <section id="about" className="py-24 w-full">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="space-y-16">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
              <p className="mx-auto max-w-[750px] text-base md:text-lg text-muted-foreground leading-relaxed">
                AI Engineer building intelligent systems that solve real problems. From fine-tuning LLMs and deploying RAG pipelines to designing agentic AI platforms — I turn complex ideas into production-ready solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-primary/30 border border-border group">
                    <CardContent className="p-6 flex flex-col items-start space-y-4">
                      <span className="text-sm font-mono font-bold gradient-text">{feature.emoji}</span>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors">{feature.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
