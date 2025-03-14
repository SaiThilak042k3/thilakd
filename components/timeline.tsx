"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const timelineItems = [
  {
    date: "Feb. 2024 - Present",
    title: "President",
    organization: "Digital Enlightment Club, SSSIHL",
    tags: ["Microsoft", "Leadership"],
    image: "src/img/gallery/timeline/DEC.png",
    description:
      "Leading the Digital Enlightment Club to promote technology awareness and digital literacy among students.",
  },
  {
    date: "Feb. 2024 - Present",
    title: "Member",
    organization: "Eco-Einstiens Club, SSSIHL",
    tags: ["Green Campus", "Leadership"],
    image: "src/img/gallery/eco.png",
    description:
      "Co-founded the Eco-Einstiens Club to promote environmental awareness and sustainability initiatives on campus.",
  },
  {
    date: "June 2023 - Present",
    title: "MSc Data Science and Computing",
    organization: "Sri Sathya Sai Institute of Higher Learning",
    tags: ["AI", "ML"],
    image: "src/img/gallery/timeline/SSSIHL.jpg",
    description: "Pursuing Master's degree with focus on AI, Machine Learning, and Data Science applications.",
  },
  {
    date: "May 2024 - June 2024",
    title: "Data Analyst Intern",
    organization: "TaskBench, SAIMA Labs",
    tags: ["ML", "Analytics"],
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Conducted market research and built predictive models, improving efficiency using Python and data analysis techniques.",
  },
  {
    date: "May 2021 - Mar. 2022",
    title: "Web Development",
    organization: "Sri Sathya Sai Seva Organizations, TN",
    tags: ["Web", "Leadership"],
    image: "src/img/gallery/timeline/balvikas.png",
    description:
      "Designed and developed websites, improving online visibility and user experience for the organization.",
  },
  {
    date: "June 2020 - Apr. 2023",
    title: "BSc Computer Science",
    organization: "Sri Sathya Sai Institute of Higher Learning",
    tags: ["Python", "Data"],
    image: "src/img/gallery/timeline/SSSIHL.jpg",
    description:
      "Completed Bachelor's degree with focus on programming, data structures, and computer science fundamentals.",
  },
]

export default function Timeline() {
  const scrollContainerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  })

  return (
    <section id="timeline" className="py-20 bg-background relative">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones that have shaped my professional path
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline progress container */}
          <div className="absolute left-[100px] top-0 bottom-0 w-1 bg-muted/30 rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary rounded-full"
              style={{
                height: scrollYProgress,
                originY: 0,
              }}
            />
          </div>

          {/* Timeline content */}
          <div ref={scrollContainerRef} className="relative h-[600px] overflow-y-auto pr-4 hide-scrollbar">
            <div className="pt-2 pb-16">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex mb-12 last:mb-0"
                >
                  {/* Date */}
                  <div className="w-[100px] flex-shrink-0 pt-1 pr-8 text-right">
                    <span className="text-sm font-medium text-primary">{item.date}</span>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-[100px] mt-2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10">
                    <div className="absolute inset-0.5 rounded-full bg-primary animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 ml-8">
                    <div className="bg-card rounded-lg p-4 border border-border hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="flex gap-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                        />

                        <div>
                          <h3 className="font-semibold text-base">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{item.organization}</p>
                          <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, i) => (
                              <Badge key={i} variant="outline" className="text-xs bg-primary/5 text-primary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

