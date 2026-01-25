import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
      question: "What is Scoutripper's Compare Treks tool?",
      answer: "Compare Treks is a free tool that lets you compare multiple treks side-by-side. You can see difficulty levels, duration, cost, inclusions, altitude, and reviews all in one place — helping you make an informed decision before booking."
    },
    {
      question: "How does TrekGenie work?",
      answer: "TrekGenie is our AI-powered assistant that recommends treks based on your fitness level, preferred season, budget, and travel goals. Simply tell it what you're looking for, and it'll suggest the best options for you to compare."
    },
    {
      question: "Is Scoutripper free to use?",
      answer: "Yes! Browsing treks, comparing options, and using TrekGenie are completely free. You only pay when you decide to book a trek through one of our verified organizers."
    },
    {
      question: "How are trek leaders verified?",
      answer: "All trek leaders on Scoutripper go through a verification process that includes experience validation, safety certifications, and community reviews. Only leaders who meet our quality standards are featured on the platform."
    },
    {
      question: "Can I trust the reviews on Scoutripper?",
      answer: "Absolutely. All reviews come from verified trekkers who have completed the trek. We don't allow fake or incentivized reviews — what you see is genuine feedback from the trekking community."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Scoutripper is beginner-friendly! Use our difficulty filters to find easy treks, and TrekGenie can recommend options specifically suited for first-time trekkers. Each trek listing includes detailed information about fitness requirements."
    },
    {
      question: "What should I pack for a trek?",
      answer: "We provide a comprehensive packing list for each trek. Generally, you'll need good trekking shoes, warm layers, a backpack, and personal essentials. You can find detailed packing guides on our blog."
    },
    {
      question: "How do cancellations work?",
      answer: "Cancellation policies vary by organizer. You can view the specific cancellation policy on each trek's details page before booking. We strive to be transparent so you can book with confidence."
    }
  ];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section id="faq-section" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Gradient Effect - Subtle top fade */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent opacity-60"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          { <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#E0F7FA] text-[#38B2AC] text-[16px] font-bold tracking-normal mb-8">
            <HelpCircle size={18} />
            Got Questions?
          </span> }
          <h2 className="text-[2.2rem] font-display font-semibold text-[#324b4c] leading-none mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg font-sans">
            Everything you need to know about Scoutripper and comparing treks
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
            {visibleFaqs.map((item, index) => (
                <div 
                    key={index}
                    className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden ${
                        openIndex === index 
                            ? 'border border-[#4FD1C5] shadow-sm' 
                            : 'shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-transparent'
                    }`}
                >
                    <button 
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between p-6 md:px-8 text-left focus:outline-none group"
                    >
                        <span className="text-[1.1rem] font-medium font-display text-slate-900 pr-8">
                            {item.question}
                        </span>
                        <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#4FD1C5]' : 'text-slate-400 group-hover:text-teal-500'}`}>
                            <ChevronDown size={20} strokeWidth={2.5} />
                        </div>
                    </button>
                    
                    <div 
                        className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="px-6 md:px-8 pb-6 text-slate-500 font-sans leading-relaxed text-[14px] pt-0">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Footer Actions: Show More or Contact Card */}
        <div className="mt-8 flex justify-center">
          {!showAll ? (
            <button 
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 text-slate-900 font-bold text-sm tracking-wide bg-transparent hover:opacity-75 transition-opacity"
            >
              Show more
              <ChevronDown size={16} />
            </button>
          ) : (
            <div className="flex flex-col items-center gap-6 w-full animate-fade-in">
                <div className="w-full bg-white rounded-2xl border border-teal-500/30 p-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
                  <div className="text-center md:text-left">
                    <h4 className="text-slate-900 font-bold text-sm mb-1">Frequently Asked Questions</h4>
                    <p className="text-slate-500 text-sm">We would be happy to help you with whatever questions you have.</p>
                  </div>
                  <button className="px-6 py-2.5 rounded-xl bg-[#4FD1C5] hover:bg-teal-500 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-teal-500/20 whitespace-nowrap">
                    Ask us Anything
                    <span className="text-lg">→</span>
                  </button>
                </div>

                <button 
                  onClick={() => setShowAll(false)}
                  className="flex items-center gap-2 text-slate-900 font-bold text-sm tracking-wide bg-transparent hover:opacity-75 transition-opacity"
                >
                  Show less
                  <ChevronUp size={16} />
                </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
