"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Styles
const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const containerStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  width: "44px",
};

const itemStyle = {
  width: "20px",
  height: "20px",
  borderRadius: "2px",
};

const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Logo() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOrder(shuffle(order));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul style={containerStyle}>
      {order.map((backgroundColor) => (
        <motion.li
          key={backgroundColor}
          layout
          transition={spring}
          style={{
            ...itemStyle,
            backgroundColor: backgroundColor,
          }}
        />
      ))}
    </ul>
  );
}
