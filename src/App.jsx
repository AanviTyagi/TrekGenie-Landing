import { Search, Sparkles, ArrowRight, Mountain, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import logoTeal from './assets/logo-teal.png';
import HowItWorks from './components/HowItWorks';
import CompareFeatures from './components/CompareFeatures';
import WhyCompare from './components/WhyCompare';
import ComparisonVsGuessing from './components/ComparisonVsGuessing';
import TrekGenieInfo from './components/TrekGenieInfo';
import FAQ from './components/FAQ';
import ReadyToChoose from './components/ReadyToChoose';
import InspirationSection from './components/InspirationSection';
import Footer from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effe
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-white">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80" 
          alt="Mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between max-w-[1320px] mx-auto w-full relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={isScrolled ? logoTeal : logo} 
              alt="Scoutripper" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </div>
        

        {/* Desktop Navigation - Centered */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium font-sans ml-12 mr-auto ${isScrolled ? 'text-slate-900' : 'text-gray-300'}`}>
          <button onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })} className={`hover:text-teal-500 transition-colors ${isScrolled ? 'hover:text-teal-600' : 'hover:text-white'}`}>How It Works</button>
          <button onClick={() => document.getElementById('compare-section').scrollIntoView({ behavior: 'smooth' })} className={`hover:text-teal-500 transition-colors ${isScrolled ? 'hover:text-teal-600' : 'hover:text-white'}`}>Compare</button>
          <button onClick={() => document.getElementById('trek-genie-section').scrollIntoView({ behavior: 'smooth' })} className={`hover:text-teal-500 transition-colors ${isScrolled ? 'hover:text-teal-600' : 'hover:text-white'}`}>TrekGenie</button>
          <button onClick={() => document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' })} className={`hover:text-teal-500 transition-colors ${isScrolled ? 'hover:text-teal-600' : 'hover:text-white'}`}>FAQ</button>
          {/* <a href="#" className={`hover:text-teal-500 transition-colors ${isScrolled ? 'hover:text-teal-600' : 'hover:text-white'}`}>Destinations</a> */}
          <a href="https://scoutripper.com/blog/" target="_blank" rel="noopener noreferrer" className={`hover:text-teal-500 transition-colors ${isScrolled ? 'hover:text-teal-600' : 'hover:text-white'}`}>Blog</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://scoutripper.com/compare-treks/" target="_blank" rel="noopener noreferrer" className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border bg-white/5  backdrop-blur-sm transition-colors text-sm font-medium
             ${isScrolled 
                ? 'border-[#4FD1C5] text-[#4FD1C5] hover:bg-teal-50' 
                : 'border-gray-600 text-gray-300 hover:bg-white/10'
             }
          `}>
            <Search size={16} />
            <span>Compare</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 z-[60] relative hover:opacity-80
              ${isScrolled ? 'text-[#4FD1C5]' : 'text-gray-300 hover:text-white'}
            `}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-screen pt-28 px-4 text-center">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1e293b]/80 border border-teal-500/20 backdrop-blur-md text-sm font-semibold text-white shadow-xl">
          <Mountain size={16} className="text-[#4FD1C5]" />
          <span className="font-sans">Scoutripper Compare Treks</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] ml-1 animate-pulse"></span>
        </div>

        {/* Hero Heading */}
        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4 leading-tight">
          Compare Treks. <span className="text-[#4FD1C5]">Choose</span><br />
          <span className="text-[#4FD1C5]">Smarter.</span><br />
          Trek Confidently.
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-light font-sans">
          Compare routes, difficulty, duration, cost & inclusions side-by-side.
          Make informed decisions with transparent data from India's largest trekking community.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 w-full sm:w-auto px-4 sm:px-0">
          <button onClick={() => document.getElementById('compare-section').scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20 font-sans">
            <Search size={20} />
            Compare Treks
            <ArrowRight size={20} />
          </button>
          
          <button className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-white/10 hover:bg-white/20 border border-white text-white font-bold text-lg flex items-center justify-center gap-2 backdrop-blur-sm transition-all font-sans">
            <Sparkles size={20} className="text-white" />
            Ask TrekGenie
          </button>
        </div>

        {/* Floating Pills / Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
          <div className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e293b]/60 border border-slate-700/50 hover:border-slate-500 backdrop-blur-md cursor-default transition-all hover:bg-[#1e293b]/80">
            <Mountain size={16} className="text-teal-400 group-hover:text-[#4FD1C5] transition-colors" />
            <span className="text-sm font-medium text-slate-200 group-hover:text-white font-sans">Kedarkantha</span>
          </div>
          
          <div className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e293b]/60 border border-slate-700/50 hover:border-slate-500 backdrop-blur-md cursor-default transition-all hover:bg-[#1e293b]/80">
            <Mountain size={16} className="text-teal-400 group-hover:text-[#4FD1C5] transition-colors" />
            <span className="text-sm font-medium text-slate-200 group-hover:text-white font-sans">Hampta Pass</span>
          </div>
          
          <div className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e293b]/60 border border-slate-700/50 hover:border-slate-500 backdrop-blur-md cursor-default transition-all hover:bg-[#1e293b]/80">
            <Mountain size={16} className="text-teal-400 group-hover:text-[#4FD1C5] transition-colors" />
            <span className="text-sm font-medium text-gray-300 group-hover:text-white font-sans">Roopkund</span>
          </div>
        </div>

      </main>

      <div className="relative z-20">
        <HowItWorks />
        <CompareFeatures />
        <WhyCompare />
        <ComparisonVsGuessing />
        <TrekGenieInfo />
        <FAQ />
        <InspirationSection />
        <ReadyToChoose />
      </div>
      <Footer />
      
      {/* Mobile Menu Overlay - Moved outside nav to ensure full coverage */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
            <button 
              className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <a href="#how-it-works" className="text-2xl font-medium text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#compare-section" className="text-2xl font-medium text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Compare</a>
            <a href="#trek-genie-section" className="text-2xl font-medium text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>TrekGenie</a>
            <a href="#" className="text-2xl font-medium text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <a href="#" className="text-2xl font-medium text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Destinations</a>
            <a href="#" className="text-2xl font-medium text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
            
            <a 
              href="https://scoutripper.com/compare-treks/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-600 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium mt-4 text-gray-300"
            >
              <Search size={16} />
              <span>Compare</span>
            </a>
        </div>
      )}

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-0 pointer-events-none"></div>
    </div>
  );
}

export default App;
