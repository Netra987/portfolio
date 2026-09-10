function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between border-b border-white/10">

      <div className="text-xl font-bold text-white">
        My Portfolio
      </div>

      <div className="flex gap-8">
        <a
          href="#about"
          className="text-gray-400 hover:text-white transition-colors"
        >
          About
        </a>

        <a
          href="#skills"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>

    </nav>
  )
}

export default Navbar