"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import AdminFormWrapper from "./AdminFormWrapper";

const inputClass = "w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/30 transition-all";

export default function TechStackForm({ initialData }: { initialData: string[] }) {
  return (
    <AdminFormWrapper
      title="Tech Stack"
      description="Manage the technologies displayed in the marquee"
      section="techStack"
      initialData={initialData}
    >
      {({ data, setData }) => (
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
          <div className="flex flex-wrap gap-2 mb-5">
            {data.map((tech: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1.5 group"
              >
                <span className="text-[13px] font-medium text-gray-300">{tech}</span>
                <button
                  onClick={() => { const u = [...data]; u.splice(index, 1); setData(u); }}
                  className="text-gray-600 hover:text-red-400 transition"
                  aria-label={`Remove ${tech}`}
                >
                  <X size={13} />
                </button>
              </div>
            ))}
            {data.length === 0 && (
              <p className="text-[13px] text-gray-600">No technologies added yet</p>
            )}
          </div>

          <AddTechInput onAdd={(tech) => setData([...data, tech])} />
        </div>
      )}
    </AdminFormWrapper>
  );
}

function AddTechInput({ onAdd }: { onAdd: (tech: string) => void }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAdd())}
        placeholder="Add technology..."
        className={inputClass}
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-[13px] font-semibold transition flex items-center gap-1.5 shrink-0"
      >
        <Plus size={14} />
        Add
      </button>
    </div>
  );
}
