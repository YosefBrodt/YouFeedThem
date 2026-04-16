"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  type Variant,
} from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
  once?: boolean;
}

const BlurFade = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  blur = "8px",
  once = true,
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const hidden: Variant = {
    y: yOffset,
    opacity: 0,
    filter: `blur(${blur})`,
  };

  const visible: Variant = {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { BlurFade };
