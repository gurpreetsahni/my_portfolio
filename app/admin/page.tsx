import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { readDb } from "@/lib/db";
import Link from "next/link";
import {
  User,
  Briefcase,
  Code,
  FolderOpen,
  Award,
  BarChart3,
  Clock,
  Layers,
  Upload,
  ArrowRight,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const data = await readDb();

  const sections = [
    { label: "Profile", href: "/admin/profile", count: null, desc: "Name, title, about, education", icon: User, color: "violet" },
    { label: "Experience", href: "/admin/experience", count: data.experience.length, desc: "Work history & roles", icon: Briefcase, color: "blue" },
    { label: "Skills", href: "/admin/skills", count: data.skillCategories.reduce((a, c) => a + c.skills.length, 0), desc: "Skill categories & levels", icon: Code, color: "cyan" },
    { label: "Projects", href: "/admin/projects", count: data.projects.length, desc: "Portfolio projects", icon: FolderOpen, color: "emerald" },
    { label: "Certifications", href: "/admin/certifications", count: data.certifications.length, desc: "Certificates & badges", icon: Award, color: "amber" },
    { label: "Stats", href: "/admin/stats", count: data.stats.length, desc: "Numeric highlights", icon: BarChart3, color: "rose" },
    { label: "Timeline", href: "/admin/timeline", count: data.timeline.length, desc: "Career milestones", icon: Clock, color: "indigo" },
    { label: "Tech Stack", href: "/admin/techstack", count: data.techStack.length, desc: "Technologies list", icon: Layers, color: "teal" },
    { label: "Uploads", href: "/admin/uploads", count: null, desc: "Photo & resume files", icon: Upload, color: "purple" },
  ];

  const colorMap: Record<string, string> = {
    violet: "from-violet-500/20 to-violet-600/5 border-violet-500/10 group-hover:border-violet-500/30",
    blue: "from-blue-500/20 to-blue-600/5 border-blue-500/10 group-hover:border-blue-500/30",
    cyan: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/10 group-hover:border-cyan-500/30",
    emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/10 group-hover:border-emerald-500/30",
    amber: "from-amber-500/20 to-amber-600/5 border-amber-500/10 group-hover:border-amber-500/30",
    rose: "from-rose-500/20 to-rose-600/5 border-rose-500/10 group-hover:border-rose-500/30",
    indigo: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/10 group-hover:border-indigo-500/30",
    teal: "from-teal-500/20 to-teal-600/5 border-teal-500/10 group-hover:border-teal-500/30",
    purple: "from-purple-500/20 to-purple-600/5 border-purple-500/10 group-hover:border-purple-500/30",
  };

  const iconColorMap: Record<string, string> = {
    violet: "text-violet-400",
    blue: "text-blue-400",
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    rose: "text-rose-400",
    indigo: "text-indigo-400",
    teal: "text-teal-400",
    purple: "text-purple-400",
  };

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-medium text-emerald-400 uppercase tracking-widest">Admin Panel</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Welcome back, <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">{data.profile.name.split(" ")[0]}</span>
        </h1>
        <p className="text-gray-500 mt-2 text-[15px]">
          Manage your portfolio content. Changes reflect on the live site instantly.
        </p>
      </div>

      {/* Section Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.href}
              href={s.href}
              className="group relative overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${colorMap[s.color]} border rounded-2xl p-5 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-black/20`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center ${iconColorMap[s.color]}`}>
                    <Icon size={18} />
                  </div>
                  {s.count !== null && (
                    <span className="text-[11px] font-mono text-gray-500 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded-md">
                      {s.count}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-white text-[15px] mb-1 group-hover:text-white/90 transition">
                  {s.label}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[12px] font-medium text-gray-600 group-hover:text-gray-300 transition">
                  Edit section
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
