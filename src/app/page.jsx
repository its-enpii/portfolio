// Server Component
export const dynamic = "force-dynamic";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import dbConnect from "@/lib/db";
import Project from "@/models/Project";

async function getFeaturedProjects() {
  await dbConnect();
  // Fetch featured projects, limit to 3, sort by newest
  const projects = await Project.find({ featured: true })
    .select("-image")
    .sort({ createdAt: -1 })
    .lean();
  return projects.map((p) => ({
    ...p,
    _id: p._id.toString(),
    createdAt: p.createdAt.toISOString(),
  }));
}

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </>
  );
}
