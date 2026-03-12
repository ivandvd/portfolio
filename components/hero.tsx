"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-40 flex flex-col items-center justify-center min-h-[95vh]">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl lg:text-7xl text-balance leading-tight">
              Hi, I&apos;m <span className="gradient-text">Ivan David</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-lg md:text-2xl text-muted-foreground font-medium">
              <span className="js-only">
                <span>AI Engineer & Machine Learning Specialist</span>
              </span>
              <noscript>
                <span>AI Engineer | Machine Learning Expert | Deep Learning Specialist | Data Science</span>
              </noscript>
            </p>
          </motion.div>
          <motion.div
            className="max-w-[650px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Building intelligent systems and deploying AI solutions that solve real-world challenges. Specialized in predictive modeling, deep learning, and large language models.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="group relative rounded-lg px-8 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-95">
              <Link href="mailto:ivanmigueldavid@gmail.com">
                <span className="relative z-10">Get In Touch</span>
              </Link>
            </Button>
          </motion.div>
          <motion.div
            className="flex gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="https://github.com/ivandvd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/ivan-david-701b743b6/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:ivanmigueldavid@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
