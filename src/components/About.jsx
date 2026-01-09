"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Sparkles,
  Terminal,
  Cpu,
  Database,
  Layout,
  Download,
} from "lucide-react";

const About = () => {
  const techStack = {
    Languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "TypeScript",
      "Dart",
      "SASS",
      "Git",
      "GitHub",
    ],
    Frontend: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Vuetify",
      "TailwindCSS",
      "Bootstrap",
      "MaterializeCSS",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Fastify.js",
      "Laravel",
      "CodeIgniter",
      "MySQL",
      "MongoDB",
    ],
    Mobile: ["Flutter"],
    Design: ["Figma", "Invision", "Adobe XD"],
  };

  return (
    <section id="about" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Decorative Background - Increased Opacity */}
      {/* Decorative Background - Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-400 h-400 bg-brand-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-400 h-400 bg-brand-accent/5 rounded-full blur-3xl"
        />

        <div className="absolute top-[5%] -left-[5%] text-brand-text/5 font-display font-bold text-[10rem] md:text-[15rem] leading-none whitespace-nowrap">
          WHO
        </div>
        <div className="absolute bottom-[5%] -right-[5%] text-brand-text/5 font-display font-bold text-[10rem] md:text-[15rem] leading-none whitespace-nowrap">
          I AM
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-brand-primary text-sm font-semibold tracking-wide mb-6 shadow-sm"
          >
            About The Studio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-dark leading-tight"
          >
            Bridging the gap between <br />
            <span className="text-brand-primary">complex logic</span> and{" "}
            <span className="text-brand-accent">beautiful design</span>.
          </motion.h2>
        </div>

        {/* Top Bento: Bio & Focus */}
        <div className="grid md:grid-cols-12 gap-6 mb-8">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-brand-primary/5 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold font-display text-brand-dark mb-6">
                The Journey
              </h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed max-w-2xl">
                <p>
                  Hello! I'm{" "}
                  <strong className="text-brand-primary">Agas Arapi</strong>.
                  You can call me Agas, Arapi, Arafi, Enfii, Enpii, Fii, or Pii.
                  My passion lies in creating digital products that look great
                  and work perfectly.
                </p>
                <p>
                  With a comprehensive toolkit ranging from{" "}
                  <span className="text-brand-accent font-medium">
                    PHP & Laravel
                  </span>{" "}
                  to{" "}
                  <span className="text-brand-accent font-medium">
                    Modern JS Frameworks
                  </span>
                  , I approach every project with a full-stack mindset.
                  Optimizing the backend for performance while crafting
                  pixel-perfect frontend experiences.
                </p>
              </div>

              <div className="flex gap-12 mt-10 border-t border-gray-100 pt-8">
                <div>
                  <p className="text-4xl font-bold font-display text-brand-primary">
                    5+
                  </p>
                  <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                    Years Exp
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold font-display text-brand-primary">
                    25+
                  </p>
                  <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                    Techs Mastered
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/file/cv-enpii.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-xl font-bold hover:bg-brand-primary transition-colors shadow-lg shadow-brand-dark/20 group"
                >
                  <Download
                    size={20}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* Focus / Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-brand-primary text-white rounded-[2.5rem] p-8 md:p-10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">
                Design Philosophy
              </h3>
              <p className="text-white/80 leading-relaxed">
                I don't just write code. I build systems. My focus is on
                creating scalable, maintainable, and intuitive applications that
                stand the test of time.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-brand-accent font-display font-bold text-lg">
                "Quality over Quantity"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bento: Tech Stack Expansion */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-4xl p-8 shadow-lg border-b-4 border-brand-dark group hover:-translate-y-1 transition-transform duration-300 h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                <Code2 size={24} />
              </div>
              <h3 className="font-bold font-display text-lg text-brand-dark">
                Languages & Core
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.Languages.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-brand-dark/5 border border-brand-dark/20 rounded-lg text-sm font-semibold text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-4xl p-8 shadow-lg md:col-span-2 border-b-4 border-brand-primary group hover:-translate-y-1 transition-transform duration-300 h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Layout size={24} />
              </div>
              <h3 className="font-bold font-display text-lg text-brand-primary">
                Frameworks & Libraries
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                  Frontend
                </span>
                <div className="flex flex-wrap gap-2">
                  {techStack.Frontend.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-brand-primary/5 border border-brand-primary/20 rounded-lg text-sm font-medium text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                  Backend
                </span>
                <div className="flex flex-wrap gap-2">
                  {techStack.Backend.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-brand-primary/5 border border-brand-primary/20 rounded-lg text-sm font-medium text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-4xl p-8 shadow-lg border-b-4 border-brand-accent group hover:-translate-y-1 transition-transform duration-300 h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Palette size={24} />
              </div>
              <h3 className="font-bold font-display text-lg text-brand-accent">
                Design & Mobile
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...techStack.Mobile, ...techStack.Design].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-brand-accent/5 border border-brand-accent/20 rounded-lg text-sm font-bold text-brand-dark/80 group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
