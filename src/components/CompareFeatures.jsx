import React from 'react';
import { TrendingUp, Clock, Mountain, Sun, Wallet, Users, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp size={24} />,
    color: "bg-orange-500",
    title: "Difficulty & Grade",
    desc: "Compare fitness requirements and technical difficulty across treks."
  },
  {
    icon: <Clock size={24} />,
    color: "bg-blue-600",
    title: "Duration & Itinerary",
    desc: "See day-by-day breakdowns and total trekking time instantly."
  },
  {
    icon: <Mountain size={24} />,
    color: "bg-teal-500",
    title: "Altitude & Terrain",
    desc: "Understand elevation gains and specific trail conditions."
  },
  {
    icon: <Sun size={24} />,
    color: "bg-yellow-500",
    title: "Best Season",
    desc: "Know the ideal months to visit for clear views and safety."
  },
  {
    icon: <Wallet size={24} />,
    color: "bg-emerald-500",
    title: "Cost & Inclusions",
    desc: "Transparent pricing analysis with detailed inclusion breakdowns."
  },
  {
    icon: <Users size={24} />,
    color: "bg-purple-500",
    title: "Leaders & Reviews",
    desc: "Community ratings and verified trek leader profiles."
  }
];

const CompareFeatures = () => {

  return (
    <section id="compare-section" className="py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#4ec5c1]/10 text-[#4ec5c1] text-sm font-bold mb-8">
            Comprehensive Data
          </span>
          <h2 className="text-[2.2rem] font-semibold text-[#324b4c] leading-none mb-6">
            What You Can Compare ?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to make an informed decision, all in one place
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-stone-100 flex flex-col items-start text-left hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-full ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-gray-200`}>
                {feature.icon}
              </div>
              <h3 className="text-[1.1rem] font-medium text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a 
            href="https://scoutripper.com/compare-treks/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-14 px-10 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-teal-500/20"
          >
            Start Comparing Now
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CompareFeatures;
