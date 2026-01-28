import React from 'react';
import { AlertCircle, BookOpen } from 'lucide-react';

const WhyCompare = () => {
  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#4ec5c1]/10 text-[#4ec5c1] text-sm font-bold mb-8">
            <BookOpen size={18} />
            Expert Insight
          </span>
          <h2 className="text-[2.2rem] font-semibold text-[#324b4c] leading-none mb-6">
            Why Comparing Treks Matters ?
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 relative">
            
            {/* Top Section: Same Trek Name */}
            <div className="flex flex-col md:flex-row gap-5 mb-8">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center border border-yellow-100">
                        <AlertCircle size={24} />
                    </div>
                </div>
                <div>
                   <h3 className="text-[1.1rem] font-medium text-slate-900 mb-3">
                        Same Trek Name, Different Experiences
                   </h3>
                   <p className="text-slate-500 leading-relaxed text-lg">
                        Did you know that "Kedarkantha Trek" offered by two different organizers can vary dramatically? 
                        One might be a 4-day beginner-friendly experience, while another could be a challenging 6-day 
                        expedition with summit camping.
                   </p>
                </div>
            </div>

            {/* List Points */}
            <div className="space-y-6 md:pl-[4.25rem] text-slate-600 leading-relaxed text-lg">
                <p>
                    <span className="font-md text-slate-900">The problem with guessing:</span> Most trekkers rely on Instagram reels, random blogs, or word-of-mouth to choose their treks. This often leads to mismatched expectations — picking a trek that's too hard, too easy, or doesn't fit their schedule and budget.
                </p>
                <p>
                    <span className="font-md text-slate-900">Hidden costs are real:</span> Many organizers advertise low base prices but add charges for gear rental, transport, or permits. Without comparison, you might end up paying 30-40% more than expected.
                </p>
                <p>
                    <span className="font-md text-slate-900">Experience matters:</span> The quality of trek leaders, group size, safety protocols, and campsite facilities can make or break your adventure. These details are rarely visible upfront.
                </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 my-10 md:ml-[4.25rem]"></div>

             {/* Footer Statement */}
             <div className="md:pl-[4.25rem]">
                <p className="text-xl font-medium leading-relaxed text-slate-800">
                    <span className="text-teal-500 font-bold">Scoutripper's Compare Tool</span> gives you the clarity you need — so you can focus on the adventure, not the anxiety.
                </p>
             </div>

        </div>
      </div>
    </section>
  );
};

export default WhyCompare;
