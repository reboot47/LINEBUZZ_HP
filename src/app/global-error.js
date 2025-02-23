'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              致命的なエラーが発生しました
            </h2>
            <p className="text-gray-600 mb-8">
              申し訳ありませんが、システムエラーが発生しました。
              もう一度お試しください。
            </p>
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl"
            >
              もう一度試す
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
