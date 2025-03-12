"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Brain, MessageSquareText, Network, Cog, Video, Code, Database, LineChart, Cpu } from "lucide-react"

const skills = [
  { name: "Artificial Intelligence", icon: Brain, color: "from-red-500 to-pink-500", value: 90 },
  { name: "Natural Language Processing", icon: MessageSquareText, color: "from-blue-500 to-cyan-400", value: 85 },
  { name: "Knowledge Graphs", icon: Network, color: "from-violet-500 to-purple-500", value: 80 },
  { name: "Automation", icon: Cog, color: "from-amber-500 to-yellow-400", value: 75 },
  { name: "Video Editing", icon: Video, color: "from-green-500 to-emerald-400", value: 85 },
  { name: "Web Development", icon: Code, color: "from-blue-600 to-indigo-500", value: 80 },
  { name: "Data Engineering", icon: Database, color: "from-orange-500 to-amber-400", value: 70 },
  { name: "Data Analysis", icon: LineChart, color: "from-teal-500 to-green-400", value: 85 },
  { name: "Machine Learning", icon: Cpu, color: "from-pink-500 to-rose-400", value: 80 },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-blue-500/5 rounded-tr-full -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl max-w-xs mx-auto">
              <img src="thilakd\src\img\Passport_Photograph.jpg" alt="Thilak" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold">Thilak</h3>
                <p className="text-white/80 text-sm">AI Engineer & NLP Specialist</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary to-blue-500 rounded-lg -z-10 max-w-xs mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 lg:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text">AI Engineer & NLP Specialist</h3>
            <p className="text-muted-foreground">
              I'm a passionate tech professional specializing in AI, NLP, and web development. With a focus on creating
              innovative solutions, I combine technical expertise with creative problem-solving to deliver exceptional
              results.
            </p>
            <p className="text-muted-foreground">
              Currently pursuing MSc in Data Science and Computing at Sri Sathya Sai Institute of Higher Learning, I'm
              dedicated to leveraging cutting-edge technology to solve real-world problems through knowledge graphs,
              machine learning, and natural language processing.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 transition-all duration-300"
            >
              <a
                href="https://drive.google.com/file/d/1Cwc5lEuHTYH8fgIm_D1DVSzpP6r4Ku8Q/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold gradient-text">Technical Skills</h3>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A diverse set of skills focused on AI, data science, and creative technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} flex-shrink-0 flex items-center justify-center glow-sm`}
              >
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.value}%</span>
                </div>
                <Progress
                  value={skill.value}
                  className="h-2"
                  indicatorClassName="bg-gradient-to-r from-primary to-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

