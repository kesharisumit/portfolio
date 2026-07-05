export const siteConfig = {
  name: "Sumit Keshari",
  title: "Senior Platform Engineer",
  description: "Portfolio website of Sumit Keshari",
  accentColor: "#7e22ce",
  social: {
    email: "ksrisumit@gmail.com",
    linkedin: "https://linkedin.com/in/ksrisumit",
    github: "https://github.com/kesharisumit",
  },
  aboutMe:
    "I'm a Senior Platform Engineer with deep expertise in backend systems, workflow automation, and systems programming. " +
    "Currently at ICICI Bank, I build high-throughput event-driven architectures and automate security operations (SOAR), significantly reducing manual overhead and incident response times. " +
    "My engineering approach emphasizes performance, scalability, and robust architecture. I have a strong foundation in C++ systems programming, having built custom interpreters, Redis-compatible in-memory databases, and POSIX-compliant shells from scratch. " +
    "I thrive on solving complex backend challenges, from spatial indexing and routing algorithms to orchestrating distributed system integrations.",
  skills: ["C++", "Python", "JavaScript", "Node.js", "Bash", "Redis", "MongoDB", "Systems Programming"],
  projects: [
    {
      name: "Custom Redis Server",
      description:
        "A Redis-compatible TCP server built from scratch in Node.js implementing 30+ commands across 7 data families, featuring a streaming RESP parser, AOF persistence, and master-replica replication.",
      link: "https://github.com/kesharisumit",
      skills: ["Node.js", "JavaScript", "TCP Sockets", "RESP Protocol", "Distributed Systems"],
    },
    {
      name: "Custom Unix Shell",
      description:
        "A POSIX-compliant Unix shell in C++ featuring multi-stage pipeline execution, process lifecycle management, background job async zombie reaping, and I/O redirection.",
      link: "https://github.com/kesharisumit",
      skills: ["C++", "Systems Programming", "IPC Piping", "Process Management"],
    },
    {
      name: "Real-World Map Routing Engine",
      description:
        "A routing backend that dynamically ingests OpenStreetMap road networks. Implements advanced pathfinding (Dijkstra, A*) with spatial grid indexing for O(1) nearest-node lookups.",
      link: "https://github.com/kesharisumit",
      skills: ["Node.js", "Graph Algorithms", "Spatial Indexing"],
    }
  ],
  publications: [],
  experience: [
    {
      company: "ICICI Bank",
      title: "Senior Platform Engineer (Backend / SOAR) - M2",
      dateRange: "April 2025 - Present",
      bullets: [
        "Parallelized QRadar-XSOAR event fetching with ticket creation, cutting latency and improving fetch rate from 45% to 77% across 3,200+ monthly tickets.",
        "Automated break-glass account governance by ingesting SIEM alerts and integrating ServiceNow APIs, eliminating manual audits.",
        "Reconfigured idle DR-site engines to process active workloads, doubling overall compute throughput.",
        "Mentoring and guiding junior engineers in architectural design and code reviews."
      ],
    },
    {
      company: "ICICI Bank",
      title: "Platform Engineer (Backend / SOAR) - M1",
      dateRange: "June 2022 - March 2025",
      bullets: [
        "Engineered Python-based workflow automation pipelines eliminating 160 man-days of manual operations.",
        "Reduced Mean Time to Respond (MTTR) by 90% via event-driven response pipelines and multi-stage data enrichment.",
        "Automated SSL certificate lifecycle tracking to prevent unplanned production incidents.",
        "Built data enrichment pipelines producing standardized structured outputs for automated downstream decision-making."
      ],
    }
  ],
  education: [
    {
      school: "Indian Institute of Technology, Jodhpur",
      degree: "Master of Technology (M.Tech) in Computer Science",
      dateRange: "2020 - 2022",
      achievements: [
        "Majored in security, privacy preservation and blockchain",
      ],
    },
    {
      school: "Guru Jambheshwar University of Science & Technology",
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      dateRange: "2016 - 2020",
      achievements: [
        "Core computer science fundamentals and systems engineering",
      ],
    },
  ],
};
