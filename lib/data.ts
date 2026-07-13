export const profile = {
  name: "Gurpreet Singh Sahni",
  title: "Cloud Architect",
  subtitle: "Cloud Architect • Infrastructure Strategy • Containerization Specialist",
  location: "Jalandhar, India",
  phone: "+91-9315359351",
  email: "gurpreet.sahni@gmail.com",
  linkedin: "https://linkedin.com/in/gurpreet-singh-sahni-331410182",
  github: "https://github.com/gurpreetsinghsahni",
  headline:
    "Cloud Architect • Kubernetes • AWS • Infrastructure Automation • DevOps • AI Infrastructure",
  roles: [
    "Cloud Architect",
    "AWS Expert",
    "Kubernetes Specialist",
    "Infrastructure Automation Engineer",
    "DevOps Engineer",
    "AI Infrastructure Engineer",
  ],
  about: `Forward-thinking Cloud Architect with nearly 5 years of demonstrated expertise evaluating, designing and managing robust enterprise cloud infrastructure across AWS and multi-cloud environments. Expert in advanced container orchestration using Kubernetes (Amazon EKS) to drive highly scalable, resilient deployment strategies — and in engineering automation frameworks with Bash and Python to streamline systems monitoring and integrations.`,
  philosophy:
    "Infrastructure should be invisible when it works, and obvious to fix when it doesn't. I design for that — automated, observable, and boring in the best way.",
  yearsExperience: 5,
  education: {
    degree: "B.Tech in Computer Science",
    school: "Guru Gobind Singh Indraprastha University",
    year: "2021",
    detail: "CGPA: 8.39 / 10",
  },
};

export const stats = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Production Clusters Shipped", value: 20, suffix: "+" },
  { label: "Uptime Delivered", value: 99.9, suffix: "%" },
  { label: "Infra Provisioned via IaC", value: 100, suffix: "%" },
];

export const skillCategories = [
  {
    id: "cloud",
    label: "Cloud Platforms",
    skills: [
      { name: "AWS Architecture", level: 95 },
      { name: "EC2", level: 92 },
      { name: "S3", level: 90 },
      { name: "IAM", level: 90 },
      { name: "VPC", level: 90 },
      { name: "Route53", level: 85 },
      { name: "Load Balancing", level: 87 },
      { name: "CloudWatch", level: 88 },
      { name: "CloudFront", level: 83 },
      { name: "Lambda", level: 80 },
      { name: "RDS", level: 82 },
      { name: "API Gateway", level: 80 },
      { name: "Azure (AZ-900)", level: 75 },
      { name: "GCP Infrastructure", level: 68 },
    ],
  },
  {
    id: "containers",
    label: "Containers & Orchestration",
    skills: [
      { name: "Docker", level: 93 },
      { name: "Kubernetes", level: 94 },
      { name: "EKS", level: 92 },
      { name: "Helm", level: 87 },
      { name: "Multi-stage Builds", level: 85 },
      { name: "Pod Autoscaling", level: 86 },
    ],
  },
  {
    id: "iac",
    label: "Infrastructure as Code",
    skills: [
      { name: "Terraform", level: 93 },
      { name: "CloudFormation", level: 85 },
    ],
  },
  {
    id: "programming",
    label: "Automation & Scripting",
    skills: [
      { name: "Python", level: 88 },
      { name: "Bash", level: 90 },
      { name: "Linux", level: 88 },
      { name: "Git", level: 87 },
      { name: "Systems Monitoring", level: 86 },
      { name: "Automation", level: 90 },
    ],
  },
  {
    id: "cicd",
    label: "CI/CD & DevOps",
    skills: [
      { name: "GitLab", level: 89 },
      { name: "Jenkins", level: 84 },
      { name: "Blue/Green Deployments", level: 88 },
      { name: "CI/CD Pipelines", level: 89 },
    ],
  },
  {
    id: "security",
    label: "Security & Networking",
    skills: [
      { name: "Network Security", level: 86 },
      { name: "Security Groups", level: 88 },
      { name: "SSL/TLS", level: 84 },
      { name: "Compliance Verification", level: 82 },
      { name: "Disaster Recovery Planning", level: 80 },
      { name: "DNS", level: 85 },
      { name: "VPN", level: 80 },
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring & Observability",
    skills: [
      { name: "CloudWatch Logs", level: 88 },
      { name: "Architecture Documentation", level: 90 },
      { name: "Cost Optimization", level: 85 },
    ],
  },
];

export const experience = [
  {
    company: "Rackspace Technology",
    role: "Cloud Architect I / II",
    focus: "Infrastructure & Orchestration Focus",
    period: "Sep 2023 — Present",
    current: true,
    bullets: [
      "Reviewed and assessed complex cloud infrastructure blueprints, recommending optimizations aligned with architectural best practices to support scalable workloads.",
      "Created and refined comprehensive architecture documentation, runbooks and blueprints for robust, secure, horizontally scalable production environments.",
      "Designed container orchestration, automated pod scaling and multi-region deployment strategies across enterprise Amazon EKS clusters.",
      "Programmed automation scripts in Bash and Python to streamline cloud operations, system integrations and multi-layered infrastructure monitoring.",
      "Proactively identified and resolved security, IAM access-control and network compliance risks within large-scale distributed cloud networks.",
      "Engineered low-risk Blue/Green zero-downtime cutover strategies for database migration lifecycles.",
      "Resolved complex runtime, networking and traffic-ingress faults in production, providing root-cause guidance to improve reliability.",
    ],
    highlights: [
      "Enterprise AWS Architecture",
      "Amazon EKS",
      "Automation",
      "Blue/Green Deployments",
      "Infrastructure Security",
      "Architecture Documentation",
    ],
  },
  {
    company: "Avancer Corporation",
    role: "Associate Cloud Engineer",
    focus: "Infrastructure Design & Migration",
    period: "Feb 2021 — Sep 2023",
    current: false,
    bullets: [
      "Designed and deployed cloud architecture primitives using Terraform templates and AWS CloudFormation following modular, declarative design practices.",
      "Led migration of multi-tier legacy systems into optimized Docker images, establishing clean deployment automation pathways.",
      "Constructed scalable CI/CD architectures using Jenkins and GitLab pipelines to decrease turnaround delays.",
      "Translated complex infrastructure concepts clearly for engineering squads, keeping project milestones aligned.",
    ],
    highlights: ["Terraform", "CloudFormation", "Docker", "CI/CD", "Migration"],
  },
];

export const projects = [
  {
    id: "onprem-container-framework",
    title: "On-Premise Container Deployment Framework",
    description:
      "Architected and containerized an application workspace from scratch using Docker. Engineered a portable Bash distribution package with client-side automatic image injection, isolated bridge configurations and deployment monitoring to streamline remote installations.",
    tags: ["Docker", "Bash", "Deployment Automation"],
    github: "#",
  },
  {
    id: "infra-automation-blueprint",
    title: "Enterprise Infrastructure Automation Blueprint",
    description:
      "Standardized corporate multi-region cloud landing zones by engineering reusable, production-ready Infrastructure as Code architectures across Terraform and CloudFormation.",
    tags: ["Terraform", "CloudFormation", "AWS", "IaC"],
    github: "#",
  },
  {
    id: "cluster-traffic-modernization",
    title: "Production Cluster Traffic Modernization",
    description:
      "Redesigned and implemented high-availability entry points and traffic paths inside production container landscapes, resolving networking compliance vulnerabilities.",
    tags: ["EKS", "Kubernetes", "High Availability", "Networking"],
    github: "#",
  },
];

export const certifications = [
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
  },
  {
    name: "AI Ready Badge",
    issuer: "Rackspace Technology",
  },
];

export const techStack = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Python",
  "Bash",
  "Git",
  "GitLab",
  "Jenkins",
  "Azure",
  "CloudFormation",
];

export const timeline = [
  { year: "2021", label: "Started in Cloud Engineering", detail: "Joined Avancer Corporation as Associate Cloud Engineer" },
  { year: "2023", label: "Became Cloud Architect", detail: "Joined Rackspace Technology, leading enterprise AWS architecture" },
  { year: "Now", label: "Architecting at Scale", detail: "Designing EKS platforms, automation and security for production systems" },
];
