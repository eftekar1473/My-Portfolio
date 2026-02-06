import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Publications } from "@/components/publications";
import { Projects } from "@/components/projects";
import { CodingProfiles } from "@/components/coding-profiles";
import { Skills } from "@/components/skills";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
// import { ExtracurricularActivities } from "@/components/Extra-Curricular-Activities";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <Projects />
      <Blog />
      <Skills />
      
      <Contact />
      <Footer />
    </main>
  );
}
 // <Publications />
 // <Blog />
 // <CodingProfiles />
// <ExtraCurricularActivities/>