"use client";

import { motion } from "framer-motion";

export function TextRoll({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

export default TextRoll;
