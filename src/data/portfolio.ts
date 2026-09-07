export type Experience = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  name: string;
  description: string;
  link: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Hypefast",
    role: "Senior Backend Software Engineer",
    dates: "Apr 2025 — Aug 2026",
    summary: "Built and improved B2B platform for dependable commerce infrastructure for a fast-moving portfolio of Southeast Asian brands.",
    highlights: ["Third party integrations", "Microservices", "System Improvement"],
  },
  {
    company: "Astro",
    role: "Senior Backend Software Engineer",
    dates: "Apr 2022 — Apr 2025",
    summary: "Designed and evolved backend systems behind a high-velocity grocery ordering and fulfillment system.",
    highlights: ["Event-driven systems", "gRPC","REST", "Microservices"],
  },
  {
    company: "Lemonilo",
    role: "Backend Software Engineer",
    dates: "Jun 2020 — Dec 2021",
    summary: "Designed and developed health discussion forum (Q&A with doctor), referral engine, gamification, and dynamic CMS for marketing team.",
    highlights: ["Microservices", "Marketing technology", "Health"],
  },
  {
    company: "Airy",
    role: "Backend Software Engineer",
    dates: "Jun 2018 — Apr 2020",
    summary: "Built highly concurrent flash sale campaign feature, internal marketing dashboard, ads tracking, third party marketing integrations, referral campaign and support marketing team operations.",
    highlights: ["Marketing technology", "Third party integration", "Budget travel"],
  },
  {
    company: "Tokopedia",
    role: "Backend Software Engineer",
    dates: "Aug 2016 — Jun 2018",
    summary: "Spearheaded the migration of core Order Services from a legacy Perl monolith to modern Go microservices. Designed and developed features such as automated commission debit system for official store orders.",
    highlights: ["E-commerce", "Code migration", "Performance improvement"],
  },
];

// EDITABLE PROJECT DATA — replace these examples with selected GitHub projects.
export const projects: Project[] = [
  {
    name: "Image to Speech",
    description:
      "A flutter based app where you can extract the text from an image and reads it to you. Built with Google ML Kit.",
    link: "https://github.com/SurgicalSteel/image-to-speech",
    tags: ["Dart", "Flutter", "Google ML Kit"],
  },
  {
    name: "Elasthink",
    description:
      "An alternative to elasticsearch engine written in Go for small set of documents that uses inverted index to build the index and utilizes redis to store the indexes.",
    link: "https://github.com/SurgicalSteel/elasthink",
    tags: ["Go", "Redis", "Inverted index"],
  },
  {
    name: "Geo-Sense",
    description:
      "A simple Go-based engine (optimized) to find the closest warehouse to shipping address using Haversine formula. ",
    link: "https://github.com/SurgicalSteel/geo-sense",
    tags: ["Go", "Haversine Formula", "Warehouse"],
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Java", "Go", "Python", "Dart"] },
  { label: "Frameworks", items: ["Spring Boot", "Fiber", "Dropwizard", "Flutter", "Gin", "Fast API"] },
  { label: "Data", items: ["PostgreSQL", "Redis", "MongoDB"] },
  { label: "Cloud & tooling", items: ["GCP", "Terraform", "Docker", "Datadog", "Grafana", "AWS", "Azure"] },
  { label: "Architecture", items: ["Microservices", "Event-driven architecture", "gRPC", "REST APIs"] },
];