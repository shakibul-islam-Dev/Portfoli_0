"use client";
import { motion } from "framer-motion";
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

const techData = [
  { icon: <Html5Icon />, name: "HTML5" },
  { icon: <Css3Icon />, name: "CSS3" },
  { icon: <TailWindIcon />, name: "Tailwind" },
  { icon: <JavaScriptIcon />, name: "JavaScript" },
  { icon: <ReactIcon />, name: "React" },
  { icon: <Nextjs />, name: "Next.js" },
  { icon: <NodejsIcon />, name: "Node.js" },
  { icon: <ExpressIcon />, name: "Express" },
  { icon: <MongoDbIcon />, name: "MongoDB" },
  { icon: <GithubIcon />, name: "GitHub" },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-12 md:py-20 px-4 w-full max-w-5xl mx-auto"
    >
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Tech Stack
        </h2>
        <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Responsive Grid: Mobile 2, Tablet 3-4, Web 5 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
        {techData.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="flex flex-col items-center justify-center p-4 md:p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-xl hover:border-blue-500/40 hover:bg-zinc-900/60 transition-all duration-200"
          >
            {/* Icon size responsive kora hoyeche */}
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mb-3 [&>svg]:w-full [&>svg]:h-full transition-transform">
              {tech.icon}
            </div>

            <span className="text-zinc-400 group-hover:text-white font-medium text-xs md:text-sm tracking-tight text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
