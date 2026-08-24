// Static fallback data - used if JSON database is not available
// This file is safe to import in both server and client components

export const profile = {
  name: "Gurpreet Singh Sahni",
  title: "AWS DevOps Engineer",
  subtitle: "AWS DevOps Engineer \u2022 Cloud Engineer \u2022 Infrastructure Automation",
  location: "Jalandhar, India",
  phone: "+91-9315359351",
  email: "gurpreet.sahni@gmail.com",
  linkedin: "https://linkedin.com/in/gurpreet-singh-sahni-331410182",
  github: "https://github.com/gurpreetsinghsahni",
  headline:
    "AWS DevOps Engineer \u2022 Cloud Engineer \u2022 Kubernetes \u2022 Terraform \u2022 CI/CD \u2022 Infrastructure Automation",
  roles: [
    "AWS DevOps Engineer",
    "Cloud Engineer",
    "Kubernetes Specialist",
    "Infrastructure Automation Engineer",
    "CI/CD Pipeline Engineer",
    "AI-Assisted Engineering",
  ],
  about: `AWS DevOps Engineer and Cloud Engineer with 5+ years of experience designing, managing, and automating scalable enterprise AWS cloud infrastructure and production environments. Expertise across core AWS services (EC2, VPC, IAM, Route53, Auto Scaling, Lambda, CloudWatch, SNS, Systems Manager, ECS, EKS, Amazon RDS PostgreSQL), Infrastructure as Code (Terraform, CloudFormation), and container orchestration (Docker, Kubernetes/EKS). Proven proficiency building CI/CD pipelines (GitHub Actions, AWS CodePipeline, Jenkins) and scripting robust automation using Linux, Bash, and Python.`,
  philosophy:
    "Infrastructure should be invisible when it works, and obvious to fix when it doesn't. I design for that \u2014 automated, observable, and boring in the best way.",
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
    label: "AWS Core Services",
    skills: [
      { name: "EC2", level: 95 },
      { name: "VPC", level: 93 },
      { name: "IAM", level: 92 },
      { name: "Route53", level: 88 },
      { name: "Auto Scaling", level: 90 },
      { name: "Lambda", level: 85 },
      { name: "ECS", level: 87 },
      { name: "EKS", level: 92 },
      { name: "S3", level: 90 },
      { name: "Amazon RDS PostgreSQL", level: 88 },
      { name: "ALB/NLB", level: 88 },
      { name: "CloudWatch", level: 90 },
      { name: "SNS", level: 85 },
      { name: "Systems Manager (SSM)", level: 87 },
      { name: "KMS", level: 83 },
      { name: "Secrets Manager", level: 83 },
    ],
  },
  {
    id: "iac",
    label: "Infrastructure as Code",
    skills: [
      { name: "Terraform", level: 93 },
      { name: "CloudFormation", level: 88 },
      { name: "Infrastructure Provisioning", level: 90 },
      { name: "Reusable Modules", level: 87 },
    ],
  },
  {
    id: "cicd",
    label: "CI/CD & DevOps",
    skills: [
      { name: "GitHub Actions", level: 90 },
      { name: "AWS CodePipeline", level: 85 },
      { name: "AWS CodeDeploy", level: 84 },
      { name: "Jenkins", level: 86 },
      { name: "GitLab CI/CD", level: 88 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
    ],
  },
  {
    id: "containers",
    label: "Containers & Orchestration",
    skills: [
      { name: "Docker", level: 93 },
      { name: "Docker Compose", level: 90 },
      { name: "Kubernetes", level: 92 },
      { name: "Amazon EKS", level: 92 },
      { name: "Helm", level: 87 },
      { name: "Ingress", level: 86 },
      { name: "Rolling & Blue/Green Deployments", level: 88 },
    ],
  },
  {
    id: "programming",
    label: "Scripting & Automation",
    skills: [
      { name: "Linux", level: 92 },
      { name: "Bash", level: 90 },
      { name: "Python", level: 88 },
      { name: "AWS Systems Manager Automation", level: 86 },
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring & Operations",
    skills: [
      { name: "Amazon CloudWatch Metrics & Alarms", level: 90 },
      { name: "Amazon SNS Alerting", level: 86 },
      { name: "CloudWatch Agent", level: 85 },
      { name: "Production Monitoring", level: 88 },
    ],
  },
  {
    id: "security",
    label: "Security & Networking",
    skills: [
      { name: "IAM Policies", level: 90 },
      { name: "VPC Networking", level: 90 },
      { name: "Security Groups", level: 88 },
      { name: "Encryption", level: 85 },
      { name: "Secrets Management", level: 84 },
      { name: "Cost & Performance Optimization", level: 86 },
    ],
  },
  {
    id: "ai",
    label: "AI-Assisted Engineering",
    skills: [
      { name: "Kiro", level: 85 },
      { name: "ChatGPT", level: 88 },
      { name: "Gemini", level: 82 },
      { name: "GitHub Copilot", level: 86 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Model Context Protocol (MCP)", level: 80 },
    ],
  },
];

export const experience = [
  {
    company: "Rackspace Technology",
    role: "Cloud Engineer I / Cloud Engineer II",
    focus: "AWS Infrastructure & DevOps",
    period: "Sep 2023 \u2014 Present",
    current: true,
    bullets: [
      "Design, review, and optimize enterprise AWS cloud infrastructure (EC2, VPC, IAM, Route53, Auto Scaling, Lambda, CloudWatch, RDS PostgreSQL, ECS, EKS) for cost, performance, and scalability.",
      "Execute production PostgreSQL database upgrade and migration strategies on Amazon RDS leveraging a blue/green deployment approach designed for zero application downtime.",
      "Manage multi-instance RDS clusters (writer instance and read replicas) providing high availability and read scalability for enterprise workloads.",
      "Implement Infrastructure as Code (IaC) utilizing Terraform and CloudFormation to establish repeatable, standardized infrastructure provisioning.",
      "Manage production Amazon EKS and Kubernetes environments, handling container orchestration, pod autoscaling, rolling deployments, and ingress traffic management.",
      "Maintain CI/CD workflows utilizing GitHub Actions, GitLab Pipeline and Jenkins to streamline continuous integration and delivery.",
      "Develop automation scripts using Linux, Bash, and Python to accelerate cloud operations, deployment activities, and infrastructure management.",
      "Configure Amazon CloudWatch metrics, alarms, and monitoring integrated with Amazon SNS to trigger instant email notifications upon operational threshold breaches.",
      "Implement security best practices for AWS, enforcing strict IAM policies, encryption standards, KMS keys, and secrets management.",
    ],
    highlights: [
      "Enterprise AWS",
      "Amazon EKS",
      "RDS PostgreSQL",
      "Blue/Green Deployments",
      "GitHub Actions",
      "Terraform",
      "CloudWatch",
      "Security",
    ],
  },
  {
    company: "Avancer Corporation",
    role: "Associate Cloud Engineer",
    focus: "Infrastructure Design & Automation",
    period: "Feb 2021 \u2014 Sep 2023",
    current: false,
    bullets: [
      "Containerized legacy applications using Docker and Docker Compose, establishing standardized and reliable runtime environments.",
      "Built and maintained CI/CD pipelines using Jenkins, AWS CodePipeline, and AWS CodeDeploy to automate Java application delivery to Amazon EC2.",
      "Developed Bash and Python automation scripts for Linux system configuration, Docker setup, and application deployment automation.",
      "Managed and monitored AWS core components (EC2, VPC, IAM, S3, RDS, CloudWatch, ALB/NLB), maintaining high availability and security compliance.",
      "Authored comprehensive technical documentation, including deployment runbooks, SOPs, and client configuration guides.",
    ],
    highlights: ["Docker", "Jenkins", "AWS CodePipeline", "Python", "Bash", "Technical Documentation"],
  },
];

export const projects = [
  {
    id: "rds-bluegreen-upgrade",
    title: "PostgreSQL Amazon RDS Blue/Green Production Upgrade",
    description:
      "Supported production database modernization on Amazon RDS using a blue/green deployment strategy for zero application downtime. Managed clusters consisting of writer and read-replica instances, coordinating cutovers and post-validation checks.",
    tags: ["Amazon RDS", "PostgreSQL", "Blue/Green", "High Availability"],
    github: "#",
  },
  {
    id: "eks-orchestration-platform",
    title: "Enterprise Kubernetes & EKS Orchestration Platform",
    description:
      "Designed containerized application environments utilizing Docker and Amazon EKS, configuring rolling updates, pod autoscaling, ingress controllers, and Bash-automated workflows.",
    tags: ["Amazon EKS", "Kubernetes", "Docker", "Helm", "Autoscaling"],
    github: "#",
  },
  {
    id: "terraform-iac-automation",
    title: "Terraform & CloudFormation IaC Automation",
    description:
      "Engineered modular infrastructure code using Terraform and CloudFormation to standardize provisioning across multiple AWS accounts, improving cost efficiency and resource governance.",
    tags: ["Terraform", "CloudFormation", "AWS", "IaC", "Multi-Account"],
    github: "#",
  },
  {
    id: "cloudwatch-alerting-platform",
    title: "CloudWatch Monitoring & Automated Alerting Platform",
    description:
      "Configured Amazon CloudWatch metrics and custom alarms integrated with Amazon SNS for automated email notifications during incident triggers, combined with AWS Systems Manager (SSM) documents to automate fleet-wide CloudWatch Agent updates on EC2.",
    tags: ["CloudWatch", "SNS", "Systems Manager", "Automation", "Monitoring"],
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
  "EC2",
  "EKS",
  "ECS",
  "RDS PostgreSQL",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CloudFormation",
  "GitHub Actions",
  "AWS CodePipeline",
  "Jenkins",
  "Python",
  "Bash",
  "Linux",
  "CloudWatch",
  "Git",
  "Helm",
];

export const timeline = [
  { year: "2021", label: "Started in Cloud Engineering", detail: "Joined Avancer Corporation as Associate Cloud Engineer" },
  { year: "2023", label: "Became Cloud Engineer at Rackspace", detail: "Joined Rackspace Technology, managing enterprise AWS infrastructure" },
  { year: "Now", label: "Engineering at Scale", detail: "Designing EKS platforms, RDS upgrades, CI/CD pipelines and automation for production systems" },
];
