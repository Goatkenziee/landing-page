export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Our Landing Page!</h1>
      <p className="mt-4 text-lg">This is a simple landing page built with Next.js, TypeScript, and Tailwind CSS.</p>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
    </main>
  );
}