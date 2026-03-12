"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Ivan built our AI pipeline from scratch and had it in production within weeks. His ability to move fast without cutting corners is rare.",
    name: "Daniel Reyes",
    title: "CTO, Metorial",
    company: "Metorial",
  },
  {
    quote: "One of the sharpest engineers I've worked with. Ivan doesn't just write code — he understands the business problem and architects the right solution.",
    name: "Sarah Chen",
    title: "VP of Engineering, Nexara AI",
    company: "Nexara AI",
  },
  {
    quote: "Ivan led our blockchain forensics initiative and delivered tools that directly contributed to recovering millions in misappropriated assets.",
    name: "Marcus Webb",
    title: "Managing Partner, Chilton Yambert & Porter",
    company: "CYP Law",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What People Say</h2>
            <p className="mx-auto max-w-[700px] text-base md:text-lg text-muted-foreground leading-relaxed">
              From colleagues and collaborators I&apos;ve worked with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border border-border hover:border-primary/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300">
                  <CardContent className="p-6 flex flex-col justify-between h-full gap-6">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
