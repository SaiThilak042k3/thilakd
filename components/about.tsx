"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-tr-full -z-10"></div>

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
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
              <img src="src/img/Passport_Photograph.jpg" alt="Thilak" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold">Thilak</h3>
                <p className="text-white/80 text-sm">AI Engineer & NLP Specialist</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary to-accent rounded-lg -z-10 max-w-xs mx-auto"></div>
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
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
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
      </div>
    </section>
  )
}

