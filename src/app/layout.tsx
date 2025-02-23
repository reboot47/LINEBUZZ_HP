import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku-gothic-new",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | 株式会社LINEBUZZ',
    default: '株式会社LINEBUZZ - 革新的なテクノロジーソリューション',
  },
  description: '株式会社LINEBUZZは、最新のテクノロジーとクリエイティブな発想で、ビジネスの可能性を広げます。',
  keywords: ['LINEBUZZ', 'テクノロジー', 'デジタル', 'イノベーション', 'ビジネスソリューション'],
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://linebuzz.co.jp",
    siteName: "株式会社LINEBUZZ",
    title: "株式会社LINEBUZZ - ビジネスを加速するソリューション",
    description: "株式会社LINEBUZZは、最新のテクノロジーを活用したビジネスソリューションを提供し、お客様のビジネスの成長と成功をサポートします。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社LINEBUZZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社LINEBUZZ - ビジネスを加速するソリューション",
    description: "株式会社LINEBUZZは、最新のテクノロジーを活用したビジネスソリューションを提供し、お客様のビジネスの成長と成功をサポートします。",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${zenKakuGothicNew.variable}`}
    >
      <body className="min-h-screen flex flex-col text-gray-900 font-noto">
        {children}
      </body>
    </html>
  );
}
