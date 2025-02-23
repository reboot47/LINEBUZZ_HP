import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 text-primary font-medium text-sm flex items-center group"
      >
        詳しく見る
        <svg
          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
