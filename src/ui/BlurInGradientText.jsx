import { motion } from "framer-motion";

export function BlurInGradientText() {
  const lines = [
    "Multicloud Adversary",
    "Simulation Operating System",
  ];

  let charIndex = 0;

  return (
<div className="mt-3 py-2 font-display font-extrabold leading-[1.1] tracking-tight overflow-visible">
      {lines.map((line, lineIdx) => (
        <div
          key={lineIdx}
          className="whitespace-normal sm:whitespace-nowrap"
        >
          {line.split("").map((char) => {
            const delay = charIndex * 0.04;
            charIndex++;

            return (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, filter: "blur(14px)", y: 14 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  delay,
                  duration: 0.65,
                  ease: "easeOut",
                }}
                className="
                  inline-block
                  text-transparent bg-clip-text
                  bg-gradient-to-t
                  from-red-950
                  via-red-700
                  to-red-400
                "
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
