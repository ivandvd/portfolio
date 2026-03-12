"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "6+", label: "AI Products Shipped" },
  { value: "3,500+", label: "AI Tools Indexed" },
  { value: "10+", label: "Open Source Contributions" },
  { value: "5+", label: "Years in Tech" },
]

export default function Metrics() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
