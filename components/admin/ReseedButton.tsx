"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";

export default function ReseedButton() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleReseed = async () => {
    if (!confirm("This will overwrite all portfolio data in the database with the latest code defaults. Continue?")) {
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/reseed", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Reseed failed");
      }

      setResult({ type: "success", text: "Portfolio data updated successfully! Refresh to see changes." });
    } catch (error: any) {
      setResult({ type: "error", text: error.message || "Failed to reseed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 p-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[14px] font-semibold text-white">Sync Portfolio Data</h3>
          <p className="text-[12px] text-gray-500 mt-0.5">
            Overwrite database with latest code defaults (updated resume data)
          </p>
        </div>
        <button
          onClick={handleReseed}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          {loading ? "Syncing..." : "Sync Now"}
        </button>
      </div>
      {result && (
        <p className={`mt-3 text-[12px] font-medium ${result.type === "success" ? "text-emerald-400" : "text-red-400"}`}>
          {result.text}
        </p>
      )}
    </div>
  );
}
