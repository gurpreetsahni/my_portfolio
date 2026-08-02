import { readDb } from "./db";
import * as staticData from "./data";

// Server-only: reads from MongoDB at request time
// Falls back to static data if MongoDB is unreachable
export async function getPortfolioData() {
  try {
    return await readDb();
  } catch {
    return {
      profile: staticData.profile,
      stats: staticData.stats,
      skillCategories: staticData.skillCategories,
      experience: staticData.experience,
      projects: staticData.projects,
      certifications: staticData.certifications,
      techStack: staticData.techStack,
      timeline: staticData.timeline,
    };
  }
}
