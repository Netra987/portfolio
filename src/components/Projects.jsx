import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [expandedPipeline, setExpandedPipeline] = useState({})
  const [activeDemo, setActiveDemo] = useState({})

  // Fake News Simulator State
  const [fakeNewsInput, setFakeNewsInput] = useState(
    "Quantum computing researchers at MIT demonstrate stable 100-qubit coherence at room temperature."
  )
  const [fakeNewsResult, setFakeNewsResult] = useState(null)
  const [fakeNewsLoading, setFakeNewsLoading] = useState(false)

  // Sales Analytics Simulator State
  const [salesOrderAmount, setSalesOrderAmount] = useState(17499)
  const [salesResult, setSalesResult] = useState(null)

  const categories = ["All", "MLOps & Systems", "Data Engineering & Analytics"]

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  const togglePipeline = (id) => {
    setExpandedPipeline((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const toggleDemo = (id) => {
    setActiveDemo((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const runFakeNewsInference = () => {
    setFakeNewsLoading(true)
    setFakeNewsResult(null)

    setTimeout(() => {
      const lower = fakeNewsInput.toLowerCase()
      const isConspiracy =
        lower.includes("secret") ||
        lower.includes("covert") ||
        lower.includes("leak") ||
        lower.includes("conspiracy") ||
        lower.includes("miracle")

      setFakeNewsResult({
        prediction: isConspiracy ? "MISINFORMATION FLAGGED" : "LEGITIMATE REPORT",
        confidence: isConspiracy ? 98.7 : 97.4,
        latency: Math.floor(Math.random() * 14) + 29, // 29ms - 43ms
        tokens: fakeNewsInput.trim().split(/\s+/).length + 4,
        runId: `run-${Math.random().toString(36).substring(2, 8)}`,
      })
      setFakeNewsLoading(false)
    }, 400)
  }

  const calculateAnomaly = () => {
    const mean = 459.48
    const std = 2075.0
    const zScore = (salesOrderAmount - mean) / std
    const isAnomaly = zScore > 3.0

    setSalesResult({
      zScore: zScore.toFixed(2),
      isAnomaly,
      severity: zScore > 6 ? "High (Critical Outlier)" : zScore > 3 ? "Moderate Anomaly" : "Normal Transaction",
      repeatCustomer: true,
      shippingEstimate: salesOrderAmount > 5000 ? "Same Day Express (2.0 Days)" : "Standard Class (4.2 Days)",
    })
  }

  return (
    <section id="projects" className="py-32 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
          03. Featured Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Systems & Architecture
        </h2>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-px bg-primary" />
          <div className="w-2 h-px bg-primary/40" />
        </div>
        <p className="text-muted text-base max-w-2xl leading-relaxed">
          Production MLOps pipelines and enterprise data architectures deployed with continuous integration, drift detection, and live dashboards.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((category) => {
          const isActive = activeFilter === category
          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs font-mono rounded-lg transition-all duration-200 cursor-pointer border ${
                isActive
                  ? "bg-primary/10 text-primary border-primary/40 shadow-[0_0_15px_rgba(100,255,218,0.1)]"
                  : "bg-surface/30 text-muted border-white/5 hover:text-white hover:border-white/10"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => {
            const isPipelineOpen = Boolean(expandedPipeline[project.id])
            const isDemoOpen = Boolean(activeDemo[project.id])

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 md:p-8 rounded-xl border border-white/5 bg-surface/30 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(100,255,218,0.03)] transition-all duration-300"
              >
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary/80 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-white/20 font-mono text-xs">•</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Actions / Links */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Primary Live Demo Link */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary/40 bg-primary/10 text-xs font-mono text-primary hover:bg-primary/20 transition-all duration-200"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <span>Live App</span>
                        <span>↗</span>
                      </a>
                    )}

                    {/* Interactive Sandbox Toggle */}
                    <button
                      onClick={() => toggleDemo(project.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-white/10 bg-surface2/40 text-xs font-mono text-muted hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-pointer"
                    >
                      <span>{isDemoOpen ? "Hide Simulator" : "Interactive Simulator"}</span>
                      <span>{isDemoOpen ? "▲" : "▼"}</span>
                    </button>

                    {/* GitHub Repo */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 bg-surface2/50 text-xs font-mono text-muted hover:text-primary hover:border-primary/30 transition-all duration-200"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>Source</span>
                        <span className="text-primary">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed mt-2 mb-6">
                  {project.tagline}
                </p>

                {/* Architecture Specs Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-lg bg-surface2/30 border border-white/5 mb-6">
                  {project.architecture.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-muted/60">
                        {item.label}
                      </p>
                      <p className="text-xs font-mono text-white font-medium truncate">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Interactive Simulator Drawer */}
                {isDemoOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-5 mb-6 rounded-xl bg-dark/95 border border-primary/25 shadow-xl font-mono text-xs overflow-hidden"
                  >
                    {project.id === "fake-news-mlops" ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/5">
                          <span className="text-primary font-semibold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Live DistilBERT REST Inference Simulator
                          </span>
                          <span className="text-[10px] text-muted/50">FastAPI Container • Sub-50ms</span>
                        </div>

                        {/* Presets */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-muted/60 text-[10px]">Test Presets:</span>
                          <button
                            onClick={() =>
                              setFakeNewsInput(
                                "CERN physicists observe stable anomalous decay in high-luminosity hadron collision."
                              )
                            }
                            className="px-2.5 py-1 rounded bg-surface2/60 text-white/80 hover:text-white border border-white/5 hover:border-primary/30 transition-all text-[11px] cursor-pointer"
                          >
                            Legitimate Science News
                          </button>
                          <button
                            onClick={() =>
                              setFakeNewsInput(
                                "Secret leaked government memo confirms covert weather manipulation satellite network."
                              )
                            }
                            className="px-2.5 py-1 rounded bg-surface2/60 text-white/80 hover:text-white border border-white/5 hover:border-primary/30 transition-all text-[11px] cursor-pointer"
                          >
                            Conspiracy / Misinformation
                          </button>
                        </div>

                        {/* Input & Action */}
                        <div className="space-y-2">
                          <textarea
                            value={fakeNewsInput}
                            onChange={(e) => setFakeNewsInput(e.target.value)}
                            rows={2}
                            className="w-full p-3 rounded-lg bg-surface/50 border border-white/10 text-white font-mono text-xs focus:border-primary/50 focus:outline-none resize-none"
                            placeholder="Type news text to classify..."
                          />
                          <button
                            onClick={runFakeNewsInference}
                            disabled={fakeNewsLoading}
                            className="px-4 py-2 rounded-lg bg-primary text-dark font-semibold text-xs hover:bg-primary/90 transition-all disabled:opacity-50 cursor-pointer"
                          >
                            {fakeNewsLoading ? "Running Inference..." : "POST /predict"}
                          </button>
                        </div>

                        {/* Result Output */}
                        {fakeNewsResult && (
                          <div className="p-3.5 rounded-lg bg-surface2/40 border border-white/10 space-y-2 mt-3">
                            <div className="flex items-center justify-between">
                              <span className="text-muted/70 text-[11px]">Classification Output:</span>
                              <span
                                className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                                  fakeNewsResult.prediction === "LEGITIMATE REPORT"
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                    : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                                }`}
                              >
                                {fakeNewsResult.prediction} ({fakeNewsResult.confidence}%)
                              </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-[10px] text-muted/60">
                              <span>Latency: <strong className="text-primary">{fakeNewsResult.latency}ms</strong></span>
                              <span>Tokens: <strong className="text-white">{fakeNewsResult.tokens}</strong></span>
                              <span>MLflow: <strong className="text-muted">{fakeNewsResult.runId}</strong></span>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/5">
                          <span className="text-primary font-semibold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Statistical Anomaly & Z-Score Engine (9.8k Dataset)
                          </span>
                          <span className="text-[10px] text-muted/50">PyTest Verified (20/20 Tests Passing)</span>
                        </div>

                        <div className="space-y-3">
                          <p className="text-[11px] text-muted/70">
                            Simulate order revenue outlier calculation against the 4,922 order baseline (μ=$459.48, σ=$2,075):
                          </p>

                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-muted/60 text-[10px]">Test Presets:</span>
                            <button
                              onClick={() => setSalesOrderAmount(17499)}
                              className="px-2.5 py-1 rounded bg-surface2/60 text-white/80 hover:text-white border border-white/5 hover:border-primary/30 text-[11px] cursor-pointer"
                            >
                              Enterprise Copier ($17,499)
                            </button>
                            <button
                              onClick={() => setSalesOrderAmount(280)}
                              className="px-2.5 py-1 rounded bg-surface2/60 text-white/80 hover:text-white border border-white/5 hover:border-primary/30 text-[11px] cursor-pointer"
                            >
                              Typical Order ($280)
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex-1">
                              <label className="text-[10px] text-muted/60 block mb-1">Order Amount ($USD)</label>
                              <input
                                type="number"
                                value={salesOrderAmount}
                                onChange={(e) => setSalesOrderAmount(Number(e.target.value))}
                                className="w-full p-2.5 rounded-lg bg-surface/50 border border-white/10 text-white font-mono text-xs focus:border-primary/50 focus:outline-none"
                              />
                            </div>
                            <div className="pt-5">
                              <button
                                onClick={calculateAnomaly}
                                className="px-4 py-2.5 rounded-lg bg-primary text-dark font-semibold text-xs hover:bg-primary/90 transition-all cursor-pointer"
                              >
                                Compute Z-Score
                              </button>
                            </div>
                          </div>
                        </div>

                        {salesResult && (
                          <div className="p-3.5 rounded-lg bg-surface2/40 border border-white/10 space-y-2.5 mt-3">
                            <div className="flex items-center justify-between">
                              <span className="text-muted/70 text-[11px]">Audit Assessment:</span>
                              <span
                                className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                                  salesResult.isAnomaly
                                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                    : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                }`}
                              >
                                {salesResult.severity}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-white/5 text-[10px] text-muted/60">
                              <div>Z-Score: <strong className="text-primary">{salesResult.zScore}σ</strong></div>
                              <div>Anomaly Flag: <strong className="text-white">{salesResult.isAnomaly ? "1 (Flagged)" : "0 (Normal)"}</strong></div>
                              <div>Repeat Customer: <strong className="text-white">Yes (98.4% Cohort)</strong></div>
                              <div>Shipping Priority: <strong className="text-muted">{salesResult.shippingEstimate}</strong></div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Key Technical Highlights */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-mono text-primary/80 uppercase tracking-widest mb-3">
                    Key Architectural Highlights
                  </p>
                  {project.highlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                      <span className="text-primary font-mono select-none mt-0.5">▸</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Pipeline Flow Toggle & Viewer */}
                {project.pipelineFlow && (
                  <div className="mb-6 border-t border-white/5 pt-4">
                    <button
                      onClick={() => togglePipeline(project.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-primary transition-colors cursor-pointer select-none"
                    >
                      <span>{isPipelineOpen ? "▼ Hide Execution Pipeline" : "▶ Inspect Execution Pipeline"}</span>
                      <span className="text-[10px] text-muted/50">({project.pipelineFlow.length} stages)</span>
                    </button>

                    {isPipelineOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 p-4 rounded-lg bg-dark/80 border border-white/5 font-mono overflow-x-auto"
                      >
                        <div className="flex items-center gap-2 min-w-max text-xs">
                          {project.pipelineFlow.map((stage, idx) => (
                            <div key={stage} className="flex items-center gap-2">
                              <span className="px-2.5 py-1 rounded bg-surface2/60 text-white/90 border border-white/5">
                                {stage}
                              </span>
                              {idx < project.pipelineFlow.length - 1 && (
                                <span className="text-primary font-bold">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono text-muted/80 bg-white/5 border border-white/5 rounded-md hover:border-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
