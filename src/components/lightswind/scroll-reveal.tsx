"use client";

import React, { useRef, useMemo } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

export interface ScrollRevealProps {
  children: React.ReactNode;
  mode?: "text" | "container";
  containerClassName?: string;
  textClassName?: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  staggerDelay?: number;
  threshold?: number;
  duration?: number;
  springConfig?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl";
  align?: "left" | "center" | "right";
  variant?: "default" | "muted" | "accent" | "primary";
}

const sizeClasses = {
  sm: "text-base md:text-xl",
  md: "text-xl md:text-2xl lg:text-3xl",
  lg: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  xl: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
  "4xl": "text-8xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const variantClasses = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  accent: "text-accent-foreground",
  primary: "text-primary",
};

export function ScrollReveal({
  children,
  mode = "text",
  containerClassName,
  textClassName,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  staggerDelay = 0.05,
  threshold = 0.5,
  duration = 0.8,
  springConfig = {
    damping: 25,
    stiffness: 100,
    mass: 1,
  },
  size = "lg",
  align = "left",
  variant = "default",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    amount: threshold,
    once: false,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [baseRotation, 0, 0]
  );

  /* ---------------- TEXT MODE ---------------- */

  const splitText = useMemo(() => {
    if (typeof children !== "string") return [];
    return children
      .split(/(\s+)/)
      .map((part, index) => ({
        value: part,
        isSpace: /^\s+$/.test(part),
        key: index,
      }))
      .filter((item) => item.value.length > 0);
  }, [children]);

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: baseOpacity,
      y: 20,
      filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        ...springConfig,
        duration,
      },
    },
  };

  /* ---------------- CONTAINER MODE ---------------- */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        ...springConfig,
        duration,
      },
    },
  };

  /* ---------------- RENDER ---------------- */

  if (mode === "container") {
    return (
      <motion.div
        ref={containerRef}
        style={{ rotate: rotation }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={cn("transform-gpu", containerClassName)}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          return (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  /* ---------------- TEXT DEFAULT ---------------- */

  return (
    <motion.div
      ref={containerRef}
      style={{ rotate: rotation }}
      className={cn("transform-gpu", containerClassName)}
    >
      <motion.p
        className={cn(
          "leading-relaxed font-semibold",
          sizeClasses[size],
          alignClasses[align],
          variantClasses[variant],
          textClassName
        )}
        variants={textContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {splitText.map((item) =>
          item.isSpace ? (
            <span key={item.key}>{item.value}</span>
          ) : (
            <motion.span
              key={item.key}
              className="inline-block"
              variants={wordVariants}
            >
              {item.value}
            </motion.span>
          )
        )}
      </motion.p>
    </motion.div>
  );
}

export default ScrollReveal;
