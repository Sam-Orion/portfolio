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
        id: "airsense",
        title: "AirSense",
        description: "I built a way to control your Mac with just hand gestures. AirSense turns your webcam into a motion sensor—pinch to pause Spotify, slide to adjust volume, swipe to skip tracks. I added smart power-saving that cuts CPU usage by 80% when you're not moving, plus precision controls so accidental gestures won't mess things up. It's touch-free computing that actually works.",
        tech: ["Python", "Google MediaPipe", "OpenCV", "AppleScript", "PyObjC (AVFoundation)"],
        link: "https://github.com/Sam-Orion/AirSense",
        image: "/projects/airsense.svg",
        slug: "airsense"
    },
    {
        id: "wanda-python",
        title: "Wanda-Python",
        description: "I built a tool to shrink massive language models without breaking them. Wanda-Python implements a clever pruning technique that removes up to 50% of a model's weights by looking at both their size and how actively they're being used—not just their magnitude. I've packaged this as a simple command-line tool that works with LLaMA and OPT models, turning bloated billions-of-parameter models into lean machines that run faster without tanking performance.",
        tech: ["PyTorch", "Hugging Face Transformers", "CUDA", "LoRA", "SparseGPT"],
        link: "https://github.com/Sam-Orion/wanda-python",
        image: "/projects/wanda.svg",
        slug: "wanda-python"
    },
    {
        id: "ytmusic-spotify",
        title: "YTMusic-to-Spotify",
        description: "I solved the playlist migration headache between YouTube Music and Spotify. This Streamlit web app connects to both platforms via OAuth, lets you pick any YouTube Music playlist, and automatically matches and transfers every song to a fresh Spotify playlist. It handles the messy parts—fuzzy matching titles and artists, tracking what transferred and what didn't, and giving you a downloadable list of songs that couldn't be found so you can add them manually.",
        tech: ["Streamlit", "Spotipy", "Google API Client", "OAuth 2.0", "GCP"],
        link: "https://github.com/Sam-Orion/ytmusic-to-spotify",
        image: "/projects/ytmusic-spotify.svg",
        slug: "ytmusic-to-spotify"
    },
    {
        id: "portfolio",
        title: "Portfolio Website",
        description: "A premium developer portfolio built with Next.js and custom design system.",
        tech: ["Next.js", "TypeScript", "Framer Motion"],
        link: "https://github.com/Sam-Orion/Portfolio",
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
