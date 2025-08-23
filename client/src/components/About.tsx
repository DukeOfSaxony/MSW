import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1c1c1c] mb-6 slide-from-left">
              Tradition Meets Excellence
            </h2>
            <p className="font-body text-gray-700 mb-6 slide-from-left stagger-delay-1">
              For over 30 years, Michael's Shoe Repair has been a cornerstone of the Carroll Gardens community in Brooklyn at 319 Smith Street. 
              Our commitment to quality craftsmanship and traditional repair techniques has earned us a reputation as the 
              neighborhood's most trusted cobbler.
            </p>
            <p className="font-body text-gray-700 mb-6 slide-from-left stagger-delay-2">
              What sets us apart is our dedication to preserving the art of shoe repair while embracing modern techniques 
              that extend the life of your favorite footwear. Every pair of shoes that comes through our door receives 
              the same meticulous attention to detail.
            </p>
            <div className="flex items-center slide-from-left stagger-delay-3">
              <img 
                src="/assets/michael.jpg" 
                alt="Michael Davidov" 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#ff3e00]" 
              />
              <div className="ml-4">
                <p className="font-heading font-semibold text-[#1c1c1c]">Michael Davidov</p>
                <p className="text-sm text-gray-600">Master Cobbler & Owner</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 slide-from-right">
            <div className="relative">
              <img 
                src="/assets/store.jpg" 
                alt="Michael's Shoe Repair at 319 Smith Street" 
                className="rounded-lg shadow-lg w-full" 
              />
              <div className="absolute -bottom-6 -left-6 bg-[#ff3e00] p-4 rounded shadow-md hidden md:block">
                <p className="font-heading font-bold text-white text-3xl">30+</p>
                <p className="text-white">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
