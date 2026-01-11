"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="h-screen relative overflow-hidden bg-brand-bg flex flex-col justify-center"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 -translate-x-1/2" />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col items-start justify-center h-full gap-4 md:gap-8">
          {/* DISCOVER: Solid Black -> Purple Hover */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="group relative"
          >
            <h1 className="text-[12vw] leading-none font-display font-bold text-brand-dark hover:text-brand-primary transition-colors duration-300 cursor-default select-none">
              DISCOVER
            </h1>
            <span className="hidden md:block absolute top-1/2 -right-32 -translate-y-1/2 text-lg font-medium text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-10 group-hover:translate-x-0 transition-all duration-500">
              // new ideas
            </span>
          </motion.div>

          {/* DEVELOP: Solid Black -> Yellow Hover */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            className="group relative self-end md:mr-20"
          >
            <span className="hidden md:block absolute top-1/2 -left-32 -translate-y-1/2 text-lg font-medium text-gray-400 opacity-0 group-hover:opacity-100 transform -translate-x-10 group-hover:translate-x-0 transition-all duration-500 text-right">
              robust systems //
            </span>
            <h1 className="text-[12vw] leading-none font-display font-bold text-brand-dark hover:text-brand-accent transition-colors duration-300 cursor-default select-none">
              DEVELOP
            </h1>
          </motion.div>

          {/* DISPLAY: Solid Black -> Purple Hover */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
            className="group relative md:ml-20"
          >
            <h1 className="text-[12vw] leading-none font-display font-bold text-brand-dark hover:text-brand-primary transition-colors duration-300 cursor-default select-none">
              DISPLAY
            </h1>
            <span className="hidden md:block absolute top-1/2 -right-40 -translate-y-1/2 text-lg font-medium text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-10 group-hover:translate-x-0 transition-all duration-500">
              // perfect results
            </span>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-brand-dark/40">
        <ArrowDown className="animate-bounce" />
        <span className="text-sm uppercase tracking-widest font-semibold">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Hero;
