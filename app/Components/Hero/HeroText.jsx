"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-5">
      {/* ছোট ইন্ট্রো */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-medium text-blue-500"
      >
        👋 I'm
      </motion.h3>

      {/* টাইপরাইটার হেডিং */}
      <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight h-30 md:h-40 lg:h-45">
        <h1 className="text-white mb-2">Shakibul Islam</h1>
        <h1 className="bg-linear-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "MERN Stack Specialist",
                "React & Next.js Expert",
                "Tech Enthusiast",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </h1>
      </div>

      {/* ডেসক্রিপশন */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-zinc-400 max-w-lg text-sm md:text-lg leading-relaxed text-center lg:text-left"
      >
        I specialize in building high-performance, pixel-perfect web
        applications that provide a seamless user experience. Based in Dhaka,
        Bangladesh.
      </motion.p>

      {/* বাটন সেকশন */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="pt-6 flex flex-wrap gap-4 justify-center lg:justify-start"
      >
        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          download="Shakibul_Islam_Resume.pdf"
          className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
        >
          Download Resume{" "}
          <FiDownload className="text-xl group-hover:animate-bounce" />
        </a>

        {/* Contact Me Button (Optional but looks good) */}
        <a
          href="#contact"
          className="px-8 py-4 border border-zinc-700 text-white font-bold rounded-xl hover:bg-zinc-800 transition-all active:scale-95"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
