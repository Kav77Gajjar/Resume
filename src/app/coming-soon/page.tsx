export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">This service will be available soon. Stay tuned for updates!</p>
        <a href="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Go Back Home</a>
      </div>
    </div>
  );
}
