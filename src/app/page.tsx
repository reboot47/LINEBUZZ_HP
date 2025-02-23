'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';

// Dynamic imports for better performance
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <SectionLoader />,
});

const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <SectionLoader />,
});

const CompanySection = dynamic(() => import('@/components/CompanySection'), {
  loading: () => <SectionLoader />,
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <SectionLoader />,
});

const NewsSection = dynamic(() => import('@/components/NewsSection'), {
  loading: () => <SectionLoader />,
});

const TeamSection = dynamic(() => import('@/components/TeamSection'), {
  loading: () => <SectionLoader />,
});

const AchievementsSection = dynamic(() => import('@/components/AchievementsSection'), {
  loading: () => <SectionLoader />,
});

const BlogSection = dynamic(() => import('@/components/BlogSection'), {
  loading: () => <SectionLoader />,
});

const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), {
  ssr: false,
});

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <LoadingSpinner size={40} />
  </div>
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <NewsSection />
        <AchievementsSection />
        <BlogSection />
        <CompanySection />
        <TeamSection />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
