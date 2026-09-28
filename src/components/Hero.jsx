import { useEffect, useState } from 'react'
import Button from './ui/Button'

const roles = [
  "Generative AI Engineer",
  "Machine Learning Engineer",
  "LLM & Multi-Agent Architect",
  "AI & Data Science Specialist",
]

function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = roles[currentRole]
    let timeout

    if (!isDeleting) {
      if (displayed.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length - 1))
        }, 40)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 300)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, currentRole])

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Netra987" },
    { label: "LinkedIn", href: "https://linkedin.com/in/netra-alle-14b73729a/" },
    { label: "Email", href: "mailto:allenetra@gmail.com" },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">

        <p className="font-mono text-primary text-sm tracking-widest mb-6">
          Hi, my name is
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 leading-none">
          Netra<span className="text-primary">.</span>
        </h1>

        <div className="flex items-center gap-2 mb-6 h-10 md:h-12">
          <h2 className="text-2xl md:text-3xl text-muted font-light">
            {displayed}
          </h2>
          <span className="w-0.5 h-7 bg-primary animate-pulse" />
        </div>

        <p className="text-muted text-lg max-w-xl leading-relaxed mb-10">
          I build intelligent systems, data-driven applications,
          and machine learning solutions that turn data into decisions.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="#projects">View Projects</Button>
          <Button variant="outline" href="#contact">Get in Touch</Button>
        </div>

        <div className="flex items-center gap-6 mt-12">
          <span className="text-muted/40 font-mono text-xs">FIND ME ON</span>
          <div className="h-px w-10 bg-white/10" />
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="font-mono text-xs text-muted hover:text-primary transition-colors duration-200">
              {link.label} ↗
            </a>
          ))}
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-muted/40 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>

    </section>
  )
}

export default Hero