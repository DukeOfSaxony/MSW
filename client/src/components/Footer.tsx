import React from 'react';
import michaelsLogo from '@assets/michaels-logo-newer.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-12 mr-3">
                <img src={michaelsLogo} alt="Michael's Shoe Repair" className="h-full" />
              </div>
            </div>
            <p className="font-body text-gray-300 mb-6">
              Brooklyn's premier shoe repair service for over 30 years. Specializing in traditional craftsmanship and modern techniques to extend the life of your favorite footwear.
            </p>
          </div>
          
          {/* Contact Info - Left aligned */}
          <div className="flex flex-col items-start">
            <h3 className="font-heading font-semibold text-lg text-[#ff3e00] mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-[#ff3e00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://maps.google.com/?q=319+Smith+Street+Brooklyn+NY+11231" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-gray-300 hover:text-[#ff3e00] transition-colors"
                >
                  319 Smith Street<br/>Carroll Gardens, Brooklyn<br/>NY 11231
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-[#ff3e00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+17182430288" 
                  className="font-body text-gray-300 hover:text-[#ff3e00] transition-colors"
                >
                  (718) 243-0288
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-[#ff3e00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:info@michaelsshoerepair.com?subject=Repair%20Inquiry" 
                  className="font-body text-gray-300 hover:text-[#ff3e00] transition-colors"
                >
                  info@michaelsshoerepair.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Michael's Shoe Repair. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="/privacy" className="font-body text-sm text-gray-400 hover:text-[#ff3e00] transition-colors">Privacy Policy</a>
              <a href="/terms" className="font-body text-sm text-gray-400 hover:text-[#ff3e00] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
