import React from 'react';
import { Phone, MessageCircle, Clock, BatteryCharging, ShieldCheck, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold border border-yellow-500/20">
              <Clock className="w-4 h-4" />
              <span>הגעה לבית הלקוח תוך שעה</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white">
              מצבר <span className="text-yellow-500">עד הבית</span>
              <br />
              <span className="text-3xl lg:text-4xl text-slate-300 font-bold">תוך 60 דקות אצלך</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0">
              שירות החלפת מצברים לרכב עד הבית באזור המרכז. 
              זמינות 24/6 (לא בשבת). מצברי שנפ מקוריים עם אחריות.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="tel:+972533966768" 
                className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-yellow-500/20 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                <span>שיחה בטלפון</span>
              </a>
              <a 
                href="https://wa.me/972533966768" 
                className="flex items-center justify-center gap-3 bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-8 rounded-xl transition-all border border-slate-600 hover:border-slate-500"
              >
                <MessageCircle className="w-6 h-6 text-green-400" />
                <span>צ'אט בווצאפ</span>
              </a>
            </div>
             
             {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 text-sm text-slate-400 font-medium">
               <div className="flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-blue-400" />
                 <span>אחריות לשנה (אופציה לשנתיים)</span>
               </div>
               <div className="flex items-center gap-2">
                 <BatteryCharging className="w-5 h-5 text-green-400" />
                 <span>מצברי שנפ מקוריים</span>
               </div>
               <div className="flex items-center gap-2">
                 <MapPin className="w-5 h-5 text-red-400" />
                 <span>פריסה רחבה במרכז</span>
               </div>
            </div>

          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
             <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] bg-slate-800/50 rounded-3xl border border-slate-700 p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                {/* Visual Representation of Battery Service */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-yellow-500/5 rounded-3xl"></div>
                {/* Prefer a bundled asset (src/assets/battery.png) when present — otherwise fall back to public/battery.png */}
                {
                  (() => {
                    // Use Vite's import.meta.glob to check for a bundled image at build time.
                    // If the file isn't present in the repository this will still work — we fall back to /battery.png
                    const assets = import.meta.glob('../assets/battery.png', { eager: true, as: 'url' }) as Record<string, string | undefined>;
                    const bundled = assets['../assets/battery.png'];
                    const src = bundled ?? '/battery.png';
                    return (
                      <img src={src} alt="מצבר" className="w-40 h-40 lg:w-64 lg:h-64 mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] object-contain" />
                    );
                  })()
                }
                <h3 className="text-2xl font-bold text-white mb-2">מצברי שנפ איכותיים</h3>
                <p className="text-slate-400 mb-6">מותאם לאקלים הישראלי, עמידות גבוהה</p>
                
                <div className="bg-slate-900/80 backdrop-blur border border-slate-700 p-4 rounded-xl w-full max-w-xs">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm">זמן הגעה משוער</span>
                        <span className="text-green-400 font-bold text-sm">מיידי</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[85%] rounded-full animate-pulse"></div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;