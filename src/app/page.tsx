import dynamic from 'next/dynamic';

// Import the Home component with SSR disabled to avoid server-side rendering issues
const Home = dynamic(() => import('../components/Home'), { ssr: false });

export default function Page() {
  return <Home />;
} 