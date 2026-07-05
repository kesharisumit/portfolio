export const siteConfig = {
  name: "Sumit Keshari",
  title: "Backend Engineer",
  description: "Portfolio website of Sumit Keshari",
  accentColor: "#7e22ce",
  social: {
    email: "ksrisumit@gmail.com",
    linkedin: "https://linkedin.com/in/ksrisumit",
    github: "https://github.com/kesharisumit",
  },
  aboutMe:
    "I'm a Backend Engineer with deep expertise in backend systems, workflow automation, and systems programming. " +
    "Currently at ICICI Bank, I build high-throughput event-driven architectures and automate security operations (SOAR), significantly reducing manual overhead and incident response times. " +
    "My engineering approach emphasizes performance, scalability, and robust architecture. I have a strong foundation in C++ systems programming, having built Redis-compatible in-memory databases and POSIX-compliant shells from scratch. " +
    "I thrive on solving complex backend challenges, from spatial indexing and routing algorithms to orchestrating distributed system integrations.",
  skills: [
    "Data Structures and Algorithms", "System Design (HLD)", "C++", "Python", "Bash", "JavaScript", 
    "Node.js", "Express.js", "REST APIs", "TCP Sockets", 
    "SQL", "MongoDB", "Redis", 
    "Process Management", "IPC Pipes", "Git", "Linux", "CMake"
  ],
  projects: [
    {
      name: "Custom Redis Server — In-Memory Database Engine",
      description:
        "Built a Redis-compatible TCP server from scratch in Node.js implementing 30+ commands across 7 data families, with a streaming RESP protocol parser, transactional semantics (MULTI/EXEC) with optimistic locking, and AOF persistence with configurable fsync policies. Developed a master-replica replication system with full handshake negotiation, RDB snapshot transfer, and real-time write propagation to connected replicas.",
      link: "https://github.com/kesharisumit",
      skills: ["Node.js", "JavaScript", "RESP Protocol", "Distributed Replication"],
    },
    {
      name: "Custom Unix Shell — POSIX Process Manager",
      description:
        "Built a Unix shell in C++ featuring multi-stage pipeline execution via pipe()/dup2(), process lifecycle management with fork()/execvp()/waitpid(), background job execution with async zombie reaping, and I/O redirection with a save-restore fd pattern.",
      link: "https://github.com/kesharisumit",
      skills: ["C++", "Systems Programming", "IPC Piping", "Process Lifecycle"],
    },
    {
      name: "Real-World Map Routing Engine",
      description:
        "Engineered a routing backend that dynamically ingests real-world road networks from the OpenStreetMap Overpass API, implementing 5 pathfinding algorithms (Dijkstra, A*, Bidirectional Dijkstra) with custom MinHeap data structures and a spatial grid index for O(1) nearest-node lookups.",
      link: "https://github.com/kesharisumit",
      skills: ["Node.js", "Graph Algorithms", "Spatial Indexing", "OpenStreetMap"],
    }
  ],
  publications: [],
  experience: [
    {
      company: "ICICI Bank",
      title: "Senior Platform Engineer (Backend / SOAR) - M2",
      dateRange: "April 2025 - Present",
      bullets: [
        "Parallelized QRadar-XSOAR event fetching with ticket creation, cutting incident creation latency and improving fetch rate from 45% to 77% across 3,200+ monthly tickets",
        "Automated break-glass account governance by ingesting alerts into SIEM and integrating with ServiceNow APIs to programmatically validate access timestamps against approved ticket windows, eliminating manual audits",
        "Reconfigured idle DR-site engines to process active workloads, doubling overall compute throughput without changing the underlying active-passive failover guarantees",
        "Participated in architectural evaluation for migrating a high-throughput automation platform, contributing to data persistence strategy discussions and stakeholder alignment across cross-functional teams",
        "Mentoring and guiding 2 junior engineers through code reviews and architectural guidance, accelerating their ramp-up to independently owning and delivering automation modules within 3 months"
      ],
    },
    {
      company: "ICICI Bank",
      title: "Platform Engineer (Backend / SOAR) - M1",
      dateRange: "June 2022 - March 2025",
      bullets: [
        "Engineered Python-based workflow automation pipelines that eliminated 160 man-days of manual operations over 6 months, integrating with REST APIs across multiple third-party distributed systems and internal enterprise platforms",
        "Reduced Mean Time to Respond (MTTR) by 90% by architecting event-driven response pipelines, processing high-volume asynchronous events through multi-stage data enrichment and rule-based decision engines",
        "Automated SSL certificate lifecycle tracking by deploying a monitoring script that flags upcoming renewals 30 days in advance, preventing unplanned maintenance incidents in production",
        "Built data enrichment pipelines ingesting raw data from heterogeneous sources through multi-stage transformations, producing standardized structured outputs for automated downstream decision-making",
        "Automated the expired IOC lifecycle by developing a workflow that scans threat intelligence modules and programmatically generates downstream change requests post-validation, eliminating manual ticket creation for analysts"
      ],
    }
  ],
  education: [
    {
      school: "Indian Institute of Technology Jodhpur, Jodhpur (IITJ)",
      degree: "Masters of Technology, Computer Science Engineering (CSE)",
      dateRange: "August 2020 – July 2022",
      achievements: [
        "Graduated with 7.5 GPA",
        "First Runner Up: IS3, IIT Jodhpur's ACM Student Chapter Ideathon, 2022",
      ],
    },
    {
      school: "Guru Jambheshwar University of Science & Technology, Hisar (GJUS&T)",
      degree: "Bachelor of Technology, Computer Science Engineering (CSE)",
      dateRange: "April 2016 – July 2020",
      achievements: [
        "Graduated with 8.02 GPA",
        "Core computer science fundamentals and systems engineering",
      ],
    },
  ],
};
