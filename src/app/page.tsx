import styles from "./page.module.css";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Experience />
      <Skills />
      <ProjectsPreview />
      <BlogPreview />
      <Contact />
    </main>
  );
}
