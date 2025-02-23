export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          ページが見つかりません
        </h2>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl"
        >
          トップページに戻る
        </a>
      </div>
    </div>
  );
}
