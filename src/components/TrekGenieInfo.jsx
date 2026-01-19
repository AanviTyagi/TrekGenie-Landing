import React from 'react';
import { Sparkles, ArrowRight, Zap, MessageCircle } from 'lucide-react';

const TrekGenieInfo = () => {
  return (
    <section id="trek-genie-section" className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-0 w-full h-full max-w-3xl bg-gradient-to-r from-teal-50/50 to-cyan-50/50 bg-opacity-30 blur-3xl rounded-full -translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-bold tracking-wide mb-8">
              <Sparkles size={16} />
              AI-Powered Assistant
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse ml-1"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Not Sure What to <br />
              <span className="text-[#2DD4BF]">Compare?</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-sans">
              TrekGenie is your personal AI trekking assistant. Just tell it your fitness level, preferred season, and travel goals — and it'll suggest the perfect treks for you to compare.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                "Personalized trek recommendations",
                "Based on your fitness & experience",
                "Season-aware suggestions",
                "Budget-conscious options"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center flex-shrink-0">
                    <Zap size={18} fill="currentColor" />
                  </div>
                  <span className="text-slate-700 font-medium text-lg font-sans">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="h-14 px-8 rounded-xl bg-[#2DD4BF] hover:bg-teal-400 text-white font-bold text-lg flex items-center gap-2 transform transition-all hover:scale-105 shadow-xl shadow-teal-500/20">
              <Sparkles size={20} fill="currentColor" />
              Ask TrekGenie
              <ArrowRight size={20} />
            </button>
          </div>

          {/* UI Mockup Side */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[576px] h-[568px]">
              
              {/* Messages Container */}
              <div className="bg-white rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 p-6 md:p-8 h-full flex flex-col relative z-10 overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center gap-4 border-b border-slate-50 pb-5 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#2DD4BF] p-0.5 relative">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <Sparkles className="text-[#2DD4BF]" size={22} />
                    </div>
                    <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full border-[2px] border-white"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg font-display">TrekGenie</h4>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Online • Ready to help
                    </span>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-grow flex flex-col justify-center min-h-0 pt-8 pb-4 space-y-8">
                  
                  {/* User Msg */}
                  <div className="flex justify-end mt-10">
                    <div className="bg-[#4AC9C5] text-white px-6 py-3 rounded-2xl rounded-br-sm max-w-md text-[15px] font-small leading-relaxed shadow-sm">
                      I'm a beginner looking for a 4-5 day trek in March. Any suggestions?
                    </div>
                  </div>

                  {/* AI Msg */}
                  <div className="flex justify-start w-full">
                    <div className="bg-[#F8FAFC] text-slate-600 p-4 rounded-2xl rounded-tl-sm w-full text-[15px] font-medium leading-relaxed border border-slate-50">
                      <p className="mb-2 font-sans text-slate-700">Great choice! Based on your criteria, I recommend comparing these treks:</p>
                      
                      <div className="space-y-1">
                          <div className="bg-white py-2 px-2 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 group cursor-default transition-all hover:shadow-md hover:border-teal-100">
                             <span className="w-7 h-7 rounded-full bg-teal-50 text-teal-600 text-sm font-bold flex items-center justify-center group-hover:bg-teal-100 transition-colors">1</span>
                             <span className="font-bold text-slate-700 font-sans text-[16px] group-hover:text-teal-700 transition-colors">Kedarkantha</span>
                         </div>
                          <div className="bg-white py-2 px-2 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 group cursor-default transition-all hover:shadow-md hover:border-teal-100">
                             <span className="w-7 h-7 rounded-full bg-teal-50 text-teal-600 text-sm font-bold flex items-center justify-center group-hover:bg-teal-100 transition-colors">2</span>
                             <span className="font-bold text-slate-700 font-sans text-[16px] group-hover:text-teal-700 transition-colors">Brahmatal</span>
                         </div>
                          <div className="bg-white py-2 px-2 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 group cursor-default transition-all hover:shadow-md hover:border-teal-100">
                             <span className="w-7 h-7 rounded-full bg-teal-50 text-teal-600 text-sm font-bold flex items-center justify-center group-hover:bg-teal-100 transition-colors">3</span>
                             <span className="font-bold text-slate-700 font-sans text-[16px] group-hover:text-teal-700 transition-colors">Kuari Pass</span>
                         </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Input Area */}
                <div className="mt-2 pt-4 border-t border-slate-50 flex-shrink-0">
                    <a 
                      href="https://scoutripper.com/trekgenie/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#F8FAFC] hover:bg-slate-100 transition-colors cursor-pointer rounded-2xl h-[52px] px-6 flex items-center justify-between text-slate-400 text-[15px] group border border-transparent hover:border-slate-200"
                    >
                        <div className="flex items-center gap-3 group-hover:text-slate-500 transition-colors">
                            <MessageCircle size={18} />
                            <span>Ask TrekGenie anything...</span>
                        </div>
                        <ArrowRight size={18} className="text-slate-400 group-hover:text-[#2DD4BF] group-hover:translate-x-1 transition-all" />
                    </a>
                </div>

              </div>
              
              {/* Decorative elements behind phone */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-40 animate-pulse delay-700"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrekGenieInfo;
