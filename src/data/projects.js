export const projects = [
  {
    id: "fake-news-mlops",
    title: "Fake News Detection MLOps Pipeline",
    tagline: "End-to-end production ML pipeline for transformer fine-tuning, automated experiment tracking, and containerized deployment.",
    category: "MLOps & Systems",
    status: "Deployed / CI-CD Active",
    featured: true,
    github: "https://github.com/Netra987/fakenews-mlops",
    demo: null,
    architecture: [
      { label: "Core Model", value: "DistilBERT (HuggingFace)" },
      { label: "Registry", value: "MLflow Tracking & Models" },
      { label: "Serving", value: "FastAPI + Docker" },
      { label: "CI/CD", value: "GitHub Actions" },
    ],
    highlights: [
      "Fine-tuned DistilBERT transformer for binary misinformation detection, optimizing sequence classification for sub-50ms inference latency.",
      "Engineered automated experiment tracking, hyperparameter logging, and model artifact versioning using the MLflow Model Registry.",
      "Packaged the inference service into an optimized Docker container with FastAPI endpoints, validation schemas, and automated health checks.",
      "Configured robust CI/CD workflows via GitHub Actions for automated code quality checks, unit tests, and continuous delivery.",
    ],
    pipelineFlow: [
      "Dataset Preprocessing",
      "DistilBERT Fine-Tuning",
      "MLflow Metric Logging",
      "Model Artifact Registry",
      "Dockerized FastAPI API",
      "GitHub Actions CI/CD"
    ],
    tags: [
      "Python",
      "HuggingFace",
      "DistilBERT",
      "MLflow",
      "Docker",
      "FastAPI",
      "GitHub Actions",
      "CI/CD"
    ],
  },
  {
    id: "oasis-agentic-orchestration",
    title: "OASIS: Agentic LLM Orchestration Layer",
    tagline: "Resource-aware, self-optimizing multi-agent LLM orchestration layer with dynamic token budgeting and adaptive RAG.",
    category: "GenAI & Multi-Agent",
    status: "Active Research / Capstone",
    featured: true,
    github: "https://github.com/Netra987",
    demo: null,
    architecture: [
      { label: "Topology", value: "Hierarchical Multi-Agent" },
      { label: "Memory", value: "Adaptive RAG + Embeddings" },
      { label: "Scheduling", value: "Cost & Token Aware" },
      { label: "Runtime", value: "Async Python Event Loop" },
    ],
    highlights: [
      "Architected a modular multi-agent orchestration framework enabling dynamic delegation between specialized planner, worker, and critic agents.",
      "Engineered a resource-conscious scheduling algorithm that manages token consumption, adjusts generation budgets, and routes queries by complexity.",
      "Integrated adaptive Retrieval-Augmented Generation (RAG) with semantic retrieval to provide localized knowledge grounding without context saturation.",
      "Implemented automated self-reflection loops where evaluator agents validate intermediate outputs to mitigate hallucinations and execution loops.",
    ],
    pipelineFlow: [
      "Query Ingestion",
      "Task Decomposition",
      "Token Budget Allocation",
      "Adaptive Context RAG",
      "Agent Execution",
      "Self-Reflection & Output"
    ],
    tags: [
      "Python",
      "LLMs",
      "Multi-Agent Systems",
      "Adaptive RAG",
      "Vector Embeddings",
      "AsyncIO",
      "Prompt Optimization"
    ],
  },
]