import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 z-50">
      <div className="container mx-auto max-w-4xl flex gap-4">
        <a 
          href="https://wa.me/972533966768"
          className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
        <a 
          href="tel:+972533966768"
          className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
        >
          <Phone className="w-5 h-5" />
          <span>חייג עכשיו</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;