import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const negatives = [
      "Confusing difficulty labels",
      "Hidden costs & surprise charges",
      "Unverified organizers",
      "No way to compare itineraries",
      "Relying on biased reviews"
  ];

const positives = [
      "Clear side-by-side comparison",
      "Transparent pricing & inclusions",
      "Verified trek leaders",
      "Day-by-day itinerary breakdown",
      "Community-driven honest reviews"
  ];

const ComparisonVsGuessing = () => {

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[2.2rem] font-display font-semibold text-[#324b4c] leading-none mb-4">
            Comparison vs Guessing
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-sans">
            See the difference smart comparison makes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Without Comparing */}
            <div className="bg-red-50/50 rounded-3xl p-8 md:p-12 border border-red-100 relative overflow-hidden group hover:bg-red-50 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xl font-bold flex-shrink-0">
                        <XCircle size={28} />
                     </div>
                     <h3 className="text-2xl font-display font-bold text-slate-900">Without Comparing</h3>
                </div>
                
                <ul className="space-y-6">
                    {negatives.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <XCircle className="text-red-400 mt-1 flex-shrink-0" size={20} />
                            <span className="text-slate-600 font-medium text-lg font-sans">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* With Scoutripper */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-teal-100 shadow-xl shadow-teal-900/5 relative overflow-hidden group hover:border-teal-200 transition-all duration-300">
                 {/* Decorative background blur */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xl font-bold flex-shrink-0">
                        <CheckCircle2 size={28} />
                     </div>
                     <h3 className="text-2xl font-display font-bold text-slate-900">With Scoutripper</h3>
                </div>
                
                <ul className="space-y-6">
                    {positives.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-slate-700 font-bold text-lg font-sans">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonVsGuessing;
