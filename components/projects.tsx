"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: "project1",
    title: "Hybrid RAG",
    category: "NLP",
    image: "src/img/gallery/projects/full workflow.png",
    tech: ["Neo4j", "TensorFlow", "Knowledge Graph"],
    description:
      "A retrieval-augmented generation system combining structured and unstructured data using Knowledge Graphs and Vector Databases.",
    details: {
      features: [
        "Ontology-driven knowledge representation",
        "Hybrid search using Cypher & embeddings",
        "Efficient LLM-based query generation",
      ],
      technologies: ["Neo4j", "LangChain", "Python", "LLMs"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  },
  {
    id: "project2",
    title: "Job Algorithm",
    category: "Automation",
    image: "src/img/gallery/projects/RPA.png",
    tech: ["RPA", "Selenium", "Vector Database"],
    description:
      "Automating LinkedIn job recommendations using Robotic Process Automation and NLP-based skill matching.",
    details: {
      features: [
        "Automated job search with Selenium",
        "Skill extraction using Sentence Transformers",
        "Semantic job matching with Weaviate",
        "Personalized report delivery via Gmail",
      ],
      technologies: ["Python", "RPA", "Vector Databases"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  },
  {
    id: "project3",
    title: "SAAVAAD",
    category: "Web Development",
    image: "src/img/gallery/projects/SAAVAAD1.png",
    tech: ["Node.js", "ML Models", "MongoDB", "React Native"],
    description: "A cross-platform mobile app for text summarization and language translation with ML models.",
    details: {
      features: [
        "Multi-language text summarization",
        "Translation support across 10+ languages",
        "Offline access with encrypted storage",
      ],
      technologies: ["React Native", "Flask", "MongoDB"],
      links: {
        demo: "#",
        github: "https://github.com/SAAVAAD",
      },
    },
  },
  {
    id: "project4",
    title: "Video Editing",
    category: "Media",
    image: "src/img/gallery/projects/editing.png",
    tech: ["Davinci", "Adobe"],
    description: "Freelance video editing for educational content and YouTube creators.",
    details: {
      features: [
        "Edited 20+ videos for educational and social content",
        "Created high-quality visuals using Davinci & Adobe",
        "Optimized videos for social media engagement",
      ],
      technologies: ["Davinci Resolve", "Adobe Premiere Pro"],
      links: {
        demo: "#",
      },
    },
  },
  {
    id: "project5",
    title: "Multi-language Support",
    category: "Web Development",
    image: "src/img/gallery/projects/web.png",
    tech: ["WordPress"],
    description: "Developed a multilingual website with dynamic content translation for global accessibility.",
    details: {
      features: ["Real-time language switching", "SEO-optimized structure", "Custom CMS integration"],
      technologies: ["WordPress", "JavaScript", "PHP"],
      links: {
        demo: "#",
      },
    },
  },
  {
    id: "project6",
    title: "Resume Building",
    category: "Media",
    image: "src/img/gallery/projects/resume.png",
    tech: ["Canva", "Photoshop"],
    description: "Freelance resume creation and personal branding consultancy for job seekers.",
    details: {
      features: [
        "Designed ATS-friendly, modern resumes",
        "Provided career branding guidance",
        "Clients successfully placed at top companies",
      ],
      technologies: ["Canva", "Photoshop"],
      links: {
        demo: "#",
      },
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 pt-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <Card className="overflow-hidden h-full border-border hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-primary/90 to-blue-500/90 text-white hover:from-primary hover:to-blue-500"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group-hover:bg-primary/10 transition-colors"
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
                          <DialogDescription className="text-muted-foreground">{project.category}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-6 py-4">
                          <div className="rounded-lg overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Overview</h3>
                            <p className="text-muted-foreground">{project.description}</p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                              {project.details.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.details.technologies.map((tech, i) => (
                                <Badge
                                  key={i}
                                  className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-4">
                            {project.details.links.demo && (
                              <Button
                                asChild
                                className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                              >
                                <a href={project.details.links.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            {project.details.links.github && (
                              <Button asChild variant="outline">
                                <a href={project.details.links.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="mr-2 h-4 w-4" />
                                  GitHub
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6 text-sm text-muted-foreground">
            <span>Scroll horizontally to see more projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}

