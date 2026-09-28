import { useState, useEffect } from 'react'

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Viz", href: "#analytics" },
  { label: "Contact", href: "#contact" },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-dark/85 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-1 group">
          <span className="font-mono text-primary text-lg font-medium tracking-tight">netra</span>
          <span className="font-mono text-white/30 text-lg group-hover:text-white/60 transition-colors">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-xs font-mono text-muted hover:text-white transition-colors duration-200 group tracking-wider uppercase"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-mono text-white/80 border border-white/10 rounded-md hover:border-primary/40 hover:text-primary transition-colors"
          >
            Resume ↗
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 text-xs font-mono text-primary border border-primary/30 rounded-md hover:bg-primary/10 transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 mt-3 bg-surface/95 backdrop-blur-xl border border-white/5 rounded-xl shadow-2xl flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm font-mono text-muted hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/5 flex gap-2">
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center py-2 text-xs font-mono text-white/80 border border-white/10 rounded-lg hover:border-primary/40 transition-colors"
            >
              Resume ↗
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center py-2 text-xs font-mono text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar