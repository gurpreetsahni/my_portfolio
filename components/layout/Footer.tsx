import { Linkedin, Mail } from "lucide-react";
import { profile as staticProfile } from "@/lib/data";

interface ProfileData {
  name: string;
  email: string;
  linkedin: string;
  location: string;
  [key: string]: unknown;
}

export default function Footer({ profile: profileProp }: { profile?: ProfileData }) {
  const profile = profileProp || staticProfile;

  return (
    <footer className="relative border-t border-base-line container-px py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} {profile.name}. Built with intent.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted hover:text-ink-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-muted hover:text-ink-primary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-faint">{profile.location}</p>
      </div>
    </footer>
  );
}
