"use client";
import { motion } from "framer-motion";

export const GreatName: React.FC<{ text: string }> = ({ text }) => {
  const textLenght = text.length;
  return (
    <span className="text-neutral-400">
      {text.split(" ").map((word, idx) => (
        <motion.span
          key={idx}
          className="inline-block"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.04 }}
        >
          {textLenght !== idx + 1 ? `${word}  ` : word}
        </motion.span>
      ))}
    </span>
  );
};
