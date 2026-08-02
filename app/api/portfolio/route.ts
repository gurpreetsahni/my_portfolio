import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { readDb, updateSection, PortfolioData } from "@/lib/db";

// GET - read portfolio data (public)
export async function GET() {
  try {
    const data = await readDb();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read portfolio data" },
      { status: 500 }
    );
  }
}

// PUT - update a section (protected)
export async function PUT(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { section, data } = body;

    const validSections: (keyof PortfolioData)[] = [
      "profile",
      "stats",
      "skillCategories",
      "experience",
      "projects",
      "certifications",
      "techStack",
      "timeline",
    ];

    if (!validSections.includes(section)) {
      return NextResponse.json(
        { error: `Invalid section: ${section}` },
        { status: 400 }
      );
    }

    const updated = await updateSection(section, data);
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update portfolio data" },
      { status: 500 }
    );
  }
}
