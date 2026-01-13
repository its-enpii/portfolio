"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectShowcase({ projects }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-bg pt-20 pb-32 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <motion.div
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#4F46E5 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation & Header */}
        <div className="mb-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold text-brand-dark leading-tight mb-6">
              Selected <span className="text-brand-primary">Projects</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl">
              A curated collection of my work, ranging from web applications to
              UI/UX designs.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeCategory === category
                  ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/25"
                  : "bg-white text-gray-500 border-gray-100 hover:border-brand-primary/30 hover:text-brand-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Harmonized Grid Layout (Zig-Zag) */}
        <div className="flex flex-col gap-20 md:gap-32">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Image Section */}
              <div
                className={`relative rounded-[2.5rem] overflow-hidden aspect-4/3 shadow-2xl ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={
                    project.image ||
                    (project._id
                      ? `/api/projects/${project._id}/image`
                      : null) ||
                    "https://placehold.co/800x600/e2e8f0/cbd5e1?text=No+Image"
                  }
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlay Action */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full text-brand-dark hover:bg-brand-accent transition-colors shadow-lg transform hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full text-brand-dark hover:bg-brand-accent transition-colors shadow-lg transform hover:scale-110"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "md:order-1 md:text-right" : ""
                }`}
              >
                <div
                  className={`flex items-center gap-3 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <span className="h-px w-12 bg-brand-primary/30"></span>
                  <span className="text-brand-primary font-medium tracking-wide uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold font-display text-brand-dark group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>

                <p
                  className={`text-gray-500 text-lg leading-relaxed ${
                    index % 2 === 1 ? "ml-auto" : ""
                  } max-w-lg`}
                >
                  {project.description}
                </p>

                <div
                  className={`flex flex-wrap gap-2 pt-4 ${
                    index % 2 === 1 ? "justify-end" : ""
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-600 font-medium bg-white/50 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
