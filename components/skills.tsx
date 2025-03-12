"use client"

import { motion } from "framer-motion"
import { Brain, MessageSquareText, Network, Cog, Video, Code, Database, LineChart, Cpu } from "lucide-react"

const skills = [
  { name: "Artificial Intelligence", icon: Brain },
  { name: "NLP", icon: MessageSquareText },
  { name: "Knowledge Graphs", icon: Network },
  { name: "Automation", icon: Cog },
  { name: "Video Editing", icon: Video },
  { name: "Web Development", icon: Code },
  { name: "Data Engineering", icon: Database },
  { name: "Data Analysis", icon: LineChart },
  { name: "Machine Learning", icon: Cpu },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center justify-center p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

