"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Gallery from "@/components/gallery"
import Timeline from "@/components/timeline"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import HireMe from "@/components/hire-me"
import { Loader } from "@/components/loader"
import Skills from "@/components/skills"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Create animated cursor
  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.className = "custom-cursor"
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", moveCursor)

    // Add hover effect for interactive elements
    const handleElementHover = () => {
      cursor.classList.add("cursor-hover")
    }

    const handleElementLeave = () => {
      cursor.classList.remove("cursor-hover")
    }

    const interactiveElements = document.querySelectorAll("a, button, .interactive")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover)
      el.addEventListener("mouseleave", handleElementLeave)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover)
        el.removeEventListener("mouseleave", handleElementLeave)
      })
      document.body.removeChild(cursor)
    }
  }, [])

  // Prevent image right-click
  useEffect(() => {
    const preventImageCopy = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault()
        alert("Images are protected and cannot be copied.")
      }
    }

    // Prevent right-click on images
    document.addEventListener("contextmenu", preventImageCopy)

    // Prevent drag and drop of images
    document.addEventListener("dragstart", (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault()
      }
    })

    return () => {
      document.removeEventListener("contextmenu", preventImageCopy)
      document.removeEventListener("dragstart", preventImageCopy)
    }
  }, [])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Create floating elements
  useEffect(() => {
    const createFloatingElements = () => {
      const container = document.createElement("div")
      container.className = "floating-elements"
      document.body.appendChild(container)

      // Create different shapes
      const shapes = [
        { type: "sphere", color: "bg-gradient-to-br from-primary/40 to-accent/40" },
        { type: "cube", color: "bg-gradient-to-tr from-secondary/30 to-accent/30" },
        { type: "pyramid", color: "bg-gradient-to-r from-primary/30 to-accent/30" },
      ]

      // Add shapes to the container
      for (let i = 0; i < 5; i++) {
        const shape = document.createElement("div")
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)]

        shape.className = `floating-shape ${randomShape.type} ${randomShape.color}`
        shape.style.left = `${Math.random() * 100}vw`
        shape.style.top = `${Math.random() * 100}vh`
        shape.style.animationDuration = `${Math.random() * 20 + 10}s`
        shape.style.animationDelay = `${Math.random() * 5}s`

        container.appendChild(shape)
      }
    }

    createFloatingElements()

    return () => {
      const elements = document.querySelector(".floating-elements")
      if (elements) document.body.removeChild(elements)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background font-poppins relative">
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Timeline />
        <Gallery />
        <Testimonials />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

