"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  project,
  index = 0,
  activeHover,
  setActiveHover,
}) {
  const isOdd = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setActiveHover?.(index)}
      onMouseLeave={() => setActiveHover?.(null)}
      className="group relative grid md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Image Section */}
      <div
        className={`relative rounded-4xl overflow-hidden aspect-4/3 shadow-lg ${
          isOdd ? "md:order-2" : ""
        }`}
      >
        <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={
            project.image ||
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
      <div className={`space-y-6 ${isOdd ? "md:order-1 md:text-right" : ""}`}>
        <div
          className={`flex items-center gap-3 ${isOdd ? "md:justify-end" : ""}`}
        >
          <span className="h-px w-12 bg-brand-primary/30"></span>
          <span className="text-brand-primary font-medium tracking-wide">
            {project.category}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-dark group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>

        <p
          className={`text-gray-500 text-lg leading-relaxed ${
            isOdd ? "ml-auto" : ""
          } max-w-md`}
        >
          {project.description}
        </p>

        <div
          className={`flex flex-wrap gap-2 pt-2 ${isOdd ? "justify-end" : ""}`}
        >
          {project.tags &&
            project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 font-medium"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
