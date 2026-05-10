"use client";
import React, { useEffect, useState } from "react";
import Html5Icon from "../ReactSvg/Html5Icon";
import Css3Icon from "../ReactSvg/Css3Icon";
import TailWindIcon from "../ReactSvg/TailWindIcon";
import ReactIcon from "../ReactSvg/ReactIcon";
import Nextjs from "../ReactSvg/Nextjs";
import NodejsIcon from "../ReactSvg/NodejsIcon";
import ExpressIcon from "../ReactSvg/ExpressIcon";
import GithubIcon from "../ReactSvg/GithubIcon";
import JavaScriptIcon from "../ReactSvg/JavaScriptIcon";
import MongoDbIcon from "../ReactSvg/MongoDb";

const HeroAni = () => {
  const [mounted, setMounted] = useState(false);

  const icons = [
    { component: <Html5Icon />, color: "text-orange-500", delay: "0s" },
    { component: <Css3Icon />, color: "text-blue-500", delay: "1.5s" },
    { component: <TailWindIcon />, color: "text-sky-400", delay: "3s" },
    { component: <JavaScriptIcon />, color: "text-yellow-400", delay: "0.5s" },
    { component: <ReactIcon />, color: "text-cyan-400", delay: "0.8s" },
    { component: <Nextjs />, color: "text-white", delay: "2.2s" },
    { component: <MongoDbIcon />, color: "text-green-500", delay: "1.2s" },
    { component: <NodejsIcon />, color: "text-green-600", delay: "1s" },
    { component: <ExpressIcon />, color: "text-gray-400", delay: "4s" },
    { component: <GithubIcon />, color: "text-white", delay: "2.5s" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full aspect-square md:aspect-video bg-black flex items-center justify-center overflow-hidden p-2">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Pura orbit ghurbe clock-wise */
        @keyframes clock-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Icon-gulo jeno ulte na jay tai counter-rotate */
        @keyframes counter-rotate {
          from { transform: rotate(var(--initial-angle-neg)); }
          to { transform: rotate(calc(var(--initial-angle-neg) - 360deg)); }
        }

        @keyframes orbit-pulse {
          0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 2px transparent); transform: scale(0.9) var(--inner-rotation); }
          50% { opacity: 1; filter: drop-shadow(0 0 15px currentColor); transform: scale(1.1) var(--inner-rotation); }
        }

        .orbit-container {
          animation: clock-orbit 40s linear infinite;
        }

        .star-node {
          /* pulse animation and counter rotation combined */
          animation: orbit-pulse 5s ease-in-out infinite;
        }
      `,
        }}
      />

      {/* --- মাঝখানের লোগো (No Animation Here) --- */}
      <div className="absolute z-30 flex flex-col items-center justify-center pointer-events-none">
        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-zinc-950/20 border border-white/5 flex items-center justify-center backdrop-blur-[2px]">
          <span className="text-white/20 font-black text-6xl md:text-9xl italic select-none">
            N
          </span>
        </div>
      </div>

      {/* --- CLOCKWISE ORBITAL SYSTEM --- */}
      <div className="relative w-full h-full flex items-center justify-center orbit-container">
        {icons.map((item, index) => {
          const orbitRadius = 40 + index * 0.5; // Spread consistency
          const angle = (360 / icons.length) * index;

          return (
            <div
              key={index}
              className="absolute flex items-center justify-center pointer-events-none"
              style={{
                width: `${orbitRadius * 2}%`,
                height: `${orbitRadius * 2}%`,
                transform: `rotate(${angle}deg)`,
              }}
            >
              {/* Icon Container with Counter-Rotation */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 star-node ${item.color} pointer-events-auto cursor-pointer`}
                style={{
                  animationDelay: item.delay,
                  "--initial-angle-neg": `${-angle}deg`,
                  "--inner-rotation": `rotate(calc(var(--initial-angle-neg) - (var(--current-orbit-rotation, 0deg))))`,
                  /* CSS-e dynamically animation-ke handle korar jonno counter-rotate apply kora holo */
                  animation: `orbit-pulse 5s ease-in-out infinite, counter-rotate 40s linear infinite`,
                }}
              >
                <div className="w-11 h-11 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-xl">
                  <div className="w-6 h-6 md:w-9 md:h-9">{item.component}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Background Subtle Glow */}
      <div className="absolute w-full h-full bg-blue-500/5 rounded-full blur-[150px] -z-10" />
    </div>
  );
};

export default HeroAni;
