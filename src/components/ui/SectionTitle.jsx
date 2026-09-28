function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="mb-16">

      {/* Small label above — like "01. ABOUT ME" */}
      {label && (
        <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">
          {label}
        </p>
      )}

      {/* Main heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
        {title}
      </h2>

      {/* Decorative line */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-px bg-primary" />
        <div className="w-2 h-px bg-primary/40" />
      </div>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="text-muted text-base mt-4 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}

    </div>
  )
}

export default SectionTitle