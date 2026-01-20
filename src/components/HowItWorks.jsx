import React from 'react';
import { MousePointerClick, BarChart3, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#E0F7FA] text-[#38B2AC] text-[16px] font-bold tracking-normal mb-8">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Three simple steps to find your perfect trek
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

          {/* Step 1 */}
          <div className="relative group">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-blue-500/20 border-b border-x border-stone-100 border-t-4 border-t-transparent hover:border-t-blue-500 h-full transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-10 h-10 rounded-tl-2xl rounded-br-2xl bg-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-sm z-10 transition-colors duration-300 group-hover:bg-blue-500">
                1
              </div>
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                <MousePointerClick size={32} />
              </div>
              <h3 className="text-[1.1rem] font-display font-medium text-slate-900 mb-3">
                Select Treks
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-sans">
                Choose any treks or destinations you're interested in exploring from our vast database.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-teal-500/20 border-b border-x border-stone-100 border-t-4 border-t-transparent hover:border-t-teal-500 h-full transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-10 h-10 rounded-tl-2xl rounded-br-2xl bg-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-sm z-10">
                2
              </div>
              <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20 transition-transform duration-300 group-hover:scale-110">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-[1.1rem] font-display font-medium text-slate-900 mb-3">
                Compare Details
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-sans">
                See difficulty, duration, cost & inclusions side-by-side to make the best choice.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-green-500/20 border-b border-x border-stone-100 border-t-4 border-t-transparent hover:border-t-green-500 h-full transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-10 h-10 rounded-tl-2xl rounded-br-2xl bg-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-sm z-10 transition-colors duration-300 group-hover:bg-green-500">
                3
              </div>
              <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 transition-transform duration-300 group-hover:scale-110">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-[1.1rem] font-display font-medium text-slate-900 mb-3">
                Choose Confidently
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-sans">
                Pick the trek that fits your fitness level, budget, and adventure goals perfectly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
