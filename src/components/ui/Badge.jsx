function Badge({ children, variant = "default" }) {

  const variants = {
    default: "bg-surface2 text-muted border border-white/5",
    primary: "bg-primary/10 text-primary border border-primary/20",
    outline: "border border-white/10 text-white/70",
  }

  return (
    <span className={`
      inline-block px-3 py-1 rounded-full
      text-xs font-mono
      transition-colors duration-200
      ${variants[variant]}
    `}>
      {children}
    </span>
  )
}

export default Badge