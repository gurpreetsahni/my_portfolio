"use client";

import { Plus, Trash2, X } from "lucide-react";
import AdminFormWrapper from "./AdminFormWrapper";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

const inputClass = "w-full px-3.5 py-2 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/30 transition-all";

export default function SkillsForm({ initialData }: { initialData: SkillCategory[] }) {
  return (
    <AdminFormWrapper
      title="Skills"
      description="Manage skill categories and proficiency levels"
      section="skillCategories"
      initialData={initialData}
    >
      {({ data, setData }) => (
        <div className="space-y-4">
          {data.map((cat: SkillCategory, catIdx: number) => (
            <div key={catIdx} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 md:p-6">
              <div className="flex items-start justify-between gap-2 mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 min-w-0">
                  <input
                    value={cat.label}
                    onChange={(e) => { const u = [...data]; u[catIdx] = { ...cat, label: e.target.value }; setData(u); }}
                    placeholder="Category name"
                    className={inputClass}
                  />
                  <input
                    value={cat.id}
                    onChange={(e) => { const u = [...data]; u[catIdx] = { ...cat, id: e.target.value }; setData(u); }}
                    placeholder="Category ID (e.g. cloud)"
                    className={inputClass}
                  />
                </div>
                <button
                  onClick={() => { const u = [...data]; u.splice(catIdx, 1); setData(u); }}
                  className="p-2 text-gray-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition shrink-0"
                  aria-label="Remove category"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 bg-white/[0.01] rounded-lg p-2 sm:p-0 sm:bg-transparent">
                    {/* Skill name */}
                    <input
                      value={skill.name}
                      onChange={(e) => {
                        const u = [...data]; const skills = [...cat.skills];
                        skills[skillIdx] = { ...skill, name: e.target.value };
                        u[catIdx] = { ...cat, skills }; setData(u);
                      }}
                      placeholder="Skill name"
                      className="w-full sm:flex-1 px-3.5 py-2 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all min-w-0"
                    />
                    {/* Level slider + number + delete */}
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => {
                          const u = [...data]; const skills = [...cat.skills];
                          skills[skillIdx] = { ...skill, level: parseInt(e.target.value) };
                          u[catIdx] = { ...cat, skills }; setData(u);
                        }}
                        className="flex-1 sm:w-24 accent-violet-500 h-1.5"
                      />
                      <span className="text-[12px] font-mono text-gray-400 w-7 text-right shrink-0">
                        {skill.level}
                      </span>
                      <button
                        onClick={() => {
                          const u = [...data]; const skills = [...cat.skills];
                          skills.splice(skillIdx, 1); u[catIdx] = { ...cat, skills }; setData(u);
                        }}
                        className="p-1.5 text-gray-700 hover:text-red-400 transition shrink-0"
                        aria-label="Remove skill"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => { const u = [...data]; u[catIdx] = { ...cat, skills: [...cat.skills, { name: "", level: 75 }] }; setData(u); }}
                className="mt-4 text-[13px] font-medium text-gray-500 hover:text-violet-300 flex items-center gap-1.5 transition"
              >
                <Plus size={14} />
                Add skill
              </button>
            </div>
          ))}

          <button
            onClick={() => setData([...data, { id: "", label: "", skills: [] }])}
            className="w-full py-4 border border-dashed border-white/[0.1] rounded-2xl text-gray-500 hover:text-violet-300 hover:border-violet-500/30 hover:bg-violet-500/[0.02] transition-all duration-200 flex items-center justify-center gap-2 text-[14px] font-medium"
          >
            <Plus size={16} />
            Add Category
          </button>
        </div>
      )}
    </AdminFormWrapper>
  );
}
