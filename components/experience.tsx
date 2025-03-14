"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "TaskBench, SAIMA Labs",
    period: "May 2024 - June 2024",
    type: "work",
    description: [
      "Conducted market research and built predictive and classification models, improving efficiency using Python.",
      "Analyzed datasets with over 50,000 live records, generating actionable insights to enhance client marketing strategies.",
      "Contributed to two+ digital marketing projects, boosting market presence and earning recognition for professionalism.",
      "Prepared two due diligence reports and three+ proposal documents, aiding strategic decision-making and client acquisition.",
      "Managed multiple projects, ensuring 100% on-time delivery and high client satisfaction.",
    ],
    skills: ["ML", "Analytics", "Python", "Data Visualization"],
  },
  {
    title: "Digital Solutions Specialist",
    company: "Freelance",
    period: "June 2023 - Present",
    type: "work",
    description: [
      "Edited 20+ videos for Sri Sathya Sai Balvikas and other non-profit organizations, enhancing their digital presence.",
      "Created professional resumes, helping clients secure jobs at State Street and Hexaware.",
      "Designed and developed websites, improving online visibility and user experience for individuals and organizations.",
      "Managed video production for YouTube channels, crafting engaging content to boost audience engagement.",
    ],
    skills: ["Web Development", "Video Editing", "Resume Design"],
  },
  {
    title: "Web Development",
    company: "Sri Sathya Sai Seva Organizations, TN",
    period: "May 2021 - Mar. 2022",
    type: "work",
    description: [
      "Designed and developed websites, improving online visibility and user experience for individuals and organizations.",
      "Managed video production for YouTube channels, crafting engaging content to boost audience engagement.",
    ],
    skills: ["Web", "Leadership"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Circuit connection from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-primary/30 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      </div>

      {/* Circuit board background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern-4" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 H100 M50 0 V100 M25 25 H75 M25 75 H75" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <circle cx="25" cy="25" r="2" fill="currentColor" />
            <circle cx="75" cy="25" r="2" fill="currentColor" />
            <circle cx="25" cy="75" r="2" fill="currentColor" />
            <circle cx="75" cy="75" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-4)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 pt-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <Card className="h-full hover:shadow-md transition-all hover:-translate-y-1 border-border relative overflow-hidden">
                  {/* Circuit node decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 0 H80 M0 20 H60 M20 0 V80"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeWidth="1"
                      />
                      <circle cx="20" cy="20" r="3" fill="currentColor" fillOpacity="0.1" />
                    </svg>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                        Work
                      </Badge>
                    </div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="flex flex-col">
                      <span>{exp.company}</span>
                      <span className="text-xs">{exp.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6 text-sm text-muted-foreground">
            <span>Scroll horizontally to see more experiences</span>
          </div>
        </div>
      </div>

      {/* Circuit connection to next section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-transparent to-primary/30"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      </div>
    </section>
  )
}

