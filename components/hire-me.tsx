"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function HireMe() {
  return (
    <section id="hire-me" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-500/90 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            Let's collaborate on your next project and create something amazing with cutting-edge AI and data science
            solutions.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full group glow-md">
            <a
              href="https://drive.google.com/file/d/1Cwc5lEuHTYH8fgIm_D1DVSzpP6r4Ku8Q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Hire Me
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

