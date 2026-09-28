export const radarSkills = {
  labels: [
    "GenAI & Multi-Agent",
    "Deep Learning & NLP",
    "MLOps & CI/CD",
    "Data Science & Analytics",
    "API & Model Serving",
    "Core CS & Systems",
  ],
  datasets: [
    {
      label: "Current Proficiency",
      data: [92, 88, 85, 86, 84, 88],
      backgroundColor: "rgba(100, 255, 218, 0.15)",
      borderColor: "#64ffda",
      borderWidth: 2,
      pointBackgroundColor: "#64ffda",
      pointBorderColor: "#0a0a0f",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: "#ffffff",
      pointHoverBorderColor: "#64ffda",
    },
    {
      label: "Graduate Baseline",
      data: [65, 60, 50, 70, 55, 70],
      backgroundColor: "rgba(148, 163, 184, 0.05)",
      borderColor: "rgba(148, 163, 184, 0.3)",
      borderWidth: 1,
      borderDash: [4, 4],
      pointBackgroundColor: "rgba(148, 163, 184, 0.5)",
      pointBorderColor: "#0a0a0f",
      pointBorderWidth: 1,
      pointRadius: 3,
      pointHoverRadius: 4,
    },
  ],
}

export const barSkills = {
  labels: [
    "Python",
    "PyTorch / HuggingFace",
    "MLflow & Docker",
    "Data Science (Pandas/NumPy)",
    "FastAPI & APIs",
    "SQL & Databases",
    "React & Frontend",
  ],
  datasets: [
    {
      label: "Proficiency Index (%)",
      data: [95, 88, 85, 89, 83, 80, 76],
      backgroundColor: "rgba(100, 255, 218, 0.2)",
      borderColor: "#64ffda",
      borderWidth: 1,
      borderRadius: 6,
      hoverBackgroundColor: "rgba(100, 255, 218, 0.4)",
    },
  ],
}

export const telemetryMetrics = [
  {
    label: "Target Role",
    value: "Generative AI / ML Engineer",
    detail: "Agentic Systems & MLOps",
  },
  {
    label: "Primary Inference Target",
    value: "< 50ms Latency",
    detail: "FastAPI + Docker Container",
  },
  {
    label: "Experiment Tracking",
    value: "100% Reproducibility",
    detail: "MLflow Model Registry",
  },
  {
    label: "Core Stacks",
    value: "Python • PyTorch • Docker",
    detail: "Production Machine Learning",
  },
]

export const domainCommitments = [
  {
    domain: "Autonomous Agents & LLMs",
    share: 45,
    tools: ["LangChain", "RAG", "Multi-Agent Architectures", "Prompt Engineering"],
  },
  {
    domain: "MLOps & Deep Learning",
    share: 35,
    tools: ["DistilBERT", "PyTorch", "MLflow", "Docker", "GitHub Actions"],
  },
  {
    domain: "Data Analysis & Backend",
    share: 20,
    tools: ["Pandas", "NumPy", "SQL", "FastAPI", "React"],
  },
]
