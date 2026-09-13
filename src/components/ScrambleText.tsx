import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getScrambleChar() {
  return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
}

export default function ScrambleText({
  text,
  className = "text-white/70",
}: {
  text: string;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(() =>
    text.replace(/./g, (char) => (char === " " ? " " : getScrambleChar()))
  );
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1200;
    const interval = 40;
    const totalSteps = Math.ceil(duration / interval);
    let step = 0;

    const timer = window.setInterval(() => {
      step += 1;
      const revealedChars = Math.floor((step / totalSteps) * text.length);

      const next = text
        .split("")
        .map((char, index) =>
          index < revealedChars ? char : char === " " ? " " : getScrambleChar()
        )
        .join("");

      setDisplayText(next);

      if (step >= totalSteps) {
        setDisplayText(text);
        window.clearInterval(timer);
      }
    }, interval);

    return () => window.clearInterval(timer);
  }, [started, text]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-[11px] tracking-[0.3em] uppercase font-semibold ${className}`}
      style={{ whiteSpace: "pre-line" }}
    >
      {displayText}
    </motion.span>
  );
}
