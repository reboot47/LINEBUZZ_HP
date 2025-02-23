'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'ホーム', href: '#' },
    { label: 'サービス', href: '#services' },
    { label: 'ニュース', href: '#news' },
    { label: 'ブログ', href: '#blog' },
    { label: '会社概要', href: '#company' },
    { label: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-primary">
            LINEBUZZ
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 h-5 relative">
              <span
                className={`absolute w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-2' : 'top-0'
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-gray-800 top-2 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-2' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
