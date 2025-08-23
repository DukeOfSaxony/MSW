import React, { useEffect, useState, useRef } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header 
      id="navbar" 
      className={`fixed w-full ${isScrolled ? 'py-2 bg-[#f5f5f5] shadow-md' : 'py-3 md:py-4 bg-[#1c1c1c]/70 backdrop-blur-sm'} z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <div className="h-10 md:h-14">
            <img src="/assets/michaels-logo-newer.png" alt="Michael's Shoe Repair" className="h-full object-contain" />
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-end space-x-4">
          <a href="#about" className={`nav-link font-body pb-2 ${isScrolled ? 'text-[#1c1c1c]' : 'text-white'} hover:text-[#ff3e00] transition-colors`}>About</a>
          <a href="#prices" className={`nav-link font-body pb-2 ${isScrolled ? 'text-[#1c1c1c]' : 'text-white'} hover:text-[#ff3e00] transition-colors`}>Prices</a>
          <a href="#gallery" className={`nav-link font-body pb-2 ${isScrolled ? 'text-[#1c1c1c]' : 'text-white'} hover:text-[#ff3e00] transition-colors`}>Gallery</a>
          <a href="#testimonials" className={`nav-link font-body pb-2 ${isScrolled ? 'text-[#1c1c1c]' : 'text-white'} hover:text-[#ff3e00] transition-colors`}>Testimonials</a>
          <a href="#contact" className={`${isScrolled ? 'bg-[#ff3e00]' : 'bg-[#ff3e00] bg-opacity-90'} text-white px-4 py-2 rounded hover:bg-opacity-100 transition-colors shadow-md`}>Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          id="mobile-menu-button" 
          ref={buttonRef}
          className={`md:hidden p-2 rounded-md ${isMenuOpen ? 'bg-[#ff3e00] text-white' : 'bg-white shadow-sm border border-gray-200 text-[#1c1c1c]'} transition-all duration-300 focus:outline-none`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="mobile-menu" ref={menuRef} className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <a 
              href="#about" 
              className="font-body text-[#1c1c1c] hover:bg-[#f5f5f5] hover:text-[#ff3e00] transition-all py-4 px-3 border-b border-gray-200 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#ff3e00] rounded-full mr-3"></span>
              About
            </a>
            <a 
              href="#prices" 
              className="font-body text-[#1c1c1c] hover:bg-[#f5f5f5] hover:text-[#ff3e00] transition-all py-4 px-3 border-b border-gray-200 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#prices")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#ff3e00] rounded-full mr-3"></span>
              Prices
            </a>
            <a 
              href="#gallery" 
              className="font-body text-[#1c1c1c] hover:bg-[#f5f5f5] hover:text-[#ff3e00] transition-all py-4 px-3 border-b border-gray-200 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#ff3e00] rounded-full mr-3"></span>
              Gallery
            </a>
            <a 
              href="#testimonials" 
              className="font-body text-[#1c1c1c] hover:bg-[#f5f5f5] hover:text-[#ff3e00] transition-all py-4 px-3 border-b border-gray-200 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#testimonials")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#ff3e00] rounded-full mr-3"></span>
              Testimonials
            </a>
            <div className="p-3 my-2">
              <a 
                href="#contact" 
                className="bg-[#ff3e00] text-white font-medium px-4 py-3 rounded hover:bg-opacity-90 transition-colors text-center block w-full text-lg shadow-md" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  closeMenu();
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
