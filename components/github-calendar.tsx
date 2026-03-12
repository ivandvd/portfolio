"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Github } from "lucide-react"

export default function GitHubContributions() {
  return (
    <Card className="border border-border overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Github className="h-5 w-5 text-muted-foreground" />
            <Link
              href="https://github.com/ivandvd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              @ivandvd
            </Link>
          </div>
          <Link
            href="https://github.com/ivandvd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            View on GitHub
          </Link>
        </div>
        <div className="overflow-x-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/8b5cf6/ivandvd"
            alt="Ivan David's GitHub contribution graph"
            className="w-full min-w-[700px] h-auto invert-0 dark:brightness-90"
            style={{ filter: "hue-rotate(0deg)" }}
            loading="lazy"
          />
        </div>
      </CardContent>
    </Card>
  )
}
