import React from 'react';
import { MousePointerClick, BarChart3, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#324b4c] mb-6">
            How does it work?
          </h2>
          <p className="text-slate-500 text-xl font-sans">
            Three simple steps to find your perfect trek
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 relative max-w-6xl mx-auto">
          
          {/* Step 1 */}
          <div className="relative flex flex-col items-center group">
            <div className="relative mb-10 z-10">
              {/* Main Circle - Light Blue background */}
              <div className="w-44 h-44 rounded-full bg-blue-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <MousePointerClick size={54} className="text-blue-500" />
              </div>
              {/* Number Badge - Matches icon color */}
              <div className="absolute top-0 -left-2 w-12 h-12 rounded-full bg-blue-500 text-white text-lg font-bold flex items-center justify-center shadow-md z-10 border-2 border-white">
                01
              </div>
            </div>
            
            <h3 className="text-2xl font-display font-bold text-[#324b4c] mb-5">
              Select Treks
            </h3>
            <div className="max-w-[240px]">
              <p className="text-slate-500 text-center leading-relaxed font-sans text-[16px]">
                Choose any treks or destinations you're interested in exploring from our vast database.
              </p>
            </div>

            {/* Arrow 1 - Upward Curve with Gaps */}
            <div className="hidden md:block absolute top-[60px] -right-[60%] w-[120%] z-0 pointer-events-none transform -translate-y-1/2">
              <svg className="w-full h-24" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path 
                  d="M40,50 Q100,10 160,40" 
                  fill="none" 
                  stroke="#4FD1C5" 
                  strokeWidth="2.5" 
                  strokeDasharray="6 6" 
                  strokeLinecap="round"
                />
                <path d="M155 35 L162 40 L155 45" fill="none" stroke="#4FD1C5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center group">
            <div className="relative mb-10 z-10">
              {/* Main Circle - Light Teal background */}
              <div className="w-44 h-44 rounded-full bg-teal-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <BarChart3 size={54} className="text-teal-500" />
              </div>
              {/* Number Badge - Matches icon color */}
              <div className="absolute top-0 -left-2 w-12 h-12 rounded-full bg-teal-500 text-white text-lg font-bold flex items-center justify-center shadow-md z-10 border-2 border-white">
                02
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-[#324b4c] mb-5">
              Compare Details
            </h3>
            <div className="max-w-[240px]">
              <p className="text-slate-500 text-center leading-relaxed font-sans text-[16px]">
                See difficulty, duration, cost & inclusions side-by-side to make the best choice.
              </p>
            </div>

            {/* Arrow 2 - Upward Curve with Gaps */}
            <div className="hidden md:block absolute top-[60px] -right-[60%] w-[120%] z-0 pointer-events-none transform -translate-y-1/2">
               <svg className="w-full h-24" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path 
                  d="M40,50 Q100,10 160,40" 
                  fill="none" 
                  stroke="#4FD1C5" 
                  strokeWidth="2.5" 
                  strokeDasharray="6 6" 
                  strokeLinecap="round"
                />
                <path d="M155 35 L162 40 L155 45" fill="none" stroke="#4FD1C5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center group">
            <div className="relative mb-10 z-10">
              {/* Main Circle - Light Green background */}
              <div className="w-44 h-44 rounded-full bg-green-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <CheckCircle2 size={54} className="text-green-500" />
              </div>
              {/* Number Badge - Matches icon color */}
              <div className="absolute top-0 -left-2 w-12 h-12 rounded-full bg-green-500 text-white text-lg font-bold flex items-center justify-center shadow-md z-10 border-2 border-white">
                03
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-[#324b4c] mb-5">
              Choose Confidently
            </h3>
            <div className="max-w-[240px]">
              <p className="text-slate-500 text-center leading-relaxed font-sans text-[16px]">
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
