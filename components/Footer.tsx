import React from 'react';
import { Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-24 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                ))}
            </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">מעל 10 שנים של שירות</h3>
        <p className="text-slate-400 mb-8">אלפי לקוחות מרוצים נהנים משירות אמין ומקצועי</p>
        
        <div className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} מצבר עד הבית. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
};

export default Footer;