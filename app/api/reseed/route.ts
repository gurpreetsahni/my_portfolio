import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { writeDb } from "@/lib/db";
import * as staticData from "@/lib/data";

// POST - reseed MongoDB with latest static data (protected)
export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const freshData = {
      profile: staticData.profile,
      stats: staticData.stats,
      skillCategories: staticData.skillCategories,
      experience: staticData.experience,
      projects: staticData.projects,
      certifications: staticData.certifications,
      techStack: staticData.techStack,
      timeline: staticData.timeline,
    };

    await writeDb(freshData);

    return NextResponse.json({
      success: true,
      message: "Portfolio data reseeded from latest data.ts",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to reseed data" },
      { status: 500 }
    );
  }
}
