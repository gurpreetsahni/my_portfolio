"use client";

import { Plus, Trash2 } from "lucide-react";
import AdminFormWrapper from "./AdminFormWrapper";

interface ExperienceItem {
  company: string;
  role: string;
  focus: string;
  period: string;
  current: boolean;
  bullets: string[];
  highlights: string[];
}

const inputClass = "w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/30 transition-all";
const labelClass = "block text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-2";

export default function ExperienceForm({ initialData }: { initialData: ExperienceItem[] }) {
  return (
    <AdminFormWrapper
      title="Experience"
      description="Manage your work history and roles"
      section="experience"
      initialData={initialData}
    >
      {({ data, setData }) => (
        <div className="space-y-4">
          {data.map((exp: ExperienceItem, index: number) => (
            <div key={index} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 md:p-6">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="font-semibold text-white text-[15px]">
                    {exp.company || "New Experience"}
                  </h3>
                  {exp.role && <p className="text-[13px] text-gray-500 mt-0.5">{exp.role}</p>}
                </div>
                <button
                  onClick={() => {
                    const updated = [...data];
                    updated.splice(index, 1);
                    setData(updated);
                  }}
                  className="p-2 text-gray-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                  aria-label="Remove experience"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Company</label>
                  <input value={exp.company} onChange={(e) => { const u = [...data]; u[index] = { ...exp, company: e.target.value }; setData(u); }} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Role</label>
                  <input value={exp.role} onChange={(e) => { const u = [...data]; u[index] = { ...exp, role: e.target.value }; setData(u); }} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Focus</label>
                  <input value={exp.focus} onChange={(e) => { const u = [...data]; u[index] = { ...exp, focus: e.target.value }; setData(u); }} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Period</label>
                  <input value={exp.period} onChange={(e) => { const u = [...data]; u[index] = { ...exp, period: e.target.value }; setData(u); }} className={inputClass} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) => { const u = [...data]; u[index] = { ...exp, current: e.target.checked }; setData(u); }}
                  className="w-4 h-4 rounded border-white/10 bg-white/[0.03] text-violet-500 focus:ring-violet-500/30"
                />
                <label className="text-[13px] text-gray-400">Current position</label>
              </div>

              <div className="mt-4">
                <label className={labelClass}>Bullets (one per line)</label>
                <textarea
                  value={exp.bullets.join("\n")}
                  onChange={(e) => { const u = [...data]; u[index] = { ...exp, bullets: e.target.value.split("\n").filter(Boolean) }; setData(u); }}
                  rows={5}
                  className={inputClass + " resize-none"}
                />
              </div>

              <div className="mt-4">
                <label className={labelClass}>Highlights (comma-separated)</label>
                <input
                  value={exp.highlights.join(", ")}
                  onChange={(e) => { const u = [...data]; u[index] = { ...exp, highlights: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) }; setData(u); }}
                  className={inputClass}
                />
              </div>
            </div>
          ))}

          <button
            onClick={() => {
              setData([...data, { company: "", role: "", focus: "", period: "", current: false, bullets: [], highlights: [] }]);
            }}
            className="w-full py-4 border border-dashed border-white/[0.1] rounded-2xl text-gray-500 hover:text-violet-300 hover:border-violet-500/30 hover:bg-violet-500/[0.02] transition-all duration-200 flex items-center justify-center gap-2 text-[14px] font-medium"
          >
            <Plus size={16} />
            Add Experience
          </button>
        </div>
      )}
    </AdminFormWrapper>
  );
}
