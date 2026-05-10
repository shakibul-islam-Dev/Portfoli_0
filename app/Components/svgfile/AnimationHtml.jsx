"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const imageStyle = {
  // width/height passed via props below
};

// Animation Variants
const logoVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },

  // Floating animation variant
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

export default function AnimatedHtmlLogo({ size = 100 }) {
  return (
    <div style={containerStyle}>
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate={["visible", "float"]} // Pehele visible, fir persistent floating
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/icons/html5.svg" // Apnar SVG path, example: public/icons/html5.svg
          alt="Animated HTML5 Logo"
          width={60}
          height={60}
          priority // Next.js image loading logic improve kore
          style={imageStyle}
        />
      </motion.div>
    </div>
  );
}
