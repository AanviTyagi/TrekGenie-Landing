import { Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative z-20 bg-[#4FD1C5] text-white pt-[60px] font-display">
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0 pb-[60px]">
        
        {/* Main Row */}
        <div className="flex flex-col xl:flex-row justify-between gap-[40px]">
          
          {/* Left Column */}
          <div className="xl:w-[33.33%] lg:w-[50%] flex flex-col">
            
            {/* Logo */}
            <div className="mb-[30px]">
               <img src={logo} alt="Scoutripper" className="max-w-[180px] h-auto" />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="w-full sm:w-[50%]">
                    <div className="text-[14px]">Toll Free Customer Care</div>
                    <a href="tel:+919888454430" className="block text-[18px] font-medium mt-[5px] hover:underline">+91 98884 54430</a>
                </div>
                <div className="w-full sm:w-[41.66%]">
                    <div className="text-[14px]">Need Support?</div>
                    <a href="mailto:hello@scoutripper.com" className="block text-[18px] font-medium mt-[5px] hover:underline">hello@scoutripper.com</a>
                </div>
            </div>

            {/* Social Media */}
            <div className="mt-[60px]">
                <h5 className="text-[16px] font-medium mb-[10px]">Follow us on social media</h5>
                <div className="flex items-center gap-[20px]">
                    <a href="https://www.facebook.com/scouttripper" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <Facebook size={18} fill="currentColor" className="stroke-none" />
                    </a>
                    <a href="https://www.youtube.com/@scoutripper" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <Youtube size={20} />
                    </a>
                    <a href="https://www.instagram.com/scoutripper" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="xl:w-[50%] lg:w-[50%]">
             <div className="flex flex-col gap-[30px]">
                
                 {/* Newsletter */}
                 <div className="w-full">
                    <h5 className="text-[16px] font-medium mb-[15px]">Get Updates & More</h5>
                    
                    <div className="pb-[30px]">
                        <form action="https://scoutripper.com/newsletter/subscribe" className="relative flex items-center justify-end">
                            <input 
                                className="w-full bg-white rounded-[8px] h-[60px] pl-[20px] pr-[100px] text-slate-900 placeholder:text-slate-500 focus:outline-none" 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                required
                            />
                            <button className="absolute right-0 px-[20px] h-full text-[15px] font-medium text-[#1A2B48] hover:text-teal-600 transition-colors bg-transparent border-l border-transparent">
                                Subscribe
                            </button>
                        </form>
                    </div>
                 </div>

                 {/* Links Row */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                     
                     {/* Community */}
                     <div className="w-full">
                        <h5 className="text-[16px] font-medium mb-[30px]">Community</h5>
                        <div className="flex flex-col gap-[10px]">
                            <a href="https://scoutripper.com/page/about" className="hover:underline">About Us</a>
                            <a href="https://scoutripper.com/page/cleanup-drive" className="hover:underline">Cleanup Drive</a>
                            <a href="https://scoutripper.com/blog/explore/" className="hover:underline">Blog</a>
                            <a href="https://scoutripper.com/blog/gallery/" className="hover:underline">Memories</a>
                            <a href="https://scoutripper.com/blog/trekking-essentials-guide/" target="_blank" rel="noreferrer noopener" className="hover:underline">Trekking Essentials</a>
                            <a href="https://scoutripper.com/page/contact" className="hover:underline">Contact</a>
                        </div>
                     </div>

                     {/* Support */}
                     <div className="w-full">
                        <h5 className="text-[16px] font-medium mb-[30px]">Support</h5>
                        <div className="flex flex-col gap-[10px]">
                            <a href="https://wa.me/+919888454430" className="hover:underline">Chat on Whatsapp</a>
                            <a href="https://scoutripper.com/page/terms-conditions" className="hover:underline">Terms & Conditions</a>
                            <a href="https://scoutripper.com/page/privacy-policy" className="hover:underline">Privacy Policy</a>
                            <a href="https://scoutripper.com/page/cancellations-refund-policy" className="hover:underline">Cancellation & Refund Policy</a>
                        </div>
                     </div>

                     {/* Other Services */}
                     <div className="w-full">
                        <h5 className="text-[16px] font-medium mb-[30px]">Other Services</h5>
                        <div className="flex flex-col gap-[10px]">
                            <a href="https://www.scoutripper.com/tripgenie/" target="_blank" rel="noreferrer noopener" className="hover:underline">Plan with TripGenie</a>
                            <a href="https://www.scoutripper.com/trekgenie/" target="_blank" rel="noreferrer noopener" className="hover:underline">Ask TrekGenie</a>
                            <a href="https://scoutripper.com/compare-treks/" target="_blank" rel="noreferrer noopener" className="hover:underline">Compare Treks</a>
                            <a href="https://scoutripper.com/reviews/" target="_blank" rel="noreferrer noopener" className="hover:underline">Write a Review</a>
                            <a href="https://scoutripper.com/bmicalc/" target="_blank" rel="noreferrer noopener" className="hover:underline">Calculate BMI</a>
                            <a href="https://scoutripper.com/ecogenie/" target="_blank" rel="noreferrer noopener" className="hover:underline">Eco Genie</a>
                        </div>
                     </div>

                 </div>

             </div>
          </div>

        </div>
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-white/20 mt-[20px]">
        <div className="max-w-[1320px] mx-auto px-4 xl:px-0 py-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[15px] font-medium text-center md:text-left">
                Copyright © 2025 by Scoutripper
            </p>
            <p className="text-[15px] font-medium text-center md:text-right flex items-center gap-1">
                Made with <span className="text-xl">❤️</span>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
