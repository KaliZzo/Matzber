import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Areas from './components/Areas';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="absolute top-0 w-full z-50 py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-black text-white tracking-tighter">
            מצבר<span className="text-yellow-500">FIX</span>
          </div>
          <div className="bg-slate-800/80 backdrop-blur px-4 py-2 rounded-full border border-slate-700">
             <span className="text-green-400 font-bold text-sm">● זמין עכשיו (24/6)</span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <Features />
        <Areas />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;