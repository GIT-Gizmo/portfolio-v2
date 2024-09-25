"use client"

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { SkillSection } from "@/components/SkillSection";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className='max-w-7xl w-full'>
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <Projects />
        <Testimonials />
        <Experience />
        <SkillSection />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
