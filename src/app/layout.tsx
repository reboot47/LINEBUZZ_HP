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
  title: "株式会社LINEBUZZ - ビジネスを加速するソリューション",
  description: "株式会社LINEBUZZは、最新のテクノロジーを活用したビジネスソリューションを提供し、お客様のビジネスの成長と成功をサポートします。",
  keywords: "LINEBUZZ, ビジネスソリューション, テクノロジー, イノベーション, デジタルトランスフォーメーション",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  backgroundColor: "#ffffff",
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
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-noto">
        {children}
      </body>
    </html>
  );
}
