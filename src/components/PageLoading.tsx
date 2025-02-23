'use client';

import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface PageLoadingProps {
  isLoading: boolean;
}

const PageLoading = ({ isLoading }: PageLoadingProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="text-center">
            <LoadingSpinner size={48} />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-600"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoading;
