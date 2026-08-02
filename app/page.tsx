import { getPortfolioData } from "@/lib/getPortfolioData";
import PortfolioShell from "@/components/layout/PortfolioShell";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <PortfolioShell>
      <Hero profile={data.profile} />
      <About profile={data.profile} stats={data.stats} timeline={data.timeline} />
      <Skills skillCategories={data.skillCategories} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Certifications certifications={data.certifications} />
      <TechStack techStack={data.techStack} />
      <Contact profile={data.profile} />
      <Footer profile={data.profile} />
    </PortfolioShell>
  );
}
