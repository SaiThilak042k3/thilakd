document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light")
  })

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    body.classList.add("dark-mode")
  }

  // Mobile Navigation Toggle
  const menuToggle = document.getElementById("menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    document.querySelectorAll(".bar").forEach((bar) => {
      bar.classList.toggle("active")
    })
  })

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      document.querySelectorAll(".bar").forEach((bar) => {
        bar.classList.remove("active")
      })
    })
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Horizontal Scrolling for Skills
  const skillsScroll = document.querySelector(".skills-scroll")
  const skillsScrollLeftArrow = document.querySelector(".skills-section .scroll-arrow:first-child")
  const skillsScrollRightArrow = document.querySelector(".skills-section .scroll-arrow:last-child")

  if (skillsScroll && skillsScrollLeftArrow && skillsScrollRightArrow) {
    skillsScrollLeftArrow.addEventListener("click", () => {
      skillsScroll.scrollBy({ left: -300, behavior: "smooth" })
    })

    skillsScrollRightArrow.addEventListener("click", () => {
      skillsScroll.scrollBy({ left: 300, behavior: "smooth" })
    })
  }

  // Horizontal Scrolling for Projects
  const projectsScroll = document.querySelector(".projects-scroll")
  const projectsScrollLeftArrow = document.querySelector(".projects .scroll-arrow:first-child")
  const projectsScrollRightArrow = document.querySelector(".projects .scroll-arrow:last-child")

  if (projectsScroll && projectsScrollLeftArrow && projectsScrollRightArrow) {
    projectsScrollLeftArrow.addEventListener("click", () => {
      projectsScroll.scrollBy({ left: -300, behavior: "smooth" })
    })

    projectsScrollRightArrow.addEventListener("click", () => {
      projectsScroll.scrollBy({ left: 300, behavior: "smooth" })
    })
  }

  // Horizontal Scrolling for Gallery
  const galleryScroll = document.querySelector(".gallery-scroll")
  const galleryScrollLeftArrow = document.querySelector(".gallery .scroll-arrow:first-child")
  const galleryScrollRightArrow = document.querySelector(".gallery .scroll-arrow:last-child")

  if (galleryScroll && galleryScrollLeftArrow && galleryScrollRightArrow) {
    galleryScrollLeftArrow.addEventListener("click", () => {
      galleryScroll.scrollBy({ left: -300, behavior: "smooth" })
    })

    galleryScrollRightArrow.addEventListener("click", () => {
      galleryScroll.scrollBy({ left: 300, behavior: "smooth" })
    })
  }

  // Project Modal
  const projectModal = document.getElementById("project-modal")
  const projectCards = document.querySelectorAll(".project-card")
  const projectCloseBtn = projectModal.querySelector(".close-modal")
  const projectModalBody = projectModal.querySelector(".modal-body")
  const projectData = document.getElementById("project-data")

  projectCards.forEach((card) => {
    const viewBtn = card.querySelector(".btn-view")
    viewBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      const projectId = card.getAttribute("data-project")
      const projectContent = document.getElementById(projectId).innerHTML

      projectModalBody.innerHTML = projectContent
      projectModal.style.display = "block"
      document.body.style.overflow = "hidden"
    })
  })

  projectCloseBtn.addEventListener("click", () => {
    projectModal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  // Gallery Modal
  const galleryModal = document.getElementById("gallery-modal")
  const galleryItems = document.querySelectorAll(".gallery-item")
  const galleryCloseBtn = galleryModal.querySelector(".close-modal")
  const modalImage = document.getElementById("modal-image")
  const modalDescription = document.getElementById("modal-description")

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").getAttribute("src")
      const description = this.getAttribute("data-description")

      modalImage.setAttribute("src", imgSrc)
      modalDescription.textContent = description
      galleryModal.style.display = "block"
      document.body.style.overflow = "hidden"
    })
  })

  galleryCloseBtn.addEventListener("click", () => {
    galleryModal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  // Close modals when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      projectModal.style.display = "none"
      document.body.style.overflow = "auto"
    }

    if (e.target === galleryModal) {
      galleryModal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })

  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".testimonial-btn.prev")
  const nextBtn = document.querySelector(".testimonial-btn.next")
  let currentSlide = 0

  function showSlide(n) {
    testimonialSlides.forEach((slide) => {
      slide.classList.remove("active")
    })

    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    testimonialSlides[n].classList.add("active")
    dots[n].classList.add("active")
  }

  function nextSlide() {
    currentSlide++
    if (currentSlide >= testimonialSlides.length) {
      currentSlide = 0
    }
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide--
    if (currentSlide < 0) {
      currentSlide = testimonialSlides.length - 1
    }
    showSlide(currentSlide)
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", prevSlide)
    nextBtn.addEventListener("click", nextSlide)
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Auto-scroll testimonials
  setInterval(nextSlide, 5000)

  // Initialize first slide
  showSlide(currentSlide)

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
      }
    })
  }, observerOptions)

  document
    .querySelectorAll(".skill-card, .project-card, .gallery-item, .timeline-item, .testimonial-content")
    .forEach((element) => {
      observer.observe(element)
    })
})

