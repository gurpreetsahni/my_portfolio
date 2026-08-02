"use client";

import { Plus, Trash2 } from "lucide-react";
import AdminFormWrapper from "./AdminFormWrapper";

interface TimelineItem {
  year: string;
  label: string;
  detail: string;
}

const inputClass = "w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/30 transition-all";

export default function TimelineForm({ initialData }: { initialData: TimelineItem[] }) {
  return (
    <AdminFormWrapper
      title="Timeline"
      description="Manage your career timeline milestones"
      section="timeline"
      initialData={initialData}
    >
      {({ data, setData }) => (
        <div className="space-y-3">
          {data.map((item: TimelineItem, index: number) => (
            <div key={index} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-start gap-3">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 min-w-0">
                <input
                  value={item.year}
                  onChange={(e) => { const u = [...data]; u[index] = { ...item, year: e.target.value }; setData(u); }}
                  placeholder="Year"
                  className={inputClass}
                />
                <input
                  value={item.label}
                  onChange={(e) => { const u = [...data]; u[index] = { ...item, label: e.target.value }; setData(u); }}
                  placeholder="Label"
                  className={inputClass}
                />
                <input
                  value={item.detail}
                  onChange={(e) => { const u = [...data]; u[index] = { ...item, detail: e.target.value }; setData(u); }}
                  placeholder="Detail"
                  className={inputClass}
                />
              </div>
              <button
                onClick={() => { const u = [...data]; u.splice(index, 1); setData(u); }}
                className="p-2 text-gray-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition shrink-0 mt-0.5"
                aria-label="Remove timeline item"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}

          <button
            onClick={() => setData([...data, { year: "", label: "", detail: "" }])}
            className="w-full py-4 border border-dashed border-white/[0.1] rounded-2xl text-gray-500 hover:text-violet-300 hover:border-violet-500/30 hover:bg-violet-500/[0.02] transition-all duration-200 flex items-center justify-center gap-2 text-[14px] font-medium"
          >
            <Plus size={16} />
            Add Timeline Entry
          </button>
        </div>
      )}
    </AdminFormWrapper>
  );
}
