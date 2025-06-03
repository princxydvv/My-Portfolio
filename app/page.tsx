"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Menu,
  X,
  MapPin,
  Code,
  Palette,
  Calendar,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Prince Yadav</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-purple-300 ${
                    activeSection === item.id ? "text-purple-300" : "text-white/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-white/80 hover:text-purple-300 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="/placeholder-user.jpg"
                alt="Prince Yadav"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Prince Yadav</h1>
            <h2 className="text-2xl md:text-3xl text-purple-300 mb-6">Computer Science Student | Web Developer</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Building intuitive digital solutions with structured code and creative design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">About Me</h2>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Passionate about technology and innovation, I am a detail-oriented computer science student with a
                    strong foundation in web development, API integration, and project management. My expertise lies in
                    crafting structured solutions, optimizing code for efficiency, and continuously expanding my
                    technical skill set.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Currently exploring frontend development and full-stack concepts, I thrive on solving complex
                    problems and creating intuitive digital experiences.
                  </p>
                  <div className="flex items-center text-purple-300">
                    <MapPin size={20} className="mr-2" />
                    <span className="text-lg">Gurugram, Haryana</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 shadow-2xl flex items-center justify-center border-2 border-white/20">
                    <Code size={120} className="text-white/90" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Code size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Python</h3>
                <p className="text-white/80">
                  Proficient in Python programming with experience in data structures, algorithms, and application
                  development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <Code size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">C/C++</h3>
                <p className="text-white/80">
                  Strong foundation in C/C++ programming with focus on system programming and performance optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Palette size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
                <p className="text-white/80">
                  Creating intuitive and visually appealing user interfaces with focus on user experience and modern
                  design principles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Projects</h2>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar size={32} className="text-purple-300 mr-3" />
                    <h3 className="text-3xl font-bold text-white">AI-Based Scheduling Calendar</h3>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    A calendar tool powered by AI to suggest optimal meeting times and daily schedules. This intelligent
                    system analyzes patterns and preferences to provide smart scheduling recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-purple-600 text-white">AI/ML</Badge>
                    <Badge className="bg-blue-600 text-white">Calendar API</Badge>
                    <Badge className="bg-green-600 text-white">Scheduling</Badge>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
                <div className="text-center">
                  <div className="w-full h-64 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <Calendar size={80} className="text-white/80" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Resume</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, education, and technical skills.
          </p>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl inline-block">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Download size={48} className="text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Prince Yadav - Resume</h3>
              <p className="text-white/80 mb-6">Computer Science Student & Web Developer</p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                <a
                  href="https://drive.google.com/file/d/1QSDjMbzFBILup9EpvwuHlqDQ9ARMSxDs/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail size={24} className="text-purple-300 mr-4" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a
                        href="mailto:princerao7244@gmail.com"
                        className="text-white/80 hover:text-purple-300 transition-colors"
                      >
                        princerao7244@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone size={24} className="text-purple-300 mr-4" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <a href="tel:+919253313558" className="text-white/80 hover:text-purple-300 transition-colors">
                        +91 9253313558
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Github size={24} className="text-purple-300 mr-4" />
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <a
                        href="https://github.com/princxydvv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-purple-300 transition-colors"
                      >
                        github.com/princxydvv
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Linkedin size={24} className="text-purple-300 mr-4" />
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/prince-yadav-2a4279322/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-purple-300 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-300 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">© 2024 Prince Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
