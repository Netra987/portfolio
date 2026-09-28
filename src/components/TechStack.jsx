import { motion } from 'framer-motion'
import { techCategories } from '../data/techStack'

function TechStack() {
  const getBadgeStyle = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-primary/10 text-primary border-primary/25"
      case "Intermediate":
        return "bg-surface2/60 text-white/80 border-white/10"
      case "Beginner":
      default:
        return "bg-white/5 text-muted/60 border-white/5"
    }
  }

  return (
    <section id="tech" className="py-32 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
          02. Technical Arsenal
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Frameworks & Toolchain
        </h2>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-px bg-primary" />
          <div className="w-2 h-px bg-primary/40" />
        </div>
        <p className="text-muted text-base max-w-2xl leading-relaxed">
          Specialized stack engineered for Generative AI, distributed transformer fine-tuning, and low-latency production model serving.
        </p>
      </div>

      {/* Grid of Category Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, catIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: catIdx * 0.08 }}
            className="p-6 rounded-xl border border-white/5 bg-surface/30 hover:border-primary/20 hover:shadow-[0_0_25px_rgba(100,255,218,0.03)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-white font-mono">
                  {category.category}
                </h3>
                <span className="text-[10px] font-mono text-muted/50">
                  0{catIdx + 1}
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-6">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-lg bg-surface2/30 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-medium text-white/95">
                        {skill.name}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono rounded-full border ${getBadgeStyle(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    {skill.note && (
                      <p className="text-[11px] font-mono text-muted/50 mt-1 truncate">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Category Tag */}
            <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted/40">
              <span>{category.skills.length} tools</span>
              <span className="text-primary/70">Verified Production</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
