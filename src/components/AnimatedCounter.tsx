import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}

const AnimatedCounter = ({
  from,
  to,
  duration = 2,
  delay = 0,
  suffix = ''
}: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      delay: delay,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, to, duration, delay]);

  return (
    <motion.span className="tabular-nums">
      {rounded}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
