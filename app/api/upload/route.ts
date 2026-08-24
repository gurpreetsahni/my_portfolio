import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import fs from "fs";
import path from "path";

// Map MIME types to file extensions
const mimeToExt: Record<string, string> = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/webp": ".webp",
  "application/pdf": ".pdf",
};

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const type = formData.get("type") as string; // "photo" or "resume"

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const allowedTypes: Record<string, string[]> = {
      photo: ["image/png", "image/jpeg", "image/webp"],
      resume: ["application/pdf"],
    };

    if (!allowedTypes[type]?.includes(file.type)) {
      return NextResponse.json(
        { error: `Invalid file type for ${type}` },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = mimeToExt[file.type] || ".bin";
    const filename = type === "photo" ? `photo${ext}` : "resume.pdf";
    const publicDir = path.join(process.cwd(), "public");
    const filePath = path.join(publicDir, filename);

    // Remove any existing files for this type before writing the new one
    // This handles the case where photo extension changes (e.g., photo.png -> photo.jpg)
    if (type === "photo") {
      const photoExtensions = [".png", ".jpg", ".jpeg", ".webp"];
      for (const oldExt of photoExtensions) {
        const oldPath = path.join(publicDir, `photo${oldExt}`);
        if (fs.existsSync(oldPath) && oldPath !== filePath) {
          fs.unlinkSync(oldPath);
        }
      }
    }

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      path: `/${filename}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
