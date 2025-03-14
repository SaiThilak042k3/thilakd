"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Code,
  Database,
  Cpu,
  BarChart,
  GitBranch,
  Terminal,
  Layers,
  Server,
  FileCode,
  Sparkles,
  ChevronRight,
} from "lucide-react"

// Skill categories with logos
const skillCategories = {
  dataScience: [
    { name: "Deep Learning", icon: Brain, level: 85 },
    { name: "Natural Language Processing", icon: Sparkles, level: 90 },
    { name: "Ontology Extraction", icon: Layers, level: 80 },
    { name: "Data Analytics", icon: BarChart, level: 85 },
  ],
  technicalSkills: [
    { name: "Python", icon: FileCode, level: 90 },
    { name: "R", icon: FileCode, level: 75 },
    { name: "C/C++", icon: Code, level: 80 },
    { name: "SQL (MySQL)", icon: Database, level: 85 },
    { name: "JavaScript", icon: FileCode, level: 80 },
    { name: "MERN Stack", icon: Layers, level: 75 },
    { name: "PySpark", icon: Sparkles, level: 70 },
    { name: "Flask", icon: Server, level: 80 },
    { name: "Android SDK", icon: Terminal, level: 65 },
  ],
  developerTools: [
    { name: "Git", icon: GitBranch, level: 85 },
    { name: "VS Code", icon: Code, level: 90 },
    { name: "Visual Studio", icon: Code, level: 80 },
    { name: "Power BI", icon: BarChart, level: 75 },
  ],
  librariesTech: [
    { name: "Neo4j", icon: Database, level: 80 },
    { name: "Vector Databases", icon: Database, level: 75 },
    { name: "Machine Learning", icon: Cpu, level: 85 },
    { name: "Data Processing", icon: Layers, level: 90 },
  ],
}

// Combine all skills for the scrolling ticker
const allSkills = [
  ...skillCategories.dataScience,
  ...skillCategories.technicalSkills,
  ...skillCategories.developerTools,
  ...skillCategories.librariesTech,
]

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollRef = useRef(null)

  // Auto-scroll effect for the skills ticker
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="skills" className="py-16 bg-muted/10">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold gradient-text"
          >
            Skills
          </motion.h2>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full group">
                View All Skills
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl gradient-text mb-2">Technical Skills</DialogTitle>
                <DialogDescription>
                  A comprehensive overview of my technical expertise and proficiency levels
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="dataScience" className="mt-6">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="dataScience">Data Science</TabsTrigger>
                  <TabsTrigger value="technicalSkills">Technical Skills</TabsTrigger>
                  <TabsTrigger value="developerTools">Developer Tools</TabsTrigger>
                  <TabsTrigger value="librariesTech">Libraries & Tech</TabsTrigger>
                </TabsList>

                <TabsContent value="dataScience" className="space-y-4">
                  {skillCategories.dataScience.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="technicalSkills" className="space-y-4">
                  {skillCategories.technicalSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="developerTools" className="space-y-4">
                  {skillCategories.developerTools.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="librariesTech" className="space-y-4">
                  {skillCategories.librariesTech.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>

        {/* Continuously scrolling skills ticker */}
        <div className="relative overflow-hidden py-4 bg-card border border-border rounded-lg shadow-sm">
          <div ref={scrollRef} className="flex whitespace-nowrap overflow-x-hidden">
            {/* Duplicate skills for seamless looping */}
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 mx-2 bg-background rounded-full border border-border"
              >
                <skill.icon className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

