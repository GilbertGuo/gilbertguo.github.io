export const content = {
  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    name: "Yiwei Guo",
    role: "DFIR Engagement Lead | Digital Forensics & Incident Response",
    intro:
      "I lead complex ransomware, intrusion, business email compromise, and cloud investigations. My work combines hands-on host, network, and cloud forensics with client communication, legal counsel updates, executive reporting, project delivery, and analyst mentoring.",
    primaryCta: { label: "View Experience", href: "#experience" },
    secondaryCta: { label: "Contact Me", href: "#contact" }
  },
  about: {
    narrative:
      "My work sits at the intersection of digital forensics, incident response, threat hunting, cloud investigations, and client communication. I help organizations understand what happened, how it happened, what was impacted, and how to move forward with confidence.",
    details: [
      "Based in Toronto, Canada",
      "Bilingual in English and Mandarin",
      "Strong experience communicating with both technical and non-technical stakeholders",
      "Experienced in client meetings, forensic update calls, counsel communications, executive briefings, and project delivery"
    ],
    facts: [
      { label: "Location", value: "Toronto, Canada" },
      { label: "Focus", value: "DFIR, ransomware, BEC, intrusion, cloud, identity, and endpoint investigations" },
      { label: "Languages", value: "English and Mandarin" },
      { label: "Portfolio", value: "gilbertguo.github.io" }
    ]
  },
  experience: [
    {
      company: "At-Bay",
      role: "Cyber Analyst - Engagement Lead, DFIR",
      dates: "Dec 2024 - Present",
      description:
        "Lead end-to-end, client-facing ransomware, intrusion, and BEC investigations across endpoint, cloud, identity, mailbox, and network evidence.",
      points: [
        "Coordinate scope, evidence, priorities, timelines, resourcing, and analyst assignments",
        "Analyze endpoint artifacts, Microsoft 365 and Google Workspace audit logs, cloud and identity logs, mailbox activity, and network telemetry",
        "Establish root cause, reconstruct attacker activity, and assess scope and business impact",
        "Lead forensic update calls with clients and legal counsel, communicating findings and next steps clearly",
        "Prepare engagement documentation that defines scope and resourcing",
        "Build Python and PowerShell automation and custom parsers for forensic processing, triage, and artifact analysis",
        "Train analysts on investigation methods, tooling, and evidence review"
      ]
    },
    {
      company: "KPMG LLP",
      role: "Senior Cyber Security Consultant",
      dates: "Oct 2023 - Nov 2024",
      description:
        "Led ransomware, BEC, insider-threat, and cloud investigations for enterprise and public-sector clients.",
      points: [
        "Delivered technical findings and executive briefings for enterprise and public-sector clients",
        "Examined Microsoft 365 UAL records, Google Workspace audit logs, EDR telemetry, network flows, firewall logs, and on-premises domain artifacts",
        "Reconstructed attacker activity and validated business impact across complex environments",
        "Managed client communications, project scope, budgets, timelines, and analyst assignments",
        "Resolved technical blockers and reviewed findings to maintain high-quality delivery",
        "Mentored junior consultants, co-op students, and new hires on DFIR methodology, KAPE, Velociraptor, EDR tools, and investigation workflows"
      ]
    },
    {
      company: "KPMG LLP",
      role: "Cyber Security Consultant",
      dates: "Sep 2021 - Sep 2023",
      description:
        "Performed incident response, threat hunting, compromise assessments, tabletop exercises, and BEC investigations.",
      points: [
        "Investigated high-profile ransomware and business email compromise incidents",
        "Produced post-incident reports with findings and remediation recommendations to reduce future compromise risk",
        "Developed threat-hunting use cases and conducted environment-wide compromise assessments",
        "Identified indicators of compromise and suspicious activity across client environments",
        "Designed and facilitated cyberattack tabletop exercises to strengthen incident response readiness"
      ]
    },
    {
      company: "KPMG LLP",
      role: "Cyber Security Researcher Intern",
      dates: "May 2021 - Aug 2021",
      description: "Worked on an automated AI-based phishing email analysis solution.",
      points: [
        "Built Python Flask backend for automated email analysis",
        "Trained machine learning models for phishing classification",
        "Used threat intelligence enrichment and sandbox analysis",
        "Deployed components using Google Cloud Platform, Docker, Cloud Run, and Compute Engine"
      ]
    },
    {
      company: "University of Guelph",
      role: "Graduate Teaching Assistant",
      dates: "Jan 2021 - Apr 2021",
      description: "Supported students in algorithm analysis and design.",
      points: [
        "Mentored students on algorithm design concepts",
        "Provided assignment feedback and learning support"
      ]
    }
  ],
  skills: [
    {
      title: "Digital Forensics & Incident Response",
      items: [
        "Ransomware investigations",
        "Intrusion investigations",
        "Business email compromise",
        "Host-based forensics",
        "Network forensics",
        "Cloud and identity investigations",
        "Evidence review",
        "Timeline reconstruction",
        "Root cause analysis",
        "Impact assessment"
      ]
    },
    {
      title: "Engagement Leadership",
      items: [
        "Client communication",
        "Client engagement management",
        "Counsel updates",
        "Forensic status calls",
        "Executive reporting",
        "Evidence tracking",
        "Scope management",
        "Budgets and timelines",
        "LOE / SOW / change order support",
        "Team coordination",
        "Mentorship"
      ]
    },
    {
      title: "Security Platforms",
      items: [
        "Microsoft Defender for Endpoint",
        "Microsoft 365 Unified Audit Log",
        "Google Workspace audit logs",
        "EDR telemetry",
        "SentinelOne",
        "CrowdStrike",
        "Huntress",
        "Splunk",
        "ELK",
        "QRadar",
        "Firewall logs",
        "Network flows"
      ]
    },
    {
      title: "Forensic Tools",
      items: [
        "Eric Zimmerman tools",
        "KAPE",
        "Binalyze",
        "Velociraptor",
        "FTK",
        "Magnet AXIOM",
        "VMware ESXi analysis",
        "Windows artifacts",
        "Linux artifacts"
      ]
    },
    {
      title: "Cloud & Identity",
      items: [
        "Azure",
        "AWS",
        "Google Cloud",
        "Microsoft 365",
        "Entra ID",
        "Google Workspace",
        "Identity logs",
        "Mailbox investigations"
      ]
    },
    {
      title: "Programming & Automation",
      items: [
        "Python",
        "PowerShell",
        "JavaScript",
        "Shell scripting",
        "Web development",
        "AI-assisted DFIR tooling",
        "Custom forensic parsers",
        "Searchable dashboards",
        "Cloud-log collectors",
        "Workflow automation"
      ]
    }
  ],
  caseStudies: [
    {
      title: "DFIR Projects & Resources",
      challenge:
        "Central portfolio for DFIR tools, cloud-forensics notes, and technical resources.",
      approach:
        "Organized practical resources around investigation workflows, evidence interpretation, and repeatable analyst reference material.",
      outcome:
        "Creates a single public entry point for hands-on DFIR projects and supporting research.",
      href: "https://gilbertguo.github.io/dfir-projects-resources/"
    },
    {
      title: "DFIR Artifact Explorer",
      challenge:
        "Investigators often need a fast way to locate and interpret artifacts across operating systems and SaaS platforms.",
      approach:
        "Built a searchable reference for Windows, Linux, Microsoft 365, and Google Workspace artifacts.",
      outcome:
        "Supports faster evidence review, artifact lookup, and investigation planning.",
      href: "https://gilbertguo.github.io/dfir-artifact-explorer-project/"
    },
    {
      title: "M365 Investigator Suite",
      challenge:
        "BEC investigations require repeatable review of mailbox, identity, enrichment, and hunting evidence.",
      approach:
        "Created a case-based workbench for Microsoft 365 log analysis, enrichment, hunting, and exports.",
      outcome:
        "Improves consistency and speed during Microsoft 365 investigation workflows.",
      href: "https://github.com/GilbertGuo/M365-Investigator-Suite"
    },
    {
      title: "GWS Investigator Suite",
      challenge:
        "Google Workspace investigations need structured review of audit activity, enrichment, hunting results, and case evidence.",
      approach:
        "Built a case-based workbench for Google Workspace log analysis, enrichment, hunting, and exports.",
      outcome: "Helps analysts move from raw workspace activity to clearer investigative findings.",
      href: "https://github.com/GilbertGuo/GWS-Investigator-Suite"
    },
    {
      title: "AWS CloudTrail Event History Collector",
      challenge:
        "Cloud investigations require careful collection across AWS Regions without changing the environment under review.",
      approach:
        "Built a read-only, resumable collector for CloudTrail Event History across AWS Regions.",
      outcome: "Supports reliable cloud-log collection and repeatable review during AWS investigations.",
      href: "https://github.com/GilbertGuo/aws-cloudtrail-event-history-collector"
    }
  ],
  // Certification labels and URLs can be updated here.
  certifications: [
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      href: "https://www.credly.com/badges/6722ca1f-f42a-49f7-97ee-d7497deba333/linked_in_profile"
    },
    {
      name: "GIAC Certified Forensic Analyst (GCFA)",
      href: "https://www.credly.com/badges/30954698-3d66-4d43-a2ef-4c64914fcacb/linked_in_profile"
    },
    {
      name: "GIAC Network Forensic Analyst (GNFA)",
      href: "https://www.credly.com/badges/9a50d5ae-9558-4088-a3a7-b1b6a37adddc/linked_in_profile"
    },
    {
      name: "GIAC Cloud Forensics Responder (GCFR)",
      href: "https://www.credly.com/badges/e6a28959-385e-49af-9929-e03cf568a623/linked_in_profile"
    }
  ],
  education: [
    {
      school: "University of Guelph",
      degree: "Master of Cybersecurity and Threat Intelligence",
      detail: "Cybersecurity and Threat Intelligence",
      dates: "2020 - 2021",
      location: "Guelph, Canada"
    },
    {
      school: "University of Toronto",
      degree: "Honours Bachelor of Science",
      detail: "Specialist Program in Computer Science - Software Engineering Stream",
      dates: "2016 - 2020",
      location: "Toronto, Canada"
    }
  ],
  values: {
    text:
      "I believe strong incident response is not only about finding artifacts. It is about building a clear story from evidence, communicating it effectively, and helping organizations make confident decisions during high-pressure situations.",
    items: [
      "Evidence-driven analysis",
      "Clear communication under pressure",
      "Practical recommendations",
      "Confidentiality and professionalism",
      "Calm leadership during incidents",
      "Turning complex technical details into business-focused decisions"
    ]
  },
  contact: {
    headline: "Let's connect.",
    text:
      "Whether it is DFIR, threat hunting, cloud investigations, forensic automation, or cybersecurity consulting, I am always interested in meaningful conversations around security and incident response.",
    email: "gyw765419384@gmail.com",
    location: "Toronto, Canada",
    portfolio: "gilbertguo.github.io"
  }
} as const;
