import React, { useRef, useEffect, useState } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import hikingImage from '@assets/hiking.jpg';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dynamicTextRef = useRef<HTMLDivElement>(null);
  useAnimationObserver(sectionRef);

  const [displayedText, setDisplayedText] = useState<React.ReactNode>(null);

  useEffect(() => {
    const phrases = [
      "CUT KEYS",
      "CLEAN UGGS",
      "FIX ZIPPERS",
      "REPLACE BATTERIES",
      "CARRY WATCHBANDS",
      "REPAIR WATCHES",
      "SELL UMBRELLAS"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let typing = true;

    function renderTextWithColor(text: string) {
      const parts = text.split(" ");
      
      if (parts.length === 1) {
        return <span><span className="text-[#ff3e00]">{parts[0]}</span></span>;
      } else {
        return (
          <span>
            <span className="text-[#ff3e00]">{parts[0]}</span>
            <span className="text-white">{" " + parts.slice(1).join(" ")}</span>
          </span>
        );
      }
    }

    function type() {
      const currentPhrase = phrases[phraseIndex];
      const partial = currentPhrase.substring(0, charIndex + 1);
      
      setDisplayedText(renderTextWithColor(partial));

      if (typing) {
        charIndex++;
        if (charIndex === currentPhrase.length) {
          typing = false;
          setTimeout(type, 2000);
        } else {
          setTimeout(type, 40);
        }
      } else {
        charIndex--;
        const current = currentPhrase.substring(0, charIndex);
        setDisplayedText(renderTextWithColor(current));
        
        if (charIndex === 0) {
          typing = true;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 100);
        } else {
          setTimeout(type, 25);
        }
      }
    }

    // Start the typing effect
    type();

    // Cleanup function
    return () => {
      // Clear any timeouts
      let id = window.setTimeout(() => {}, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cover bg-center min-h-screen flex items-center" 
      style={{
        backgroundImage: `url(${hikingImage})`,
        backgroundColor: 'rgba(0,0,0,0.65)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4 mt-36">
        <div className="max-w-3xl">
          {/* Typing Animation - Now above the heading with 4rem margin */}
          <div 
            className="flex items-center justify-center w-full mb-16 fade-in text-white" 
            style={{ 
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 700, 
              letterSpacing: '-0.03em',
              fontSize: 'calc(1.95rem + 0.75vw)', /* 25% smaller than calc(2.6rem + 1vw) */
              lineHeight: '1.1',
              textTransform: 'uppercase'
            }}
          >
            <div className="mr-4">WE</div>
            <div ref={dynamicTextRef} style={{ whiteSpace: 'nowrap', minHeight: '1.1em' }}>
              {displayedText}
            </div>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 fade-in stagger-delay-1">
            Craftsmanship in Every Repair
          </h1>
          
          <p className="font-body text-lg md:text-xl text-gray-200 mb-8 max-w-2xl fade-in stagger-delay-2">
            Brooklyn's finest shoe repair service since 1985. Traditional techniques meet modern standards at Michael's Shoe Repair in Carroll Gardens.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in stagger-delay-3">
            <a 
              href="#prices" 
              className="bg-[#ff3e00] text-white font-heading font-semibold px-8 py-3 rounded text-center hover:bg-opacity-90 transition-colors"
            >
              Price List
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white font-heading font-semibold px-8 py-3 rounded text-center hover:bg-white hover:text-[#1c1c1c] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
