"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

const galleryItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=600",
    title: "Championship",
    description:
      "Won the House Championship (2024-25) at the Sri Sathya Sai Annual Sports & Cultural Meet as House Captain.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=600",
    title: "Monoacting Competition",
    description: "Manoacting Competition winner",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=600",
    title: "House Drama",
    description: "House ASHWA (Drama Competition)",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=600",
    title: "Investiture Function",
    description: "Investiture function",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=600",
    title: "Service Activity",
    description: "Service activity at nearby school as part of digital Enlightment Club",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=400&width=600",
    title: "Eco-Einstiens Club",
    description: "Eco-Einstiens Club Activities",
  },
]

export default function Gallery() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !isDragging) {
        scrollRef.current.scrollLeft += 1 // Slow scroll speed

        // Reset to beginning when reached end
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0
        }
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isDragging])

  // Mouse events for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section id="gallery" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Gallery</h2>
          <p className="section-subheading">Moments and memories from my journey</p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gallery-item"
            >
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="gallery-image" />
              <div className="gallery-overlay">
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

