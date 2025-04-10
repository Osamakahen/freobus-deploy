import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Link href="/" className="text-[#FFC107] hover:text-[#FFD700] transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
