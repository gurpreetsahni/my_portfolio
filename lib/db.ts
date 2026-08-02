import clientPromise from "./mongodb";
import * as staticData from "./data";

const DB_NAME = "portfolio";
const COLLECTION_NAME = "content";

export interface PortfolioData {
  profile: {
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
  };
  stats: { label: string; value: number; suffix: string }[];
  skillCategories: {
    id: string;
    label: string;
    skills: { name: string; level: number }[];
  }[];
  experience: {
    company: string;
    role: string;
    focus: string;
    period: string;
    current: boolean;
    bullets: string[];
    highlights: string[];
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    github: string;
  }[];
  certifications: { name: string; issuer: string }[];
  techStack: string[];
  timeline: { year: string; label: string; detail: string }[];
}

// Default data from static file (used to seed MongoDB on first run)
function getDefaultData(): PortfolioData {
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

async function getCollection() {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  return db.collection(COLLECTION_NAME);
}

export async function readDb(): Promise<PortfolioData> {
  try {
    const collection = await getCollection();
    const doc = await collection.findOne({ _id: "portfolio" as any });

    if (!doc) {
      // First run - seed the database
      const defaultData = getDefaultData();
      await collection.insertOne({ _id: "portfolio" as any, ...defaultData });
      return defaultData;
    }

    // Remove MongoDB's _id field from the returned data
    const { _id, ...data } = doc;
    return data as unknown as PortfolioData;
  } catch (error) {
    console.error("MongoDB read error:", error);
    // Fallback to static data if DB is unreachable
    return getDefaultData();
  }
}

export async function writeDb(data: PortfolioData): Promise<void> {
  const collection = await getCollection();
  await collection.replaceOne(
    { _id: "portfolio" as any },
    { _id: "portfolio" as any, ...data },
    { upsert: true }
  );
}

export async function updateSection<K extends keyof PortfolioData>(
  section: K,
  value: PortfolioData[K]
): Promise<PortfolioData> {
  const collection = await getCollection();
  await collection.updateOne(
    { _id: "portfolio" as any },
    { $set: { [section]: value } },
    { upsert: true }
  );
  return readDb();
}
