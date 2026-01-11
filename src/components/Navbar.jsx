"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useScrollSpy } from "../hooks/useScrollSpy";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Define section IDs to spy on
  const sectionIds = ["hero", "about", "projects", "contact"];

  // Use custom hook with an offset (e.g., -300px to trigger well before top)
  const activeSpyId = useScrollSpy(sectionIds, -300);

  // Derived active section state
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to sync spy result with UI state
  useEffect(() => {
    if (pathname === "/") {
      if (activeSpyId) {
        const name = activeSpyId.charAt(0).toUpperCase() + activeSpyId.slice(1);
        setActiveSection(name === "Hero" ? "Home" : name);
      }
    } else if (pathname === "/projects") {
      setActiveSection("Projects");
    }
  }, [activeSpyId, pathname]);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/projects" }, // Keep distinct for the separate page
    { name: "Contact", href: "/#contact" },
  ];

  const handleScrollTo = (e, href) => {
    setIsOpen(false);

    // Check if the link is a hash link for the home page
    const isHomeHash = href.startsWith("/#") || href.startsWith("#");
    const isHomePage = pathname === "/";

    if (isHomePage && isHomeHash) {
      e.preventDefault();
      const targetId = href.replace(/^\/#|#/, ""); // Remove /# or #
      const element = document.getElementById(targetId);

      if (element) {
        // Calculate offset position for fixed navbar
        const offsetPosition =
          element.getBoundingClientRect().top + window.scrollY - 80;

        // Use a small timeout to allow mobile menu to start closing
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          // Manually update URL without reload
          window.history.pushState(null, "", href);
        }, 100);
      } else if (targetId === "hero") {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", href);
        }, 100);
      }

      // Optimistic update
      const name = targetId.charAt(0).toUpperCase() + targetId.slice(1);
      setActiveSection(name === "Hero" ? "Home" : name);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/#hero"
          onClick={(e) => handleScrollTo(e, "/#hero")}
          className="flex items-center"
        >
          <img
            src="/logo-text.svg"
            alt="enpii studio"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`font-medium transition-colors relative group ${
                activeSection === link.name
                  ? "text-brand-primary"
                  : "text-brand-text hover:text-brand-primary"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
                  activeSection === link.name
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={(e) => handleScrollTo(e, "/#contact")}
            className="px-5 py-2 rounded-full border border-brand-primary text-brand-primary font-medium hover:bg-brand-primary hover:text-white transition-all"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-xl font-medium ${
                    activeSection == link.name
                      ? "text-brand-primary"
                      : "text-brand-text hover:text-brand-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
                      activeSection == link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
