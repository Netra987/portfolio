import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js'
import { Radar, Bar } from 'react-chartjs-2'
import {
  radarSkills,
  barSkills,
  telemetryMetrics,
  domainCommitments,
} from '../data/skillsData'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

function DataViz() {
  const [activeTab, setActiveTab] = useState("radar")

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 32,
        right: 32,
        top: 16,
        bottom: 16,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: "#94a3b8",
          font: { family: "'JetBrains Mono', monospace", size: 11 },
          boxWidth: 10,
          usePointStyle: true,
          padding: 16,
        },
      },
      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#ffffff",
        bodyColor: "#64ffda",
        borderColor: "rgba(100, 255, 218, 0.2)",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        titleFont: { family: "'DM Sans', sans-serif", weight: "600" },
        bodyFont: { family: "'JetBrains Mono', monospace" },
        callbacks: {
          label: (context) => ` ${context.dataset.label}: ${context.raw}%`,
        },
      },
    },
    scales: {
      r: {
        min: 20,
        max: 100,
        ticks: {
          display: false,
          stepSize: 20,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.06)",
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.08)",
        },
        pointLabels: {
          color: "#94a3b8",
          font: { family: "'JetBrains Mono', monospace", size: 11 },
          padding: 12,
        },
      },
    },
  }

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#ffffff",
        bodyColor: "#64ffda",
        borderColor: "rgba(100, 255, 218, 0.2)",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        titleFont: { family: "'DM Sans', sans-serif", weight: "600" },
        bodyFont: { family: "'JetBrains Mono', monospace" },
        callbacks: {
          label: (context) => ` Proficiency: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: "#64748b",
          font: { family: "'JetBrains Mono', monospace", size: 11 },
          stepSize: 25,
          callback: (value) => `${value}%`,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#e2e8f0",
          font: { family: "'JetBrains Mono', monospace", size: 11 },
        },
      },
    },
  }

  return (
    <section id="analytics" className="py-32 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
          04. Quantitative Analytics
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Competency Matrix & Telemetry
        </h2>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-px bg-primary" />
          <div className="w-2 h-px bg-primary/40" />
        </div>
        <p className="text-muted text-base max-w-2xl leading-relaxed">
          Analytical evaluation of engineering capabilities, model pipeline metrics, and system-level commitments across machine learning domains.
        </p>
      </div>

      {/* Top Telemetry Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {telemetryMetrics.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-4 rounded-xl border border-white/5 bg-surface/30 hover:border-primary/20 transition-all duration-200"
          >
            <p className="text-[10px] font-mono text-muted/60 uppercase tracking-widest mb-1">
              {item.label}
            </p>
            <p className="text-sm md:text-base font-semibold text-white font-mono">
              {item.value}
            </p>
            <p className="text-[11px] font-mono text-primary/70 mt-1">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Main Analytics Layout: Chart + Breakdown */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Chart Container (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col justify-between p-6 md:p-8 rounded-xl border border-white/5 bg-surface/30 hover:border-primary/20 transition-all duration-300"
        >
          {/* Chart Header & Tab Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest">
                Data Representation
              </p>
              <h3 className="text-lg font-medium text-white mt-0.5">
                {activeTab === "radar" ? "Radar Evaluation" : "Framework Benchmark"}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface2/40 border border-white/5">
              <button
                onClick={() => setActiveTab("radar")}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                  activeTab === "radar"
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "text-muted hover:text-white"
                }`}
              >
                Radar View
              </button>
              <button
                onClick={() => setActiveTab("bar")}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                  activeTab === "bar"
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "text-muted hover:text-white"
                }`}
              >
                Stack Bar View
              </button>
            </div>
          </div>

          {/* Chart Canvas Area */}
          <div className="relative w-full h-[360px] md:h-[400px] flex items-center justify-center">
            {activeTab === "radar" ? (
              <Radar data={radarSkills} options={radarOptions} />
            ) : (
              <Bar data={barSkills} options={barOptions} />
            )}
          </div>

          {/* Chart Footer Indicator */}
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-muted/60">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Calculated via project depth & deployment volume
            </span>
            <span className="hidden sm:inline">Normalized Scale (0-100)</span>
          </div>
        </motion.div>

        {/* Right Column: Engineering Breakdown & Domain Share (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          {/* Domain Allocation */}
          <div className="p-6 md:p-7 rounded-xl border border-white/5 bg-surface/30 hover:border-primary/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-sm font-mono text-white uppercase tracking-wider">
                Engineering Commitment
              </h4>
              <span className="text-xs font-mono text-primary/70">100% Focus</span>
            </div>

            <div className="space-y-5">
              {domainCommitments.map((domain) => (
                <div key={domain.domain} className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white/90">{domain.domain}</span>
                    <span className="text-primary font-semibold">{domain.share}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-surface2/60 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${domain.share}%` }}
                    />
                  </div>

                  {/* Micro Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {domain.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted/70 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Philosophy Note */}
          <div className="p-5 rounded-xl border border-primary/10 bg-primary/5">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Methodology Note
            </p>
            <p className="text-xs text-muted leading-relaxed">
              Prioritizing reproducible MLOps pipelines and deterministic agent orchestration over brittle notebook prototypes. Every model is built for containerized, sub-second production inference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DataViz
