"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Dribbble,
  Github,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <section
      id="contact"
      className="py-24 bg-brand-bg relative flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-primary rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Abstract Shapes for "Creative Studio" feel */}
          {/* Abstract Shapes - Pulsing Animation */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-overlay"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"
          />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Side: Brand Statement */}
            <div className="flex flex-col justify-between h-full space-y-10">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-6">
                  Let's Collaborate
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
                  Have an idea?
                  <br />
                  Let's <span className="text-brand-accent">Develop</span> it.
                </h2>
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                  From concept to deployment, enpii studio transforms your
                  vision into a digital reality. Reach out and let's discuss
                  your next big project.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/90 group cursor-pointer transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                    <Mail className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Mail us at</p>
                    <p className="font-semibold text-lg">
                      enpiiofficial@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Base</p>
                    <p className="font-semibold text-lg">Indonesia</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm text-white/50 mb-4">Connect with us</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/arafi118"
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/its.enpii/"
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://dribbble.com/enpii"
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all"
                    >
                      <Dribbble size={18} />
                    </a>
                    <a
                      href="https://github.com/its-enpii"
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://wa.me/6285842712135"
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 text-brand-dark font-medium focus:ring-2 focus:ring-brand-primary/20 placeholder-gray-400 transition-all"
                    placeholder="e.g. enpii studio"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 text-brand-dark font-medium focus:ring-2 focus:ring-brand-primary/20 placeholder-gray-400 transition-all"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                    Tell me about it
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 text-brand-dark font-medium focus:ring-2 focus:ring-brand-primary/20 placeholder-gray-400 transition-all resize-none"
                    placeholder="I want to build a..."
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}

                {status === "success" && (
                  <p className="text-green-600 text-sm text-center font-bold">
                    Message sent successfully! We'll allow get back to you soon.
                  </p>
                )}

                <button
                  disabled={status === "loading" || status === "success"}
                  className="w-full py-4 mt-2 bg-brand-accent text-brand-dark rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#eec04e] hover:-translate-y-1 transition-all shadow-lg shadow-brand-accent/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading"
                    ? "Sending..."
                    : status === "success"
                    ? "Sent!"
                    : "Send Request"}
                  {status !== "loading" && (
                    <Send size={20} className="stroke-2" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
