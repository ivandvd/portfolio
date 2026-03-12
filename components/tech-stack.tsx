"use client"

import { Card, CardContent } from "@/components/ui/card"

// AI-focused stack matching actual projects
const techIcons: { name: string; src?: string; text?: string }[] = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "LangChain", text: "🦜" },
  { name: "OpenAI", text: "◎" },
  { name: "Claude", text: "⬡" },
  { name: "HuggingFace", text: "🤗" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
]

export default function TechStack() {
  return (
    <div className="w-full">
      <Card className="border border-border overflow-hidden">
        <CardContent className="p-4 md:p-6">
          <p className="text-sm font-semibold text-muted-foreground mb-4">Tech Stack</p>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[...techIcons, ...techIcons].map((icon, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  title={icon.name}
                >
                  {icon.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={icon.src} alt={icon.name} className="w-7 h-7" loading="lazy" />
                  ) : (
                    <span className="text-lg">{icon.text}</span>
                  )}
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{icon.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
