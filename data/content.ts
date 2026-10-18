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
  story:
    "We connect ambitious companies with exceptional people — across technology, healthcare, finance and operations — through search that is rigorous, human and fast.",
  heading:
    "Hiring built on trust, where the right people meet the right purpose.",
};

export const about = {
  tagline: "A recruitment partner that treats every hire as a relationship.",
  description:
    "Vibha Recruitments was built on a simple belief: a great placement is more than a filled vacancy. We take time to understand your culture, your goals and the person who will thrive — then we do the work to find them.",
  pillars: [
    {
      title: "Mission",
      description:
        "Match talent and opportunity with honesty, speed and care for both sides of the table.",
    },
    {
      title: "Approach",
      description:
        "Consultative and transparent. Clear briefs, curated shortlists and regular updates.",
    },
    {
      title: "Promise",
      description:
        "Fewer, better conversations — candidates who fit the role and the team.",
    },
  ] as const,
};

export const services = {
  items: [
    {
      title: "Permanent Placement",
      description:
        "End-to-end search for full-time roles, from junior to leadership",
      highlights: ["Role scoping", "Screening and shortlists", "Offer support"],
    },
    {
      title: "Executive Search",
      description:
        "Discreet, research-led mapping and approach for senior and board-level hires",
      highlights: ["Market mapping", "Confidential outreach", "Assessment"],
    },
    {
      title: "Contract & Temp Staffing",
      description: "Flexible talent to scale up for projects and seasonal demand",
      highlights: ["Rapid deployment", "Compliance handled", "Extension options"],
    },
    {
      title: "Recruitment Process Outsourcing",
      description: "An embedded hiring team that runs your pipeline at scale",
      highlights: ["Employer branding", "Pipeline reporting", "Volume hiring"],
    },
  ] as const,
};

export const industries = {
  items: [
    {
      title: "Technology",
      description: "Engineering, product, data, design and IT operations.",
    },
    {
      title: "Healthcare",
      description: "Clinical, administrative and health-tech professionals.",
    },
    {
      title: "Finance",
      description: "Banking, accounting, risk, and fintech talent.",
    },
    {
      title: "Manufacturing & Operations",
      description: "Supply chain, quality, plant and logistics teams.",
    },
    {
      title: "Sales & Marketing",
      description: "Revenue, growth, brand and customer success leaders.",
    },
    {
      title: "Education",
      description: "Academic, administrative and ed-tech professionals.",
    },
  ] as const,
};

export const process = {
  title: "Our Process",
  steps: [
    {
      title: "Discover",
      description:
        "We learn your team, culture and the real outcomes the role must deliver.",
    },
    {
      title: "Search",
      description: "Targeted sourcing across our network and the wider market.",
    },
    {
      title: "Assess",
      description:
        "Structured screening for skills, motivation and fit before you meet anyone.",
    },
    {
      title: "Present",
      description: "A curated shortlist with candid insight on every profile.",
    },
    {
      title: "Onboard",
      description: "Offer negotiation and follow-up support well past day one.",
    },
  ] as const,
};

export const careers = {
  tagline: "Opportunities for candidates.",
  description: "A sample of the kinds of roles we recruit for:",
  roles: [
    { title: "Software Engineer", meta: "Technology • Full-time" },
    { title: "Finance Manager", meta: "Finance • Full-time" },
    { title: "Operations Lead", meta: "Manufacturing • Full-time" },
    { title: "Healthcare Administrator", meta: "Healthcare • Contract" },
  ] as const,
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

export const contact = {
  description:
    "Whether you're building a team or building a career, let's start a conversation.",
  details: [
    {
      label: "Email",
      value: "hello@vibharecruitments.com",
      href: "mailto:hello@vibharecruitments.com",
    },
    {
      label: "Phone",
      value: "+91 00000 00000",
      href: "tel:+910000000000",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/company/vibha-recruitments",
      href: "https://linkedin.com/company/vibha-recruitments",
    },
    { label: "Location", value: "India" },
    { label: "Hours", value: "Mon–Sat, 9:30–18:30" },
  ] as ContactDetail[],
};

export const footer = {
  copyright: "© 2026 Vibha Recruitments. All rights reserved.",
};

export const siteName = "Vibha Recruitments";
