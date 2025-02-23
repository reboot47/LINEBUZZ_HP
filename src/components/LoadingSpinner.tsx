'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
}

const LoadingSpinner = ({ size = 24 }: LoadingSpinnerProps) => {
  return (
    <motion.div
      className="relative inline-block"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div
        className="absolute inset-0 border-4 border-primary/20 rounded-full"
        style={{ borderWidth: Math.max(2, size / 12) }}
      />
      <div
        className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent"
        style={{ borderWidth: Math.max(2, size / 12) }}
      />
    </motion.div>
  );
};

export default LoadingSpinner;
