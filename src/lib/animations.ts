import { Variants } from "framer-motion";

// Standard transition settings
export const transitions = {
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 10,
  },
  easeOut: {
    type: "tween",
    ease: "easeOut",
    duration: 0.4,
  },
  easeOutSlow: {
    type: "tween",
    ease: "easeOut",
    duration: 0.6,
  },
};

// Fade in and move up (for paragraphs, section headers, general blocks)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: transitions.easeOutSlow 
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: transitions.easeOut 
  },
};

// Stagger children container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Standard viewport config for "whileInView"
export const viewportConfig = { 
  once: true, 
  margin: "-50px" 
};

// Button interactions
export const buttonInteraction = {
  hover: { 
    scale: 1.02, 
    y: -1,
    transition: { duration: 0.2, ease: "easeOut" } 
  },
  tap: { 
    scale: 0.98, 
    y: 0,
    transition: { duration: 0.1, ease: "easeOut" } 
  },
};

// Card interactions
export const cardInteraction = {
  hover: {
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
