'use client';

import { motion } from 'framer-motion';

const news = [
  {
    id: 1,
    title: '新サービス「AIソリューション」の提供を開始',
    date: '2024.02.20',
    category: 'サービス',
    excerpt:
      '最新のAI技術を活用した企業向けソリューションの提供を開始しました。',
  },
  {
    id: 2,
    title: '東京本社オフィスを移転',
    date: '2024.02.15',
    category: 'お知らせ',
    excerpt:
      '事業拡大に伴い、東京本社オフィスを渋谷区に移転いたしました。',
  },
  {
    id: 3,
    title: '採用情報を更新しました',
    date: '2024.02.10',
    category: '採用',
    excerpt:
      '2024年度の新卒採用およびキャリア採用の情報を更新いたしました。',
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ニュース
          </h2>
          <p className="text-xl text-gray-600">
            最新のお知らせをご覧いただけます
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 last:mb-0"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <time className="text-sm text-gray-500">{item.date}</time>
                  <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.excerpt}</p>
              </div>
            </motion.div>
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
            <span>ニュース一覧を見る</span>
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

export default NewsSection;
