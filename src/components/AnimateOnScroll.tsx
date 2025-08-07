// src/components/AnimateOnScroll/AnimateOnScroll.tsx
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  variants?: 'fade-up' | 'scale-in'; // We'll offer two animation styles
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, delay = 0.2, duration = 0.6, variants = 'fade-up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const animationVariants = {
    'fade-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
    },
    'scale-in': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants[variants]}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;