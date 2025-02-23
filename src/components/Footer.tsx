'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LINEBUZZ</h3>
            <p className="text-gray-400">
              最新のテクノロジーとクリエイティブな発想で、
              ビジネスの可能性を広げます。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Webサイト制作
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  アプリケーション開発
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  UI/UXデザイン
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  コンサルティング
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <a href="#company" className="text-gray-400 hover:text-white transition-colors">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-colors">
                  ニュース
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  ブログ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <p className="text-gray-400 mb-2">
              〒000-0000
              <br />
              東京都渋谷区
            </p>
            <p className="text-gray-400">
              Tel: 03-0000-0000
              <br />
              Email: info@linebuzz.co.jp
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {currentYear} LINEBUZZ Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
