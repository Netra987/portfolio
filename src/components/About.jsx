import { personal } from '../data/personal'

function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 max-w-6xl mx-auto">

      {/* Section label */}
      <div className="mb-16">
        <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
          01. About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Who I Am
        </h2>
        <div className="flex items-center gap-3">
          <div className="w-12 h-px bg-primary" />
          <div className="w-2 h-px bg-primary/40" />
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left — Bio text */}
        <div className="space-y-5">
          {personal.bio.map((paragraph, i) => (
            <p key={i} className="text-muted leading-relaxed text-base">
              {paragraph}
            </p>
          ))}

          {/* Education card */}
          <div className="mt-8 p-5 border border-white/5 rounded-xl bg-surface/50">
            <p className="font-mono text-primary text-xs tracking-widest mb-3 uppercase">
              Education
            </p>
            <p className="text-white font-medium">{personal.education.degree}</p>
            <p className="text-muted text-sm mt-1">{personal.education.university}</p>
            <p className="text-muted/60 text-xs font-mono mt-1">{personal.education.year}</p>
          </div>
        </div>

        {/* Right — Interests + Stats */}
        <div className="space-y-8">

          {/* Interests */}
          <div>
            <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">
              Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {personal.interests.map((interest) => (
                <span key={interest} className="px-3 py-1.5 text-xs font-mono border border-primary/20 text-primary/80 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">
              By the Numbers
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "10+", label: "Projects Built" },
                { number: "5+", label: "Technologies" },
                { number: "2+", label: "Years Coding" },
                { number: "3", label: "Domains Explored" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 border border-white/5 rounded-xl bg-surface/30 hover:border-primary/20 transition-colors">
                  <p className="text-2xl font-bold text-primary font-mono">{stat.number}</p>
                  <p className="text-muted text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Currently learning */}
          <div className="p-5 border border-primary/10 rounded-xl bg-primary/5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="font-mono text-primary text-xs tracking-widest uppercase">
                Currently Learning
              </p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Deep Learning architectures, MLOps pipelines, and building full-stack AI applications with FastAPI + React.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About