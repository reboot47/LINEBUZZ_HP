'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

const AnimatedCounter = ({ value, suffix = '' }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    motionValue.set(value);
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [motionValue, springValue, value]);

  return (
    <motion.span className="tabular-nums">
      {displayValue}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
