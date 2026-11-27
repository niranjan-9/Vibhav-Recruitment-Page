export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Our Process", href: "/process" },
  { label: "Candidate Stories", href: "/candidate-stories" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const home = {
  badge: "IT Recruitment & Technology Talent Solutions",
  heading: "Connecting the Right Talent. Enabling Business Growth.",
  story:
    "We support businesses across India, the UK and Europe through strategic talent sourcing, staffing and project resource solutions — building capable teams and meaningful career opportunities.",
  cta: "Whether you need specialist technology talent, project resources or a new career opportunity, let's connect.",
  regions: [
    { name: "India", code: "IN" },
    { name: "United Kingdom", code: "UK" },
    { name: "Europe", code: "EU" },
  ],
};

export const about = {
  tagline: "Where Talent Meets Technology",
  description:
    "Vibha Recruitments is an IT recruitment and technology talent solutions partner helping organizations identify, attract and engage skilled professionals. We support businesses across India, the UK and Europe through strategic talent sourcing, staffing and project resource solutions — building capable teams and meaningful career opportunities.",
  pillars: [
    {
      title: "Our Mission",
      icon: "Target",
      description:
        "To connect the right talent with the right opportunity — delivering quality, speed and care across every placement.",
    },
    {
      title: "Our Reach",
      icon: "Compass",
      description:
        "Supporting businesses across India, the UK and Europe through strategic talent sourcing and staffing solutions.",
    },
    {
      title: "Our Promise",
      icon: "ShieldCheck",
      description:
        "Dedicated coordination, long-term partnership and customised talent sourcing tailored to your business needs.",
    },
  ] as const,
  stats: [
    { value: "3+", label: "Countries Served", icon: "Globe2" },
    { value: "7", label: "Service Lines", icon: "Briefcase" },
    { value: "8+", label: "Tech Domains", icon: "Cpu" },
    { value: "100%", label: "Client Focus", icon: "Award" },
  ] as const,
};

export const services = {
  tagline: "Tailored Talent Solutions",
  items: [
    {
      title: "IT & Technology Recruitment",
      description:
        "Specialist hiring across technology domains and professional levels — from developers to architects.",
      highlights: ["Domain expertise", "Technical screening", "Fast delivery"],
      icon: "Laptop",
    },
    {
      title: "Permanent Staffing",
      description:
        "End-to-end hiring for long-term organisational requirements, ensuring the right culture and skill fit.",
      highlights: ["Role scoping", "Shortlisting", "Offer support"],
      icon: "Users",
    },
    {
      title: "Contract Staffing",
      description:
        "Flexible professionals for contractual and project-based needs, deployable at speed.",
      highlights: ["Rapid deployment", "Compliance handled", "Extension options"],
      icon: "Zap",
    },
    {
      title: "Offshore Recruitment",
      description:
        "Recruitment support for UK and European businesses seeking skilled technology talent from India.",
      highlights: ["Cross-border expertise", "Time-zone alignment", "Cost efficiency"],
      icon: "Globe",
    },
    {
      title: "Project Support",
      description:
        "IT professionals and technical resources for development, implementation and project delivery.",
      highlights: ["Team augmentation", "Project resources", "Implementation support"],
      icon: "Rocket",
    },
    {
      title: "Recruitment Process Support",
      description:
        "Candidate sourcing, screening, profile evaluation and interview coordination as an extension of your HR team.",
      highlights: ["Candidate sourcing", "Profile evaluation", "Interview coordination"],
      icon: "Search",
    },
    {
      title: "Internship & Talent Development",
      description:
        "Structured opportunities for students and graduates with practical IT exposure and industry-oriented skill development.",
      highlights: ["Graduate pipelines", "Practical exposure", "Skill development"],
      icon: "GraduationCap",
    },
  ] as const,
};

export const industries = {
  tagline: "Technology Expertise Across Domains",
  items: [
    {
      title: "Software Development",
      description: "Java, .NET, Python, PHP — building robust and scalable software solutions.",
      tags: ["Java", ".NET", "Python", "PHP"],
      icon: "Code2",
    },
    {
      title: "Web Technologies",
      description: "React, Angular, Node.js and Full Stack development for modern web applications.",
      tags: ["React", "Angular", "Node.js", "Full Stack"],
      icon: "Layout",
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Azure and GCP expertise for cloud migration, infrastructure and automation.",
      tags: ["AWS", "Azure", "GCP"],
      icon: "Cloud",
    },
    {
      title: "Data & Analytics",
      description: "Data Engineering, AI/ML and Business Intelligence to power data-driven decisions.",
      tags: ["Data Engineering", "AI/ML", "BI"],
      icon: "Database",
    },
    {
      title: "Testing & QA",
      description: "Manual, Selenium and Automation testing to ensure software quality and reliability.",
      tags: ["Manual", "Selenium", "Automation"],
      icon: "CheckSquare",
    },
    {
      title: "Infrastructure & IT Support",
      description: "Networking and System Administration professionals for robust IT operations.",
      tags: ["Networking", "System Admin"],
      icon: "Server",
    },
    {
      title: "ERP & CRM",
      description: "SAP, Salesforce and Oracle specialists for enterprise resource and customer management.",
      tags: ["SAP", "Salesforce", "Oracle"],
      icon: "Boxes",
    },
    {
      title: "Cybersecurity",
      description: "Information Security and Security Operations talent to protect your digital assets.",
      tags: ["Info Security", "SecOps"],
      icon: "ShieldCheck",
    },
  ] as const,
};

export const process = {
  title: "Our Approach",
  tagline: "A Collaborative, Outcome-Driven Process",
  description:
    "We work collaboratively to align talent with business needs, support project requirements and create opportunities for emerging professionals.",
  steps: [
    {
      title: "Understand",
      icon: "Compass",
      description:
        "We take time to deeply understand your business, team culture, technical requirements and the outcomes your role must deliver.",
    },
    {
      title: "Source",
      icon: "Search",
      description:
        "Targeted talent sourcing across our professional network and the broader technology market.",
    },
    {
      title: "Evaluate",
      icon: "CheckCheck",
      description:
        "Rigorous screening for technical skills, communication, motivation and culture fit — before you meet anyone.",
    },
    {
      title: "Connect",
      icon: "UserCheck",
      description:
        "A curated shortlist of qualified candidates with candid insights on every profile.",
    },
    {
      title: "Deliver",
      icon: "Award",
      description:
        "Offer coordination, onboarding support and ongoing partnership well past day one.",
    },
  ] as const,
};

export const careers = {
  tagline: "Opportunities for Candidates",
  description: "We recruit across a broad range of technology roles. Here are some examples:",
  roles: [
    { title: "Software Developer (Java / .NET / Python)", meta: "Technology • Permanent / Contract" },
    { title: "Full Stack Engineer", meta: "Web Technology • Permanent / Contract" },
    { title: "Cloud & DevOps Engineer", meta: "Cloud • Permanent / Contract" },
    { title: "Data Engineer / BI Analyst", meta: "Data & Analytics • Permanent" },
    { title: "QA / Automation Tester", meta: "Testing • Contract / Permanent" },
    { title: "SAP / Salesforce Consultant", meta: "ERP & CRM • Permanent" },
    { title: "Cybersecurity Analyst", meta: "Security • Permanent" },
    { title: "IT Infrastructure Engineer", meta: "Infrastructure • Permanent / Contract" },
  ] as const,
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  iconName: "Mail" | "Phone" | "Linkedin" | "MapPin" | "Clock";
};

export const contact = {
  description:
    "Whether you need specialist technology talent, project resources or a new career opportunity — let's connect.",
  details: [
    {
      label: "Email",
      value: "hello@vibharecruitments.com",
      href: "mailto:hello@vibharecruitments.com",
      iconName: "Mail",
    },
    {
      label: "Phone",
      value: "+91 00000 00000",
      href: "tel:+910000000000",
      iconName: "Phone",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/company/vibha-recruitments",
      href: "https://linkedin.com/company/vibha-recruitments",
      iconName: "Linkedin",
    },
    {
      label: "Location",
      value: "India · UK · Europe",
      iconName: "MapPin",
    },
    {
      label: "Hours",
      value: "Mon–Sat, 9:30 am – 6:30 pm IST",
      iconName: "Clock",
    },
  ] as ContactDetail[],
};

export const footer = {
  tagline: "Connecting the Right Talent. Enabling Business Growth.",
  copyright: "© 2026 Vibha Recruitments. All rights reserved.",
  developedBy: "Inoviq Technologies",
  developedByUrl: "https://www.inoviqtechnologies.in/",
  regions: ["India", "United Kingdom", "Europe"],
};

export const siteName = "Vibha Recruitments";
