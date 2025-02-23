'use client';

import { motion } from 'framer-motion';

const CompanySection = () => {
  return (
    <section id="company" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              会社概要
            </h2>
            <p className="text-xl text-gray-600">
              最高品質のデザインとUIを追求する株式会社LINEBUZZ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  会社名
                </h3>
                <p className="text-gray-600">
                  株式会社LINEBUZZ
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  所在地
                </h3>
                <p className="text-gray-600">
                  〒000-0000
                  <br />
                  東京都渋谷区
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  設立
                </h3>
                <p className="text-gray-600">
                  2024年1月
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  事業内容
                </h3>
                <ul className="text-gray-600 list-disc list-inside space-y-2">
                  <li>Webサイト制作</li>
                  <li>アプリケーション開発</li>
                  <li>UI/UXデザイン</li>
                  <li>デジタルコンサルティング</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ミッション
                </h3>
                <p className="text-gray-600">
                  最高品質のデザインとUIを通じて、
                  ユーザーとビジネスの価値を最大化します。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ビジョン
                </h3>
                <p className="text-gray-600">
                  デジタルの力で、より良い未来を創造する
                  グローバルリーディングカンパニーを目指します。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  バリュー
                </h3>
                <ul className="text-gray-600 list-disc list-inside space-y-2">
                  <li>品質へのこだわり</li>
                  <li>革新的な発想</li>
                  <li>ユーザー中心主義</li>
                  <li>持続可能な成長</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
