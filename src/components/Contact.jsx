import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactInfo } from '../data/personal'

function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const channels = [
    {
      label: "GitHub",
      identifier: "github.com/Netra987",
      href: contactInfo.github,
      description: "Explore open-source MLOps pipelines, sales analytics pipelines, and data systems.",
      cta: "View Repositories",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      identifier: "in/netra-alle-14b73729a",
      href: contactInfo.linkedin,
      description: "Connect professionally, verify background, and discuss full-time engineering roles.",
      cta: "Connect on LinkedIn",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.88 0-1.59-.72-1.59-1.6 0-.88.71-1.6 1.59-1.6.88 0 1.6.72 1.6 1.6 0 .88-.72 1.6-1.6 1.6m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      ),
    },
    {
      label: "Email Dispatch",
      identifier: contactInfo.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`,
      description: "Fast response for technical interviews, engineering discussions, and role offers.",
      cta: "Compose in Gmail",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-32 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
          05. Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Initiate Contact
        </h2>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-px bg-primary" />
          <div className="w-2 h-px bg-primary/40" />
        </div>
        <p className="text-muted text-base max-w-2xl leading-relaxed">
          Currently open to full-time Generative AI Engineer, Machine Learning Engineer, and Data Systems positions. Reach out directly for role discussions.
        </p>
      </div>

      {/* Main Feature Box: Copyable Direct Email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 md:p-10 rounded-xl border border-white/5 bg-surface/30 hover:border-primary/20 transition-all duration-300 mb-12 relative overflow-hidden group"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary uppercase tracking-widest">
                Active Mailbox
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-mono font-medium text-white tracking-tight">
              {contactInfo.email}
            </h3>
            <p className="text-xs font-mono text-muted/60">
              Based in {contactInfo.location} • Typical response within 24 hours
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer border select-none ${
                copied
                  ? "bg-primary text-dark font-semibold border-primary shadow-[0_0_15px_rgba(100,255,218,0.3)]"
                  : "bg-surface2/50 text-white border-white/10 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {copied ? "✓ Copied to Clipboard" : "Copy Address"}
            </button>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg text-xs font-mono font-medium bg-primary text-dark hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(100,255,218,0.25)] flex items-center gap-1.5"
            >
              <span>Compose in Gmail</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Direct Channel Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {channels.map((channel, i) => (
          <motion.a
            key={channel.label}
            href={channel.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-xl border border-white/5 bg-surface/30 hover:border-primary/20 hover:shadow-[0_0_25px_rgba(100,255,218,0.03)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-muted group-hover:text-primary transition-colors mb-4">
                <div className="p-2 rounded-lg bg-surface2/40 border border-white/5 group-hover:border-primary/20">
                  {channel.icon}
                </div>
                <span className="text-primary font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>
              <p className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-1">
                {channel.label}
              </p>
              <p className="text-base font-medium text-white mb-2 truncate">
                {channel.identifier}
              </p>
              <p className="text-xs text-muted leading-relaxed">
                {channel.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-muted/70 group-hover:text-primary transition-colors">
              <span>{channel.cta}</span>
              <span>→</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Terminal Footer Strip */}
      <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted/50">
        <div className="flex items-center gap-2">
          <span className="text-primary">$</span>
          <span>echo &quot;Built with React 19, Tailwind CSS v4 & Chart.js&quot;</span>
        </div>
        <p>Netra © {new Date().getFullYear()} • All systems operational</p>
      </div>
    </section>
  )
}

export default Contact
