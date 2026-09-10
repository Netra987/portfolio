function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-gray-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold text-white mb-6">
          Netra<span className="text-cyan-400">.</span>
        </h1>

        <h2 className="text-3xl text-gray-300 mb-6">
          AI & Data Science Student
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl">
          I build intelligent systems, data-driven applications,
          and machine learning solutions.
        </p>
        <div className="flex gap-4 mt-8">
  <a
    href="#projects"
    className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
  >
    View My Projects
  </a>

  <a
    href="#contact"
    className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
  >
    Let's Connect
  </a>
</div>
      </div>
    </section>
  )
}

export default Hero