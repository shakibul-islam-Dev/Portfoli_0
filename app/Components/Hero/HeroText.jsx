"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-6">
      {/* ছোট ইন্ট্রো */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg md:text-xl font-medium text-blue-500 tracking-wide"
      >
        👋 Hello, I'm
      </motion.h3>

      {/* টাইপরাইটার হেডিং - Overlapping solve korar main area */}
      <div className="flex flex-col text-4xl md:text-6xl font-extrabold tracking-tight min-h-[140px] md:min-h-[180px] lg:min-h-[160px]">
        <h1 className="text-white mb-2">Shakibul Islam</h1>

        <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent block">
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
              wrapperClassName: "leading-tight", // Extra class for line height
            }}
          />
        </span>
      </div>

      {/* ডেসক্রিপশন - ekhun overlap hobe na */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-zinc-400 max-w-lg text-base md:text-lg leading-relaxed text-center lg:text-left pt-2"
      >
        I specialize in building high-performance, pixel-perfect web
        applications that provide a seamless user experience. Based in Dhaka,
        Bangladesh.
      </motion.p>

      {/* বাটন সেকশন */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start"
      >
        <a
          href="/resume.pdf"
          download="Shakibul_Islam_Resume.pdf"
          className="group flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
        >
          Download Resume{" "}
          <FiDownload className="text-xl group-hover:animate-bounce" />
        </a>

        <a
          href="#contact"
          className="px-7 py-3.5 border border-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-all active:scale-95"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
