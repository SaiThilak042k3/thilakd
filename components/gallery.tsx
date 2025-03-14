"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

const galleryItems = [
  {
    id: 1,
    image: "src/img/gallery/ashwa.png",
    title: "Championship",
    description:
      "Won the House Championship (2024-25) at the Sri Sathya Sai Annual Sports & Cultural Meet as House Captain.",
  },
  {
    id: 2,
    image: "src/img/gallery/monoacting.png",
    title: "Monoacting Competition",
    description: "Manoacting Competition winner",
  },
  {
    id: 3,
    image: "src/img/gallery/ACE_HouseDrama.JPG",
    title: "House Drama",
    description: "House ASHWA (Drama Competition)",
  },
  {
    id: 4,
    image: "src/img/gallery/investiture.JPG",
    title: "Investiture Function",
    description: "Along with other house caption",
  },
  {
    id: 5,
    image: "src/img/gallery/ST.jpg",
    title: "Service Activity",
    description: "Service activity at nearby school as part of digital Enlightment Club",
  },
  {
    id: 6,
    image: "src/img/gallery/eco.png",
    title: "Eco-Einstiens Club",
    description: "Eco-Einstiens Club Activities",
  },
  {
    id: 7,
    image: "src/img/gallery/summercourse.JPG",
    title: "Summer Course Presentation",
    description: "Academic year 2025, Prasanthi Nilayam",
  },
  {
    id: 8,
    image: "src/img/gallery/Maintenence.png",
    title: "AVC, Maintenence Department",
    description: "During the freshers Day Program",
  },
  {
    id: 9,
    image: "src/img/gallery/Volleyball.png",
    title: "Games",
    description: "Volley Ball Match",
  },
  {
    id: 10,
    image: "src/img/gallery/Studio.png",
    title: "Studio",
    description: "Production Work",
  },
  {
    id: 11,
    image: "src/img/gallery/Freshers day.png",
    title: "Public speaking",
    description: "Freshers Day Talk",
  },
]

export default function Gallery() {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !isPaused && !isDragging) {
        scrollRef.current.scrollLeft += 1 // Slow scroll speed

        // Reset to beginning when reached end
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0
        }
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isPaused, isDragging])

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
          className="text-center mb-8"
        >
          <h2 className="section-heading gradient-text">Gallery</h2>
          <p className="section-subheading mb-4">Moments and memories from my journey</p>
          <p className="text-sm text-muted-foreground mb-8">Hover over images to see details or scroll manually</p>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/* Duplicate the items for infinite loop effect */}
          {[...galleryItems, ...galleryItems].map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

