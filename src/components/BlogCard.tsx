import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  thumbnail: string;
  slug: string;
  delay?: number;
}

const BlogCard = ({
  title,
  excerpt,
  category,
  date,
  author,
  thumbnail,
  slug,
  delay = 0
}: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
          <div className="absolute inset-0 bg-primary/10" />
          {/* 画像が用意できたら以下のコメントを解除してください */}
          {/* <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          /> */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-primary/80 rounded-full">
              {category}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <div className="flex items-center space-x-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                {/* <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <span>{author.name}</span>
            </div>
          </div>

          <h3 className="text-xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-600 line-clamp-2">
            {excerpt}
          </p>

          <div className="pt-2 flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-200">
            続きを読む
            <svg
              className="w-4 h-4 ml-1"
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
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
