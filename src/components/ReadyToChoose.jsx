import React from 'react';
import { Mountain, Search, Compass, ArrowRight } from 'lucide-react';

const ReadyToChoose = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden text-center z-10">
      
      {/* 
        REMOVED: Background watermak illustration as requested.
        Keeping the section clean with just the bottom silhouette.
      */}

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#4ec5c1]/10 text-[#4ec5c1] text-sm font-bold mb-8">
           <Mountain size={16} />
           <span>Start Your Journey</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
           Ready to Choose Your <span className="text-[#4FD1C5]">Perfect</span>
           <br />
           <span className="text-[#4FD1C5]">Trek?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Stop guessing, start comparing. Make confident trekking decisions with transparent data from India's largest trekking community.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="https://scoutripper.com/compare-treks/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-14 px-8 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20"
            >
                Start Comparing Now
                <ArrowRight size={20} />
            </a>

            <button className="w-full sm:w-auto h-14 px-8 rounded-lg bg-white border-2 border-teal-400 text-teal-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:border-transparent hover:text-white font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg hover:shadow-teal-500/20">
                <Compass size={20} />
                Explore Destinations
            </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-slate-400 font-medium">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5]"></div>
                No sign-up required
             </div>
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5]"></div>
                100% free to compare
             </div>
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5]"></div>
                Trusted by 50,000+ trekkers
             </div>
        </div>

      </div>

      {/* 
         BOTTOM MOUNTAIN SILHOUETTE 
         Kept as seen in the reference image (jagged bottom edge).
      */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg className="w-full h-12 md:h-24 text-slate-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="opacity-100" />
          </svg>
      </div>

    </section>
  );
};

export default ReadyToChoose;
