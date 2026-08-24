"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { put, del, list } from "@vercel/blob";
import { updateSection, readDb } from "@/lib/db";

// Map MIME types to file extensions
const mimeToExt: Record<string, string> = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/webp": ".webp",
  "application/pdf": ".pdf",
};

export async function uploadFile(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return { error: "Unauthorized" };
  }

  try {
    const file = formData.get("file") as File;
    const type = formData.get("type") as string; // "photo" or "resume"

    if (!file || !(file instanceof File)) {
      return { error: "No file provided" };
    }

    if (!type || !["photo", "resume"].includes(type)) {
      return { error: "Invalid upload type" };
    }

    const allowedTypes: Record<string, string[]> = {
      photo: ["image/png", "image/jpeg", "image/webp"],
      resume: ["application/pdf"],
    };

    if (!allowedTypes[type]?.includes(file.type)) {
      return { error: `Invalid file type for ${type}. Got: ${file.type}` };
    }

    const ext = mimeToExt[file.type] || ".bin";
    const filename = type === "photo" ? `photo${ext}` : "resume.pdf";

    // Delete any existing blobs for this type before uploading
    if (type === "photo") {
      const photoExtensions = [".png", ".jpg", ".jpeg", ".webp"];
      for (const oldExt of photoExtensions) {
        try {
          const existing = await list({ prefix: `photo${oldExt}` });
          for (const blob of existing.blobs) {
            await del(blob.url);
          }
        } catch {
          // Ignore errors when cleaning up old files
        }
      }
    } else {
      try {
        const existing = await list({ prefix: "resume.pdf" });
        for (const blob of existing.blobs) {
          await del(blob.url);
        }
      } catch {
        // Ignore errors when cleaning up old files
      }
    }

    // Upload new file to Vercel Blob
    const blob = await put(filename, file, {
      access: "public",
      addRandomSuffix: false,
    });

    // Save the URL to MongoDB so the frontend can read it
    const data = await readDb();
    const currentUploads = data.uploads || {};
    const updatedUploads = {
      ...currentUploads,
      ...(type === "photo" ? { photoUrl: blob.url } : { resumeUrl: blob.url }),
    };
    await updateSection("uploads", updatedUploads);

    return { success: true, path: blob.url };
  } catch (error: any) {
    console.error("Upload error:", error);
    return { error: error?.message || "Failed to upload file" };
  }
}
