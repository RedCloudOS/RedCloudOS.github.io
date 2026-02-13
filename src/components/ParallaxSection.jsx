import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ParallaxSection({ children, speed = 150 }) {
  const { scrollY } = useScroll();

  // 👇 VERY IMPORTANT CHANGE
  const yRaw = useTransform(scrollY, [0, 4000], [0, -speed]);

  const y = useSpring(yRaw, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  const opacity = useTransform(scrollY, [0, 600], [0.95, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
