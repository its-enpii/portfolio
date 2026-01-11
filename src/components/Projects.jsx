"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects = [] }) => {
  const [activeHover, setActiveHover] = useState(null);

  // Fallback if no projects provided
  const displayProjects = projects.length > 0 ? projects : [];

  if (displayProjects.length === 0) return null; // Or return a placeholder

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark">
              Crafting digital <br />
              <span className="text-brand-primary">experiences.</span>
            </h2>
          </div>
          <div className="pb-2">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-brand-dark font-semibold border-b-2 border-brand-accent pb-1 hover:text-brand-primary transition-colors"
            >
              View All Projects{" "}
              <ArrowUpRight
                size={20}
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              activeHover={activeHover}
              setActiveHover={setActiveHover}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
