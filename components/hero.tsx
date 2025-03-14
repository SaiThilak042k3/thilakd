"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown, Calendar, ArrowDown } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const roles = ["AI Engineer", "NLP Specialist", "Web Developer", "Tech Innovator"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let i = 0
    const currentRole = roles[index]
    const typingInterval = setInterval(() => {
      if (i <= currentRole.length) {
        setText(currentRole.substring(0, i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [index])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Thilak
              <span className="text-primary">.</span>
            </motion.h1>

            <div className="h-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                <span className="inline-block">{text}</span>
                <span className="inline-block w-1 h-8 ml-1 bg-primary animate-blink"></span>
              </h2>
            </div>

            <motion.p
              className="text-xl text-muted-foreground max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building intelligent solutions with cutting-edge technology and creative problem-solving
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-full group">
                <a
                  href="https://drive.google.com/file/d/1Cwc5lEuHTYH8fgIm_D1DVSzpP6r4Ku8Q/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-accent/10 hover:bg-accent/20 border-accent/20 text-accent-foreground"
              >
                <a href="https://cal.com/thilak-d target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Call
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* 3D Sphere */}
            <div className="relative w-full h-[500px]">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"
                animate={{
                  scale: [1, 1.05, 1],
                  rotateZ: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-primary/20"
                animate={{
                  rotateZ: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-accent/20"
                animate={{
                  rotateZ: [360, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Floating elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-accent/80"
                  style={{
                    top: `${30 + Math.random() * 40}%`,
                    left: `${30 + Math.random() * 40}%`,
                  }}
                  animate={{
                    y: [0, -20, 0, 20, 0],
                    x: [0, 20, 0, -20, 0],
                    scale: [1, 1.2, 1, 0.8, 1],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              ))}

              {/* Code snippets */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`code-${i}`}
                  className="absolute text-xs md:text-sm text-primary/70 font-mono bg-background/80 backdrop-blur-sm p-2 rounded border border-primary/20"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    maxWidth: 150,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [20, 0, -20],
                  }}
                  transition={{
                    duration: 8,
                    delay: i * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  {["const ai = new AI();", "import { brain } from 'neural';", "function analyze(data) {...}"][i % 3]}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

