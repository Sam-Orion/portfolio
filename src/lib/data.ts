export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    date: string;
    location: string;
    description: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        id: "1",
        role: "SDE Intern",
        company: "Tech Mahindra",
        date: "May 2025 – July 2025",
        location: "Pune, MH",
        description: [
            "Engineered a high-concurrency Python translation pipeline for 10+ Indic languages, handling 800+ requests/min with LRU caching.",
            "Implemented Wanda pruning on Llama-3.2-3B, reducing model weights by 50% while maintaining generation quality.",
            "Developed an autonomous AI agent for automotive control achieving 95% accuracy and reducing manual interaction by 40%.",
            "Built a multimodal RAG pipeline accelerating design cycles by 60% with 85% accuracy."
        ]
    }
];

export const SKILLS_DATA = [
    { category: "Languages", items: ["Java", "Python", "SQL (Postgres)", "JavaScript", "HTML/CSS"] },
    { category: "Frameworks", items: ["Node.js", "React", "Next.js", "Express", "Tailwind", "WebSockets", "Material-UI", "FastAPI"] },
    { category: "AI & ML", items: ["pandas", "NumPy", "Matplotlib", "HuggingFace Transformers", "LLMs", "Agentic AI", "AI Workflows"] },
    { category: "Tools & DevOps", items: ["Git", "Google Cloud Platform", "VS Code", "Google AntiGravity", "PyCharm", "IntelliJ", "Eclipse"] }
];

export const PROJECTS_DATA = [
    {
        id: "1",
        title: "AI Code Assistant",
        description: "An intelligent coding companion that suggests optimizations and generates documentation.",
        tech: ["Python", "Transformers", "VS Code API"],
        link: "https://github.com/shubham/ai-assistant",
        image: "https://placehold.co/600x400/1e293b/818cf8?text=AI+Assistant",
        slug: "ai-code-assistant"
    },
    {
        id: "2",
        title: "Smart Traffic Management",
        description: "Computer vision system for real-time traffic analysis and signal optimization.",
        tech: ["YOLOv8", "OpenCV", "FastAPI"],
        link: "https://github.com/shubham/smart-traffic",
        image: "https://placehold.co/600x400/1e293b/818cf8?text=Smart+Traffic",
        slug: "smart-traffic-management"
    },
    {
        id: "3",
        title: "Portfolio Website",
        description: "A premium developer portfolio built with Next.js and custom design system.",
        tech: ["Next.js", "TypeScript", "Framer Motion"],
        link: "https://github.com/shubham/portfolio",
        image: "https://placehold.co/600x400/1e293b/818cf8?text=Portfolio",
        slug: "portfolio-website"
    }
];

export const BLOG_DATA = [
    {
        id: "1",
        title: "Optimizing LLM Inference",
        excerpt: "Techniques for reducing latency and cost when deploying large language models.",
        date: "Oct 12, 2024",
        slug: "optimizing-llm-inference"
    },
    {
        id: "2",
        title: "The Future of AI Agents",
        excerpt: "Exploring how autonomous agents are changing software development.",
        date: "Sep 28, 2024",
        slug: "future-of-ai-agents"
    },
    {
        id: "3",
        title: "Next.js Performance Tips",
        excerpt: "Best practices for building high-performance web applications with Next.js App Router.",
        date: "Aug 15, 2024",
        slug: "nextjs-performance-tips"
    }
];
