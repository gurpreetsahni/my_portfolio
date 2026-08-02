"use client";

import { useState } from "react";
import { Upload, Check, AlertCircle, Image as ImageIcon, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function UploadsForm() {
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

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Uploads</h1>
        <p className="text-gray-500 text-[14px] mt-1.5">
          Update your profile photo and resume file
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <UploadCard
          title="Profile Photo"
          description="PNG, JPEG, or WebP format"
          type="photo"
          accept="image/png,image/jpeg,image/webp"
          currentFile="/photo.png"
          icon={<ImageIcon size={20} className="text-violet-400" />}
          isImage
        />
        <UploadCard
          title="Resume"
          description="PDF format"
          type="resume"
          accept="application/pdf"
          currentFile="/resume.pdf"
          icon={<FileText size={20} className="text-blue-400" />}
          isImage={false}
        />
      </div>
    </div>
  );
}

function UploadCard({
  title,
  description,
  type,
  accept,
  currentFile,
  icon,
  isImage,
}: {
  title: string;
  description: string;
  type: string;
  accept: string;
  currentFile: string;
  icon: React.ReactNode;
  isImage: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (isImage) {
      setPreview(URL.createObjectURL(file));
    }

    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Upload failed");
      }

      setMessage({ type: "success", text: `${title} updated!` });
      setTimeout(() => setMessage(null), 4000);
    } catch (error: any) {
      setMessage({ type: "error", text: error.message || "Upload failed" });
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-white text-[15px]">{title}</h3>
          <p className="text-[12px] text-gray-500">{description}</p>
        </div>
      </div>

      {isImage && (
        <div className="mb-5 flex justify-center">
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
            <Image
              src={preview || `${currentFile}?t=${Date.now()}`}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <label className="flex flex-col items-center justify-center w-full py-8 border border-dashed border-white/[0.1] rounded-xl cursor-pointer hover:border-violet-500/40 hover:bg-violet-500/[0.02] transition-all duration-200">
        <Upload size={20} className="text-gray-600 mb-2" />
        <span className="text-[13px] text-gray-500 font-medium">
          {uploading ? "Uploading..." : "Click to upload"}
        </span>
        <span className="text-[11px] text-gray-700 mt-1">or drag and drop</span>
        <input
          type="file"
          accept={accept}
          onChange={handleUpload}
          disabled={uploading}
          className="hidden"
        />
      </label>

      {message && (
        <div
          className={`mt-4 px-3 py-2.5 rounded-xl text-[13px] font-medium flex items-center gap-2 ${
            message.type === "success"
              ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
              : "bg-red-500/10 border border-red-500/20 text-red-400"
          }`}
        >
          {message.type === "success" ? <Check size={14} /> : <AlertCircle size={14} />}
          {message.text}
        </div>
      )}
    </div>
  );
}
