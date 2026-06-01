import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}