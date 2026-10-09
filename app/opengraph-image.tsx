import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = `${profile.name} — ${profile.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(60% 60% at 20% 20%, rgba(124,92,255,0.45) 0%, rgba(124,92,255,0) 70%), radial-gradient(50% 50% at 85% 30%, rgba(76,141,255,0.40) 0%, rgba(76,141,255,0) 70%), radial-gradient(45% 45% at 60% 95%, rgba(99,230,226,0.25) 0%, rgba(99,230,226,0) 70%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Toptal credential badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 20px",
            borderRadius: "9999px",
            border: "1px solid rgba(76,141,255,0.5)",
            backgroundColor: "rgba(76,141,255,0.12)",
            fontSize: "22px",
            color: "#63e6e2",
            marginBottom: "36px",
          }}
        >
          Top 3% Talent · Vetted by Toptal
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: "84px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9db7ff 60%, #7c5cff 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.name}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: "40px",
            fontWeight: 500,
            color: "#4c8dff",
            marginTop: "20px",
          }}
        >
          {profile.title}
        </div>

        {/* Subtitle / specialties */}
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            color: "#9a9aa5",
            marginTop: "16px",
            maxWidth: "900px",
          }}
        >
          {profile.subtitle}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
