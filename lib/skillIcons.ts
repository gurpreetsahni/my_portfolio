/**
 * Skill icons using Iconify API.
 * URL format: https://api.iconify.design/{prefix}/{name}.svg
 * Browse icons at: https://icon-sets.iconify.design/
 *
 * Using icon sets: logos, devicon, skill-icons, vscode-icons, simple-icons
 */

const API = "https://api.iconify.design";

export const skillIconMap: Record<string, string> = {
  // ─── Cloud Platforms ───────────────────────────────────────────────────────
  "AWS Architecture": `${API}/skill-icons/aws-light.svg`,
  "AWS": `${API}/skill-icons/aws-light.svg`,
  "EC2": `${API}/logos/aws-ec2.svg`,
  "S3": `${API}/logos/aws-s3.svg`,
  "IAM": `${API}/logos/aws-iam.svg`,
  "VPC": `${API}/logos/aws-vpc.svg`,
  "Route53": `${API}/logos/aws-route53.svg`,
  "Load Balancing": `${API}/logos/aws-elastic-load-balancing.svg`,
  "CloudWatch": `${API}/logos/aws-cloudwatch.svg`,
  "CloudFront": `${API}/logos/aws-cloudfront.svg`,
  "Lambda": `${API}/logos/aws-lambda.svg`,
  "RDS": `${API}/logos/aws-rds.svg`,
  "API Gateway": `${API}/logos/aws-api-gateway.svg`,
  "Azure (AZ-900)": `${API}/logos/microsoft-azure.svg`,
  "Azure": `${API}/logos/microsoft-azure.svg`,
  "GCP Infrastructure": `${API}/logos/google-cloud.svg`,
  "GCP": `${API}/logos/google-cloud.svg`,

  // ─── Containers & Orchestration ────────────────────────────────────────────
  "Docker": `${API}/logos/docker-icon.svg`,
  "Kubernetes": `${API}/logos/kubernetes.svg`,
  "EKS": `${API}/logos/aws-eks.svg`,
  "Helm": `${API}/devicon/helm.svg`,
  "Multi-stage Builds": `${API}/logos/docker-icon.svg`,
  "Pod Autoscaling": `${API}/logos/kubernetes.svg`,

  // ─── Infrastructure as Code ────────────────────────────────────────────────
  "Terraform": `${API}/logos/terraform-icon.svg`,
  "CloudFormation": `${API}/logos/aws-cloudformation.svg`,

  // ─── Automation & Scripting ────────────────────────────────────────────────
  "Python": `${API}/logos/python.svg`,
  "Bash": `${API}/devicon/bash.svg`,
  "Linux": `${API}/logos/linux-tux.svg`,
  "Git": `${API}/logos/git-icon.svg`,
  "Systems Monitoring": `${API}/logos/grafana.svg`,
  "Automation": `${API}/logos/ansible.svg`,

  // ─── CI/CD & DevOps ────────────────────────────────────────────────────────
  "GitLab": `${API}/skill-icons/gitlab-light.svg`,
  "Jenkins": `${API}/logos/jenkins.svg`,
  "Blue/Green Deployments": `${API}/logos/aws-codedeploy.svg`,
  "CI/CD Pipelines": `${API}/skill-icons/gitlab-light.svg`,

  // ─── Security & Networking ─────────────────────────────────────────────────
  "Network Security": `${API}/logos/aws-shield.svg`,
  "Security Groups": `${API}/logos/aws-vpc.svg`,
  "SSL/TLS": `${API}/logos/letsencrypt.svg`,
  "Compliance Verification": `${API}/mdi/shield-check.svg?color=%2363e6e2`,
  "Disaster Recovery Planning": `${API}/mdi/backup-restore.svg?color=%234c8dff`,
  "DNS": `${API}/logos/aws-route53.svg`,
  "VPN": `${API}/mdi/vpn.svg?color=%237c5cff`,

  // ─── Monitoring & Observability ────────────────────────────────────────────
  "CloudWatch Logs": `${API}/logos/aws-cloudwatch.svg`,
  "Architecture Documentation": `${API}/mdi/file-document-edit.svg?color=%234c8dff`,
  "Cost Optimization": `${API}/mdi/currency-usd.svg?color=%2363e6e2`,
};

export function getSkillIcon(skillName: string): string | undefined {
  return skillIconMap[skillName];
}
