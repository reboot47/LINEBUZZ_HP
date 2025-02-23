'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: '山田 太郎',
    position: '代表取締役CEO',
    bio: '20年以上のIT業界経験を持ち、多くの企業のデジタル変革を支援してきました。',
    imageUrl: '/images/team/ceo.jpg',
  },
  {
    id: 2,
    name: '佐藤 美咲',
    position: 'CTO',
    bio: 'AI・機械学習の専門家として、革新的な技術ソリューションを提供しています。',
    imageUrl: '/images/team/cto.jpg',
  },
  {
    id: 3,
    name: '田中 健一',
    position: 'デザインディレクター',
    bio: 'ユーザー体験を重視した、魅力的なデザインソリューションを提供します。',
    imageUrl: '/images/team/design-director.jpg',
  },
  {
    id: 4,
    name: '鈴木 直子',
    position: 'マーケティング部長',
    bio: 'データドリブンなマーケティング戦略で、クライアントの成長を支援します。',
    imageUrl: '/images/team/marketing-director.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            チーム
          </h2>
          <p className="text-xl text-gray-600">
            プロフェッショナルなチームメンバー
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">{member.position}</p>
              <p className="text-gray-600">{member.bio}</p>
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
            <span>チーム一覧を見る</span>
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

export default TeamSection;
