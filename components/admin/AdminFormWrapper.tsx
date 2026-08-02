"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Check, AlertCircle } from "lucide-react";

interface AdminFormWrapperProps {
  title: string;
  description: string;
  section: string;
  initialData: unknown;
  children: (props: {
    data: any;
    setData: (d: any) => void;
    saving: boolean;
  }) => React.ReactNode;
}

export default function AdminFormWrapper({
  title,
  description,
  section,
  initialData,
  children,
}: AdminFormWrapperProps) {
  const [data, setData] = useState(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/portfolio", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section, data }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to save");
      }

      setMessage({ type: "success", text: "Changes saved successfully!" });
      setTimeout(() => setMessage(null), 3000);
    } catch (error: any) {
      setMessage({ type: "error", text: error.message || "Failed to save" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl">
      {/* Back Button */}
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-500 hover:text-gray-200 transition-colors mb-6 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h1>
          <p className="text-gray-500 text-[14px] mt-1.5">{description}</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-[13px] font-semibold rounded-xl hover:from-violet-500 hover:to-blue-500 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
        >
          <Save size={14} />
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {/* Status Message */}
      {message && (
        <div
          className={`mb-6 px-4 py-3 rounded-xl text-[13px] font-medium flex items-center gap-2.5 ${
            message.type === "success"
              ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
              : "bg-red-500/10 border border-red-500/20 text-red-400"
          }`}
        >
          {message.type === "success" ? <Check size={15} /> : <AlertCircle size={15} />}
          {message.text}
        </div>
      )}

      {/* Form Content */}
      {children({ data, setData, saving })}
    </div>
  );
}
