"use client";

import { Plus, Trash2 } from "lucide-react";
import AdminFormWrapper from "./AdminFormWrapper";

interface Certification {
  name: string;
  issuer: string;
}

const inputClass = "w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/30 transition-all";

export default function CertificationsForm({ initialData }: { initialData: Certification[] }) {
  return (
    <AdminFormWrapper
      title="Certifications"
      description="Manage your certificates and badges"
      section="certifications"
      initialData={initialData}
    >
      {({ data, setData }) => (
        <div className="space-y-3">
          {data.map((cert: Certification, index: number) => (
            <div key={index} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 min-w-0">
                <input
                  value={cert.name}
                  onChange={(e) => { const u = [...data]; u[index] = { ...cert, name: e.target.value }; setData(u); }}
                  placeholder="Certification name"
                  className={inputClass}
                />
                <input
                  value={cert.issuer}
                  onChange={(e) => { const u = [...data]; u[index] = { ...cert, issuer: e.target.value }; setData(u); }}
                  placeholder="Issuer"
                  className={inputClass}
                />
              </div>
              <button
                onClick={() => { const u = [...data]; u.splice(index, 1); setData(u); }}
                className="p-2 text-gray-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition shrink-0"
                aria-label="Remove certification"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}

          <button
            onClick={() => setData([...data, { name: "", issuer: "" }])}
            className="w-full py-4 border border-dashed border-white/[0.1] rounded-2xl text-gray-500 hover:text-violet-300 hover:border-violet-500/30 hover:bg-violet-500/[0.02] transition-all duration-200 flex items-center justify-center gap-2 text-[14px] font-medium"
          >
            <Plus size={16} />
            Add Certification
          </button>
        </div>
      )}
    </AdminFormWrapper>
  );
}
