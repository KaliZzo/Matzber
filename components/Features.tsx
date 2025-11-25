import React from 'react';
import { Sun, Shield, Zap, Wrench, Layers, Award } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    title: "מותאמים לאקלים הישראלי",
    description: "המצברים מיוצרים בטכנולוגיות שמתאימות במיוחד לתנאי החום והקור בישראל, מה שמבטיח עמידות גבוהה וביצועים מיטביים לאורך זמן.",
    icon: Sun
  },
  {
    title: "איכות ואמינות",
    description: "שנפ היא חברה ותיקה (נוסדה ב-1951) וציבורית, יצרנית המצברים הגדולה בארץ. המצברים מיוצרים בטכנולוגיות מתקדמות.",
    icon: Award
  },
  {
    title: "מגוון רחב",
    description: "לכל סוגי הרכבים – פרטיים, מסחריים, משאיות, אופנועים, רכבי שטח, מצברי פריקה עמוקה ודגמי Start & Stop.",
    icon: Layers
  },
  {
    title: "שירות ואחריות נרחבים",
    description: "אחריות יצרן מקיפה ושירות בפריסה ארצית רחבה, המספקים שקט נפשי וביטחון מלא לנהג.",
    icon: Shield
  },
  {
    title: "הספק מרבי",
    description: "המצברים מספקים זרם התנעה חזק ואמין, פרמטר חשוב במיוחד למנועים כבדים ולרכבים חדשים.",
    icon: Zap
  },
  {
    title: "דגמים ללא טיפול",
    description: "דגמים רבים הם אטומים (Maintenance-Free) ואינם דורשים מילוי מים מזוקקים או טיפול שוטף.",
    icon: Wrench
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">למה לבחור במצברי שנפ?</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            מצברי שנפ הם מהמובילים והמוכרים ביותר בשוק הישראלי, ומציעים מגוון יתרונות שהופכים אותם לבחירה פופולרית ואמינה.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:bg-slate-750 hover:border-yellow-500/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-700 group-hover:border-yellow-500/50">
                <benefit.icon className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;