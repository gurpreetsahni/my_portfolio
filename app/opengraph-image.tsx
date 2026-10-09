import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// Edge runtime: avoids the Windows/Node font-loading bug in @vercel/og,
// and works great on Vercel. We fetch the photo over HTTP (edge has no fs).
export const runtime = "edge";

// Image metadata
export const alt = `${profile.name} — ${profile.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image(_: unknown, { request }: { request?: Request } = {}) {
  // Resolve the site origin so the photo URL is absolute (required by the renderer).
  const base =
    request?.url
      ? new URL(request.url).origin
      : process.env.NEXT_PUBLIC_SITE_URL ||
        "https://gurpreet-singh-sahni-portfolio.vercel.app";

  // Fetch the profile photo and inline it as a data URI.
  let photoDataUri: string | null = null;
  try {
    const res = await fetch(new URL("/photo.png", base));
    if (res.ok) {
      const buf = await res.arrayBuffer();
      const base64 = btoa(
        new Uint8Array(buf).reduce((acc, byte) => acc + String.fromCharCode(byte), "")
      );
      photoDataUri = `data:image/png;base64,${base64}`;
    }
  } catch {
    photoDataUri = null; // fall back to text-only card
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(60% 60% at 15% 20%, rgba(124,92,255,0.45) 0%, rgba(124,92,255,0) 70%), radial-gradient(50% 50% at 90% 25%, rgba(76,141,255,0.40) 0%, rgba(76,141,255,0) 70%), radial-gradient(45% 45% at 55% 100%, rgba(99,230,226,0.25) 0%, rgba(99,230,226,0) 70%)",
          padding: "70px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: text block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: photoDataUri ? "650px" : "1040px",
          }}
        >
          {/* Toptal credential pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: "9999px",
              border: "1px solid rgba(76,141,255,0.5)",
              backgroundColor: "rgba(76,141,255,0.12)",
              fontSize: "22px",
              color: "#63e6e2",
              marginBottom: "32px",
            }}
          >
            Top 3% Talent · Vetted by Toptal
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              fontSize: "76px",
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
              fontSize: "38px",
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
              fontSize: "24px",
              color: "#9a9aa5",
              marginTop: "16px",
            }}
          >
            {profile.subtitle}
          </div>
        </div>

        {/* Right: circular photo */}
        {photoDataUri ? (
          <div
            style={{
              display: "flex",
              width: "340px",
              height: "340px",
              borderRadius: "9999px",
              flexShrink: 0,
              background: "linear-gradient(135deg, #7c5cff, #4c8dff)",
              padding: "6px",
              boxShadow: "0 0 60px rgba(124,92,255,0.5)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoDataUri}
              alt={profile.name}
              width={328}
              height={328}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "9999px",
                objectFit: "cover",
              }}
            />
          </div>
        ) : null}
      </div>
    ),
    {
      ...size,
    }
  );
}
