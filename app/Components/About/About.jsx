"use client";
import React, { useState } from "react";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="py-12 md:py-20 px-4 md:px-6 bg-black text-white"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Content Card */}
        <div className="bg-zinc-900/50 p-6 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl backdrop-blur-sm">
          <div className="max-w-none text-zinc-300">
            {/* Initial Short Intro */}
            <div className="space-y-4">
              <p className="font-semibold text-xl md:text-2xl text-white leading-tight">
                Hi, I'm Shakibul Islam. I specialize in building
                high-performance web applications using the MERN stack and
                Next.js.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-zinc-400">
                My programming journey began with a curiosity about how things
                work on the internet. What started as a simple interest quickly
                evolved into a passion for building functional and visually
                striking web applications.
              </p>
            </div>

            {/* Hidden Details Section with Animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-250 opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-6 pt-4 border-t border-zinc-800">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">
                    My Journey & Expertise
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Over time, I have dedicated myself to mastering the{" "}
                    <span className="text-white font-medium">MERN stack</span>,
                    focusing on creating seamless user experiences using{" "}
                    <span className="text-white font-medium">
                      React.js, Next.js, and Tailwind CSS
                    </span>
                    . I love the challenge of turning a complex problem into
                    clean, efficient code.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">
                    What I Enjoy
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    I thrive in environments where I can build responsive
                    applications from scratch. I am particularly fond of working
                    with modern tools like{" "}
                    <span className="text-white font-medium">Better Auth</span>{" "}
                    and handling complex logic like database connectivity and
                    component architecture.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">
                    Beyond the Screen
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    When I’m not deep in a terminal or debugging React
                    components, I enjoy{" "}
                    <span className="text-white font-medium">
                      customizing Linux systems
                    </span>{" "}
                    to perfection. Beyond tech, I am an avid{" "}
                    <span className="text-white font-medium">
                      traveler and trekker
                    </span>
                    . Exploring nature and deep forests helps me recharge and
                    brings a fresh perspective to my development work.
                  </p>
                </div>
              </div>
            </div>

            {/* See More / See Less Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-8 group flex items-center gap-2 text-blue-500 font-bold text-sm md:text-base hover:text-blue-400 transition-colors"
            >
              <span className="border-b-2 border-transparent group-hover:border-blue-400 pb-1 transition-all">
                {isExpanded ? "Show Less" : "Read Full Story"}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
