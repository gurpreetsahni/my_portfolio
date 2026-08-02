"use client";

import AdminFormWrapper from "./AdminFormWrapper";

interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  headline: string;
  roles: string[];
  about: string;
  philosophy: string;
  yearsExperience: number;
  education: {
    degree: string;
    school: string;
    year: string;
    detail: string;
  };
}

const inputClass = "w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/30 transition-all";
const labelClass = "block text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-2";
const cardClass = "bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6";

export default function ProfileForm({ initialData }: { initialData: ProfileData }) {
  return (
    <AdminFormWrapper
      title="Profile"
      description="Update your personal details, bio, and education"
      section="profile"
      initialData={initialData}
    >
      {({ data, setData }) => (
        <div className="space-y-5">
          {/* Basic Info */}
          <div className={cardClass}>
            <h3 className="font-semibold text-white text-[15px] mb-5">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full Name" value={data.name} onChange={(v) => setData({ ...data, name: v })} />
              <Field label="Title" value={data.title} onChange={(v) => setData({ ...data, title: v })} />
              <Field label="Subtitle" value={data.subtitle} onChange={(v) => setData({ ...data, subtitle: v })} className="md:col-span-2" />
              <Field label="Location" value={data.location} onChange={(v) => setData({ ...data, location: v })} />
              <Field label="Phone" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} />
              <Field label="Email" value={data.email} onChange={(v) => setData({ ...data, email: v })} />
              <Field label="Years Experience" value={String(data.yearsExperience)} onChange={(v) => setData({ ...data, yearsExperience: parseInt(v) || 0 })} type="number" />
              <Field label="LinkedIn" value={data.linkedin} onChange={(v) => setData({ ...data, linkedin: v })} className="md:col-span-2" />
              <Field label="GitHub" value={data.github} onChange={(v) => setData({ ...data, github: v })} className="md:col-span-2" />
            </div>
          </div>

          {/* Headline & Roles */}
          <div className={cardClass}>
            <h3 className="font-semibold text-white text-[15px] mb-5">Headline & Roles</h3>
            <Field label="Headline" value={data.headline} onChange={(v) => setData({ ...data, headline: v })} />
            <div className="mt-4">
              <label className={labelClass}>
                Roles (one per line - typing animation)
              </label>
              <textarea
                value={data.roles.join("\n")}
                onChange={(e) => setData({ ...data, roles: e.target.value.split("\n").filter(Boolean) })}
                rows={4}
                className={inputClass + " resize-none"}
              />
            </div>
          </div>

          {/* About & Philosophy */}
          <div className={cardClass}>
            <h3 className="font-semibold text-white text-[15px] mb-5">About & Philosophy</h3>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>About</label>
                <textarea
                  value={data.about}
                  onChange={(e) => setData({ ...data, about: e.target.value })}
                  rows={5}
                  className={inputClass + " resize-none"}
                />
              </div>
              <div>
                <label className={labelClass}>Philosophy</label>
                <textarea
                  value={data.philosophy}
                  onChange={(e) => setData({ ...data, philosophy: e.target.value })}
                  rows={3}
                  className={inputClass + " resize-none"}
                />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className={cardClass}>
            <h3 className="font-semibold text-white text-[15px] mb-5">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Degree" value={data.education.degree} onChange={(v) => setData({ ...data, education: { ...data.education, degree: v } })} />
              <Field label="School" value={data.education.school} onChange={(v) => setData({ ...data, education: { ...data.education, school: v } })} />
              <Field label="Year" value={data.education.year} onChange={(v) => setData({ ...data, education: { ...data.education, year: v } })} />
              <Field label="Detail (e.g. CGPA)" value={data.education.detail} onChange={(v) => setData({ ...data, education: { ...data.education, detail: v } })} />
            </div>
          </div>
        </div>
      )}
    </AdminFormWrapper>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className={labelClass}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </div>
  );
}
