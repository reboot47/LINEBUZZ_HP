'use client';

import { motion } from 'framer-motion';

const achievements = [
  {
    id: 1,
    number: '1000+',
    label: 'クライアント数',
    description: '多くの企業様にご利用いただいています',
  },
  {
    id: 2,
    number: '95%',
    label: '顧客満足度',
    description: '高品質なサービスを提供しています',
  },
  {
    id: 3,
    number: '50+',
    label: '専門家チーム',
    description: '経験豊富な専門家が在籍しています',
  },
  {
    id: 4,
    number: '10年',
    label: '業界経験',
    description: '確かな実績と信頼があります',
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            実績
          </h2>
          <p className="text-xl text-gray-600">
            私たちの成長の軌跡
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">
                  {achievement.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {achievement.label}
              </h3>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
