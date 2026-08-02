"use client";

import { Plus, Trash2 } from "lucide-react";
import AdminFormWrapper from "./AdminFormWrapper";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
}

const inputClass = "w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/30 transition-all";
const labelClass = "block text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-2";

export default function ProjectsForm({ initialData }: { initialData: Project[] }) {
  return (
    <AdminFormWrapper
      title="Projects"
      description="Manage your portfolio projects"
      section="projects"
      initialData={initialData}
    >
      {({ data, setData }) => (
        <div className="space-y-4">
          {data.map((proj: Project, index: number) => (
            <div key={index} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <div className="flex items-start justify-between mb-5">
                <h3 className="font-semibold text-white text-[15px]">
                  {proj.title || "New Project"}
                </h3>
                <button
                  onClick={() => { const u = [...data]; u.splice(index, 1); setData(u); }}
                  className="p-2 text-gray-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                  aria-label="Remove project"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Title</label>
                  <input value={proj.title} onChange={(e) => { const u = [...data]; u[index] = { ...proj, title: e.target.value }; setData(u); }} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>ID (slug)</label>
                  <input value={proj.id} onChange={(e) => { const u = [...data]; u[index] = { ...proj, id: e.target.value }; setData(u); }} className={inputClass} />
                </div>
              </div>

              <div className="mt-4">
                <label className={labelClass}>Description</label>
                <textarea value={proj.description} onChange={(e) => { const u = [...data]; u[index] = { ...proj, description: e.target.value }; setData(u); }} rows={3} className={inputClass + " resize-none"} />
              </div>

              <div className="mt-4">
                <label className={labelClass}>Tags (comma-separated)</label>
                <input value={proj.tags.join(", ")} onChange={(e) => { const u = [...data]; u[index] = { ...proj, tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) }; setData(u); }} className={inputClass} />
              </div>

              <div className="mt-4">
                <label className={labelClass}>GitHub Link</label>
                <input value={proj.github} onChange={(e) => { const u = [...data]; u[index] = { ...proj, github: e.target.value }; setData(u); }} className={inputClass} />
              </div>
            </div>
          ))}

          <button
            onClick={() => setData([...data, { id: "", title: "", description: "", tags: [], github: "#" }])}
            className="w-full py-4 border border-dashed border-white/[0.1] rounded-2xl text-gray-500 hover:text-violet-300 hover:border-violet-500/30 hover:bg-violet-500/[0.02] transition-all duration-200 flex items-center justify-center gap-2 text-[14px] font-medium"
          >
            <Plus size={16} />
            Add Project
          </button>
        </div>
      )}
    </AdminFormWrapper>
  );
}
