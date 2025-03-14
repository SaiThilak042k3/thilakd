"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram, MapPin, Phone } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/thilak-d-129464205/",
    color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/SaiThilak042k3",
    color: "bg-gray-500/10 text-gray-500 hover:bg-gray-700 hover:text-white",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:saithilak04@gmail.com",
    color: "bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    url: "https://wa.me/6369502212",
    color: "bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/thilak_sai_",
    color: "bg-pink-500/10 text-pink-500 hover:bg-pink-500 hover:text-white",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <p className="section-subheading">Let's connect and discuss how we can work together</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Location */}
            <div className="flex items-center p-4 rounded-lg border border-border bg-card/50">
              <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Puttaparthi, Andhra Pradesh</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center p-4 rounded-lg border border-border bg-card/50">
              <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <a href="mailto:example@example.com" className="text-sm text-muted-foreground hover:text-primary">
                  saithilak04@gmail.com
                </a>
              </div>
            </div>

            {/* Phone/WhatsApp */}
            <div className="flex items-center p-4 rounded-lg border border-border bg-card/50">
              <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">
                  +91 63695 02212
                </a>
              </div>
            </div>
          </div>

          {/* Map - Using an iframe for simplicity */}
          <div className="mb-8 rounded-lg overflow-hidden border border-border h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5392105599757!2d77.81089999999999!3d14.165699999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14a7e8bffffff%3A0x6146d5b1a9f93c79!2sSri%20Sathya%20Sai%20Institute%20of%20Higher%20Learning!5e0!3m2!1sen!2sin!4v1710323456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className={`h-12 flex items-center justify-center gap-2 transition-all ${link.color} border-border hover:scale-105 duration-300`}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5 mr-2" />
                  <span>{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

