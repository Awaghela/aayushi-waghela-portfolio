export const resumeData = {
  basics: {
    name: "Aayushi Waghela",
    title: "MSCS @ University of Colorado Boulder | Prev SDE Intern @ Amazon Web Services",
    summary: "I am a full-stack software engineer passionate about building scalable, high-performance systems that connect complex backend logic with seamless user experiences. With a strong foundation in C++, Python, cloud-native development, and AI/ML, I enjoy designing robust microservices, low-latency APIs, intelligent applications, and responsive interfaces that solve real-world problems. My experience spans backend engineering, distributed systems, frontend development, and machine learning, allowing me to build end-to-end products that are both technically efficient and user-focused.\n\nCurrently, I am pursuing my MS in Computer Science at the University of Colorado Boulder, where I focus on distributed systems, cloud infrastructure, and intelligent systems.",
    location: "Boulder, Colorado",
    email: "aayushiwaghela3@gmail.com",
    phone: "303-356-2381",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/aayushiwaghela" },
      { name: "GitHub", url: "https://github.com/Awaghela" }
    ]
  },
  experience: [
    {
      company: "University of Colorado Boulder",
      role: "Course Manager",
      dates: "Aug 2024 - Present",
      location: "Boulder, Colorado, United States",
      bullets: [
        "Assisted with teaching Database Systems by explaining course concepts, guiding students through assignments, and reinforcing classroom learning.",
        "Designed and prepared assignments and practice material to help students strengthen their understanding of database fundamentals.",
        "Used Canvas to grade coursework and provide timely, constructive feedback."
      ]
    },
    {
      company: "Amazon Web Services (AWS)",
      role: "Software Development Engineer Intern",
      dates: "May 2025 - August 2025 (4 months)",
      location: "Seattle, WA",
      bullets: [
        "Enabled real-time multi-format audio decoding for transcription pipelines by designing and implementing a standalone Media Decoder microservice in C++.",
        "Supported FLAC, Opus, G.711 A-law/μ-law, and G.729 codecs by integrating FFmpeg-based decoding and converting input streams into raw PCM for downstream ASR processing.",
        "Built high-performance gRPC APIs to handle low-latency audio requests and improve reliability of cross-service communication.",
        "Improved deployment consistency across environments by containerizing the service with Docker and resolving static linking, dependency, and codec compatibility challenges.",
        "Designed the system for scalability and maintainability through modular decoder components, making it easier to extend codec support and integrate with production workflows."
      ]
    },
    {
      company: "BinaryDots",
      role: "UI/UX, Frontend Developer Intern",
      dates: "July 2022 - August 2022 (2 months)",
      location: "Mumbai",
      bullets: [
        "Developed responsive interfaces using React, JavaScript, HTML, and CSS, translating Figma designs into reusable, production-ready UI components.",
        "Improved usability, responsiveness, and visual consistency across web interface through layout enhancements and iterative UI refinement.",
        "Collaborated with design teams to refine requirements, incorporate feedback, and deliver polished, user-centered frontend experiences."
      ]
    }
  ],
  projects: [
  {
    title: "MarketPulse",
    stack: ["C++", "Node.js", "WebSockets", "REST API", "PostgreSQL", "React", "TypeScript"],
    bullets: [
      "Built a real-time market data dashboard powered by a C++ market feed simulator, Node.js APIs, and a React + TypeScript frontend.",
      "Streamed live ticks through WebSocket and REST interfaces while storing historical data in PostgreSQL.",
      "Showcases full-stack engineering, real-time systems, and backend-to-frontend data flow design."
    ],
    links: [{ name: "GitHub", url: "https://github.com/Awaghela/MarketPulse" }]
  },
  {
    title: "Agentic Sales Enablement Assistant",
    stack: ["Python", "FastAPI", "Uvicorn", "Ollama", "Llama 3.1", "Embeddings", "UI"],
    bullets: [
      "Built an agentic AI assistant for sales enablement using local LLM workflows and document-grounded context.",
      "Developed a Python app with a browser UI and FastAPI server, with support for generating and downloading PPTX decks.",
      "Highlights applied LLM engineering, backend development, and end-to-end AI product design."
    ],
    links: [{ name: "GitHub", url: "https://github.com/Awaghela/Agentic_Sales_Enablement_Assistant" }]
  },
  {
    title: "EatSafe",
    stack: ["Python", "Flask", "HTML", "CSS", "Bootstrap", "Google Cloud", "Docker", "SQLAlchemy", "OCR"],
    bullets: [
      "Built a web application that reads food labels, extracts ingredients with OCR, and flags toxic ingredients or dietary restriction violations.",
      "Implemented a Flask backend, web interface, OCR integration, and rule-based ingredient analysis workflow.",
      "Demonstrates full-stack development, cloud deployment, and applied AI for health-focused user experiences."
    ],
    links: [{ name: "GitHub", url: "https://github.com/Awaghela/EatSafe" }]
  },
  {
    title: "TripMuse",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Ollama", "jsPDF", "JavaScript"],
    bullets: [
      "Built a local-first travel companion web app for AI-powered trip moodboarding, packing suggestions, and offline journaling.",
      "Implemented browser-based storage, offline-first workflows, and one-click PDF export for trip briefs.",
      "Highlights product thinking, frontend engineering, and practical local AI integration."
    ],
    links: [{ name: "GitHub", url: "https://github.com/Awaghela/TripMuse" }]
  },
  {
    title: "Cloud-Based Stock Trading Strategy Backtester",
    stack: ["Python", "Flask", "PostgreSQL", "Docker", "Kubernetes", "Google Cloud"],
    bullets: [
      "Built a cloud-based web application for backtesting stock trading strategies on historical market data.",
      "Used a Flask interface, PostgreSQL database, Docker containerization, and Kubernetes-based deployment.",
      "Demonstrates backend development, cloud infrastructure, and scalable financial analytics workflows."
    ],
    links: [{ name: "GitHub", url: "https://github.com/Awaghela/Cloud-Based-Stock-Trading-Strategy-Backtester" }]
  },
  {
    title: "Network Traffic Analysis Using Machine Learning",
    stack: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis", "Cybersecurity"],
    bullets: [
      "Built an ML classification pipeline to distinguish malicious and benign network traffic records.",
      "Compared and fine-tuned multiple machine learning models to improve accuracy while reducing false positives and false negatives.",
      "Showcases applied AI/ML, analytical modeling, and security-focused problem solving."
    ],
    links: [{ name: "GitHub", url: "https://github.com/Awaghela/Network-Traffic-Analysis-Using-Machine-Learning" }]
  }
],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"]
    },
    {
      category: "Frontend",
      items: ["React", "HTML", "CSS", "Bootstrap", "Redux Toolkit"]
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Flask", "Spring Boot", "REST APIs", "GraphQL", "gRPC", "WebSockets", "SQLAlchemy"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Pandas", "NumPy"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "Git", "Postman", "Jira", "FFmpeg"]
    },
    {
      category: "AI / ML",
      items: ["scikit-learn", "OCR", "RAG", "NLP", "Neural Networks"]
    }
  ],
  education: [
    {
      institution: "University of Colorado Boulder",
      degree: "Master's degree, Computer Science",
      dates: "August 2024 - May 2026",
      gpa: "3.78",
      coursework: ["Distributed Systems", "Cloud Computing", "Design & Analysis of Database Systems", "Data Center Scale Computing"]
    },
    {
      institution: "Dwarkadas J. Sanghvi College of Engineering",
      degree: "Bachelor's degree, Information Technology",
      dates: "2020 - 2024",
      gpa: "3.6",
      coursework: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Software Engineering"]
    }
  ]
};
