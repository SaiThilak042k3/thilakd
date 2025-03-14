"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    content:
      "Thilak's conduct, professionalism, and performance during his internship at SAIMA Labs were truly exceptional. His excellence in execution, strong values, and technical expertise earned him the title of Best Intern 2024.",
    author: "Dr. Karthik Ramesh",
    position: "Chief Transformation & Innovation Officer UBM Abu Dhabi",
    avatar: "src/img/gallery/author/DR.KR.jpeg",
  },
  {
    id: 2,
    content:
      "During the entire span of training, he was an excellent team player, exhibited good inter personal skills and his performance exceeded expectations. He was able to deliver good quality work within the allocated time.",
    author: "Suresh",
    position: "State President, Sri Sathya Sai Seva Organisation",
    avatar: "src/img/gallery/author/suresh.png",
  },
  {
    id: 3,
    content:
      "Thilak's video editing and YouTube management brought a whole new level of fun and engagement to our kids' content!",
    author: "Preethi",
    position: "State Youtube coordinator, Sri Sathya Sai Balvikas",
    avatar: "src/img/gallery/author/preethi.png",
  },
  // {
  //   id: 4,
  //   content:
  //     "Thilak was a huge help in shaping my resume! His advice on highlighting key skills and structuring it properly made a big difference. Thanks to him, I landed my role at Hexaware with confidence!",
  //   author: "Sai",
  //   position: "Service Desk Analyst, Hexaware, Chennai",
  //   avatar: "/placeholder.svg?height=100&width=100",
  // },
  // {
  //   id: 5,
  //   content:
  //     "I can't thank Thilak enough for his guidance on my resume. He made sure it was polished and job-ready, which played a huge role in me securing my job at State Street",
  //   author: "Priya Dharshiny",
  //   position: "Senior Data Analyst, StateStreet, Coimbatore",
  //   avatar: "/placeholder.svg?height=100&width=100",
  // },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <section id="testimonials" className="py-16 bg-background relative">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">What people say about working with me</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="border border-border shadow-sm hover-card">
            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-base italic text-muted-foreground mb-4">"{testimonials[current].content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                      <AvatarFallback>{testimonials[current].author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-sm">{testimonials[current].author}</h4>
                      <p className="text-xs text-muted-foreground">{testimonials[current].position}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    current === index ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

