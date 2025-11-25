import React from 'react';
import { MapPin } from 'lucide-react';
import { City } from '../types';

const cities: City[] = [
  { name: "תל אביב" },
  { name: "פתח תקוה" },
  { name: "נתניה" },
  { name: "אשדוד" },
  { name: "רמלה / לוד" },
  { name: "איזור השרון" },
  { name: "מודיעין / מכבים" },
  { name: "בת ים" },
  { name: "ראשון לציון" },
  { name: "רמת גן" },
  { name: "גבעתיים" },
  { name: "אור יהודה / יהוד" },
  { name: "חולון" },
  { name: "רחובות" },
  { name: "גדרה" },
  { name: "הרצלייה" }
];

const Areas: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold tracking-wider text-sm uppercase mb-2 block">אנחנו בדרך אליך</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">אזורי חלוקה</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-600 transition-colors"
            >
              <MapPin className="w-5 h-5 text-slate-500 shrink-0" />
              <span className="text-slate-300 font-medium">{city.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-white mb-2">
                הגעה לבית הלקוח תוך שעה
            </p>
            <p className="text-slate-400">
                צור קשר להצעת מחיר ותיאום מיידי
            </p>
        </div>
      </div>
    </section>
  );
};

export default Areas;