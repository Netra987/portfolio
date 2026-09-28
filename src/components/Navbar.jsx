const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Analytics", href: "#analytics" },
  { label: "Contact", href: "#contact" },
]

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between">

      <a href="#">
        <span className="font-mono text-primary text-lg font-medium">netra</span>
        <span className="font-mono text-white/30 text-lg">.dev</span>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
  <a key={link.label} href={link.href} className="relative text-sm text-muted hover:text-white transition-colors duration-200 group">
    {link.label}
    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
  </a>
))}
        
      </nav>

    </header>
  )
}

export default Navbar