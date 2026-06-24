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
    role: "Cybersecurity Professional | DFIR Engagement Lead | Digital Forensics & Incident Response",
    intro:
      "I lead and support complex cybersecurity investigations involving ransomware, business email compromise, cloud incidents, endpoint activity, and identity-based threats. My work focuses on turning technical evidence into clear findings, practical recommendations, and actionable next steps.",
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
      "Experienced in client meetings, forensic update calls, counsel communications, and executive-level reporting"
    ],
    facts: [
      { label: "Location", value: "Toronto, Canada" },
      { label: "Focus", value: "DFIR, ransomware, BEC, cloud and endpoint investigations" },
      { label: "Languages", value: "English and Mandarin" },
      { label: "Portfolio", value: "gilbertguo.github.io/dfir-artifact-explorer-project" }
    ]
  },
  experience: [
    {
      company: "At-Bay",
      role: "Cyber Analyst - Engagement Lead, DFIR",
      dates: "Dec 2024 - Present",
      description:
        "Lead and support DFIR engagements involving business email compromise, intrusions, ransomware, cloud-based incidents, network-based incidents, and host-based forensic analysis.",
      points: [
        "Lead incident response engagements from investigation through reporting",
        "Conduct forensic analysis across endpoint artifacts, cloud logs, identity logs, mailbox activity, and network telemetry",
        "Reconstruct attacker timelines, identify root cause, and assess business impact",
        "Lead client and counsel update calls with clear, actionable findings",
        "Prepare engagement documentation including LOEs, SOWs, and change orders",
        "Build internal automation and forensic processing workflows using PowerShell and Python",
        "Mentor new team members on forensic workflows, artifact analysis, and internal tooling"
      ]
    },
    {
      company: "KPMG LLP",
      role: "Senior Cyber Security Consultant",
      dates: "Oct 2023 - Nov 2024",
      description:
        "Led ransomware, BEC, insider threat, cloud, and enterprise security investigations for private and public-sector clients.",
      points: [
        "Led DFIR engagements across enterprise environments",
        "Managed client communications, expectations, deliverables, timelines, and scope",
        "Mentored junior analysts, co-ops, and new hires",
        "Used Microsoft 365 UAL, SentinelOne, CrowdStrike, firewall logs, network telemetry, and domain artifacts to investigate attacker activity",
        "Delivered technical findings and executive briefings"
      ]
    },
    {
      company: "KPMG LLP",
      role: "Cyber Security Consultant",
      dates: "Sep 2021 - Sep 2023",
      description:
        "Performed incident response, threat hunting, compromise assessments, table-top exercises, and BEC investigations.",
      points: [
        "Investigated ransomware and business email compromise incidents",
        "Developed threat hunting use cases and environment sweeps",
        "Delivered post-incident reports with findings and recommendations",
        "Supported compromise assessments across client environments",
        "Helped clients improve incident response readiness"
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
        "Timeline reconstruction",
        "Root cause analysis",
        "Impact assessment"
      ]
    },
    {
      title: "Engagement Leadership",
      items: [
        "Client communication",
        "Counsel updates",
        "Forensic status calls",
        "Executive reporting",
        "Evidence tracking",
        "Scope management",
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
        "Custom forensic parsers",
        "Workflow automation"
      ]
    }
  ],
  caseStudies: [
    {
      title: "Ransomware Investigation",
      challenge:
        "An organization experienced encryption activity across multiple systems and required rapid scoping, root cause analysis, and business impact assessment.",
      approach:
        "Analyzed endpoint artifacts, authentication logs, remote access activity, lateral movement indicators, and attacker tooling to reconstruct the timeline.",
      outcome:
        "Delivered clear findings, identified key attack paths, and provided practical recommendations to support containment and recovery."
    },
    {
      title: "Business Email Compromise Review",
      challenge:
        "Suspicious mailbox activity raised concerns around unauthorized access, data exposure, and fraudulent email activity.",
      approach:
        "Reviewed sign-in logs, mailbox audit events, forwarding rules, inbox rules, message trace data, and identity activity.",
      outcome:
        "Established the access timeline, assessed mailbox impact, and provided remediation guidance to reduce future compromise risk."
    },
    {
      title: "Cloud and Identity Investigation",
      challenge:
        "Cloud and identity logs showed suspicious activity requiring validation of access, privilege usage, and potential persistence.",
      approach:
        "Correlated cloud audit logs, authentication events, administrative actions, and endpoint telemetry.",
      outcome:
        "Clarified the scope of activity and helped stakeholders understand exposure, remediation priorities, and monitoring improvements."
    },
    {
      title: "Forensic Automation",
      challenge: "Manual forensic artifact processing created delays during active investigations.",
      approach:
        "Built PowerShell and Python-based automation to parse, normalize, and accelerate review of forensic artifacts.",
      outcome: "Improved triage speed, consistency, and analyst workflow efficiency."
    }
  ],
  // Certification labels and URLs can be updated here.
  certifications: [
    {
      name: "CISSPCertified Information Systems Security Professional (CISSP)",
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
