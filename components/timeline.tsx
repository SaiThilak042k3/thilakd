"use client"

import { motion } from "framer-motion"

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
    title: "CO-Founder and member",
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
    image: "src/img/gallery/timeline/taskbench.png",
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
  return (
    <section id="timeline" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">My Journey</h2>
          <p className="section-subheading">Key milestones that have shaped my professional path</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-item"
            >
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="timeline-image" />
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-subtitle">{item.organization}</p>
              <p className="timeline-content">{item.description}</p>
              <div className="timeline-tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="timeline-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

