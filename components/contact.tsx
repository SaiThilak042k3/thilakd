"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Instagram, MapPin, Phone } from "lucide-react"
import { useEffect, useRef } from "react"

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
    url: "#",
    color: "bg-gray-500/10 text-gray-500 hover:bg-gray-700 hover:text-white",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:example@example.com",
    color: "bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    url: "https://wa.me/1234567890",
    color: "bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/",
    color: "bg-pink-500/10 text-pink-500 hover:bg-pink-500 hover:text-white",
  },
]

export default function Contact() {
  const mapRef = useRef(null)

  useEffect(() => {
    // Initialize Google Maps
    const initMap = () => {
      if (!mapRef.current) return

      // Location coordinates for Sri Sathya Sai Institute of Higher Learning
      const location = { lat: 13.9716, lng: 77.789 }

      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#bdbdbd" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
          },
        ],
      })

      // Add marker
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Sri Sathya Sai Institute of Higher Learning",
      })
    }

    // Load Google Maps API
    if (!window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
      script.async = true
      script.defer = true
      window.initMap = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }

    return () => {
      window.initMap = null
    }
  }, [])

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <p className="section-subheading">Let's connect and discuss how we can work together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="contact-title">Location</h3>
                <p className="contact-text">
                  Sri Sathya Sai Institute of Higher Learning
                  <br />
                  Prasanthi Nilayam, Puttaparthi
                  <br />
                  Andhra Pradesh, India
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="contact-title">Email</h3>
                <p className="contact-text">
                  <a href="mailto:example@example.com" className="hover:text-primary transition-colors">
                    example@example.com
                  </a>
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="contact-title">Phone</h3>
                <p className="contact-text">
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div ref={mapRef} className="map-container" />
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    className={`h-auto py-6 flex flex-col items-center gap-3 transition-all ${link.color} border-border hover:scale-105 duration-300`}
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-6 w-6 mb-2" />
                      <span>{link.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

