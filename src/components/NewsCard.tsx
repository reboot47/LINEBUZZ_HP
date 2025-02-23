import { motion } from 'framer-motion';
import Link from 'next/link';

interface NewsCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  href: string;
  delay?: number;
}

const NewsCard = ({ title, date, category, excerpt, href, delay = 0 }: NewsCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={href} className="block p-6">
        <div className="flex items-center space-x-3 mb-3">
          <time className="text-sm text-gray-500">{date}</time>
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center text-primary font-medium text-sm group">
          続きを読む
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
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;
