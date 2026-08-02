"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
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
  LogOut,
  LayoutDashboard,
  ExternalLink,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/profile", label: "Profile", icon: User },
  { href: "/admin/experience", label: "Experience", icon: Briefcase },
  { href: "/admin/skills", label: "Skills", icon: Code },
  { href: "/admin/projects", label: "Projects", icon: FolderOpen },
  { href: "/admin/certifications", label: "Certifications", icon: Award },
  { href: "/admin/stats", label: "Stats", icon: BarChart3 },
  { href: "/admin/timeline", label: "Timeline", icon: Clock },
  { href: "/admin/techstack", label: "Tech Stack", icon: Layers },
  { href: "/admin/uploads", label: "Uploads", icon: Upload },
];

export default function AdminNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-[#0f0f14] rounded-xl border border-white/[0.06] shadow-lg backdrop-blur-sm"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={18} className="text-gray-300" /> : <Menu size={18} className="text-gray-300" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0a0a0f]/95 backdrop-blur-xl border-r border-white/[0.06] z-40 transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo / Brand */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white tracking-tight">Portfolio Admin</h2>
              <p className="text-[11px] text-gray-500">Content Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-2 space-y-0.5 overflow-y-auto max-h-[calc(100vh-200px)]">
          <p className="px-3 py-2 text-[10px] font-semibold text-gray-600 uppercase tracking-wider">Sections</p>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-violet-500/10 text-violet-300 shadow-sm"
                    : "text-gray-500 hover:text-gray-200 hover:bg-white/[0.03]"
                }`}
              >
                <Icon size={16} className={isActive ? "text-violet-400" : ""} />
                {item.label}
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-white/[0.04]">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium text-gray-500 hover:text-emerald-300 hover:bg-emerald-500/5 transition-all duration-150 w-full"
          >
            <ExternalLink size={16} />
            View Live Site
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium text-gray-500 hover:text-red-300 hover:bg-red-500/5 transition-all duration-150 w-full mt-0.5"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
