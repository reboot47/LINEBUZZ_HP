'use client';

import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'AIが変える企業の未来',
    excerpt:
      'ビジネスにおけるAI活用の最新トレンドと、企業が取り組むべき施策について解説します。',
    date: '2024.02.20',
    category: 'テクノロジー',
    imageUrl: '/images/blog/ai-future.jpg',
  },
  {
    id: 2,
    title: 'デジタルトランスフォーメーションの成功事例',
    excerpt:
      '実際の企業事例から学ぶ、効果的なDX推進のポイントをご紹介します。',
    date: '2024.02.15',
    category: 'DX',
    imageUrl: '/images/blog/dx-case.jpg',
  },
  {
    id: 3,
    title: '働き方改革とテクノロジー',
    excerpt:
      'テクノロジーを活用した新しい働き方と、その導入のためのステップを解説します。',
    date: '2024.02.10',
    category: '働き方改革',
    imageUrl: '/images/blog/work-style.jpg',
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ブログ
          </h2>
          <p className="text-xl text-gray-600">
            最新のテクノロジートレンドと知見を発信
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <span>続きを読む</span>
                  <svg
                    className="w-5 h-5 ml-2"
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
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
          >
            <span>ブログ一覧を見る</span>
            <svg
              className="w-5 h-5 ml-2"
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
