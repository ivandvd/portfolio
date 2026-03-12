"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowUpRight, Lock, Globe, MessageSquare, Bot } from "lucide-react"
import { motion } from "framer-motion"

export default function CurrentlyBuilding() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-border overflow-hidden relative group hover:border-primary/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600" />
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Currently Building</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Deploying OpenClaw AI Agents across the Gulf Region
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Setting up OpenClaw&apos;s multi-channel AI assistant infrastructure for enterprise clients in UAE and Saudi Arabia — enabling Arabic-first agentic workflows across WhatsApp, Telegram, and internal tools.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="flex-shrink-0 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  View Project <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">OpenClaw — Gulf Region Deployment</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Enterprise AI agent infrastructure
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5 pt-2">
            <div className="flex items-start gap-3">
              <Lock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Proprietary Deployment</p>
                <p className="text-xs text-muted-foreground">This is a private enterprise engagement. Source code and client details are under NDA.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">UAE & Saudi Arabia</p>
                <p className="text-xs text-muted-foreground">Deploying across multiple enterprise clients in the Arab Gulf region with Arabic-first language support.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Multi-Channel Agents</p>
                <p className="text-xs text-muted-foreground">WhatsApp, Telegram, Slack, and custom internal tools — unified AI assistant across all platforms.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bot className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Agentic Workflows</p>
                <p className="text-xs text-muted-foreground">Custom skill pipelines for document processing, customer support automation, and internal operations.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Interested in learning more? <a href="mailto:ivanmigueldavid@gmail.com" className="text-primary hover:underline">Get in touch</a>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
