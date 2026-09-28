function Button({ children, variant = "primary", href, onClick, className = "" }) {

  const baseStyles = `
    inline-flex items-center gap-2 px-6 py-3 rounded-lg
    font-medium text-sm transition-all duration-300
    cursor-pointer select-none
  `

  const variants = {
    primary: `
      bg-primary text-dark
      hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]
    `,
    outline: `
      border border-primary/50 text-primary
      hover:border-primary hover:bg-primary/10
      hover:shadow-[0_0_20px_rgba(100,255,218,0.15)]
    `,
    ghost: `
      text-muted hover:text-white hover:bg-white/5
    `,
  }

  const allStyles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={allStyles}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={allStyles}>
      {children}
    </button>
  )
}

export default Button