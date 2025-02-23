'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ビジネスを
              <br />
              <span className="text-primary">革新</span>する
              <br />
              テクノロジー
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              最先端のテクノロジーで、あなたのビジネスを次のステージへ。
              私たちは、革新的なソリューションで企業の成長をサポートします。
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                お問い合わせ
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/5 transform hover:scale-105 transition-all duration-300"
              >
                サービス一覧
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
              <Image
                src="/hero-image.png"
                alt="LINEBUZZ Technology"
                fill
                className="object-contain z-10"
                priority
              />
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
