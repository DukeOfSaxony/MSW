import React, { useRef, useState, useEffect } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import beforeAndBootsImage from '@assets/beforeandboots.jpg';
import beforeAndHeelImage from '@assets/beforeandheel.jpg';
import oxImage from '@assets/ox.jpg';
import vibramImage from '@assets/vibram.jpg';
import heelImage from '@assets/heel.jpg';
import blImage from '@assets/bl.jpg';
import brImage from '@assets/br.jpg';
import slImage from '@assets/sl.jpg';
import srImage from '@assets/sr.jpg';

interface GallerySlide {
  image: string;
  title: string;
  description: string;
}

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 4;
  
  useAnimationObserver(sectionRef);

  const slides: GallerySlide[] = [
    {
      image: oxImage,
      title: "Leather Restoration",
      description: "Complete restoration of vintage leather oxfords"
    },
    {
      image: vibramImage,
      title: "Sole Replacement",
      description: "Premium Vibram sole replacement on hiking boots"
    },
    {
      image: heelImage,
      title: "Heel Reconstruction",
      description: "Complete rebuild of damaged designer heels"
    },
    {
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Sneaker Restoration",
      description: "Comprehensive cleaning and color restoration"
    }
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1c1c1c] mb-4 fade-in">Our Craftsmanship</h2>
          <p className="font-body text-gray-700 max-w-2xl mx-auto fade-in stagger-delay-1">
            Browse through our gallery of before and after transformations that showcase our dedication to quality and attention to detail.
          </p>
        </div>
        
        <div className="gallery-container rounded-lg overflow-hidden shadow-lg fade-in stagger-delay-2 relative">
          <div 
            className="gallery-slider flex" 
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)'
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="gallery-slide relative min-w-full">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-64 md:h-96 object-cover" 
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                  <h4 className="font-heading font-semibold text-xl text-white mb-2">{slide.title}</h4>
                  <p className="font-body text-gray-200">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gallery Controls */}
          <button 
            className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors focus:outline-none"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors focus:outline-none"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Gallery Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full bg-white ${index === currentSlide ? 'bg-opacity-50' : 'bg-opacity-30'} focus:outline-none`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Before & After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in stagger-delay-3">
            <div className="p-4 bg-[#1c1c1c]">
              <h4 className="font-heading font-semibold text-lg text-white text-center">Before & After: Boot Restoration</h4>
            </div>
            <div className="grid grid-cols-2">
              <div className="relative">
                <img 
                  src={blImage} 
                  alt="Boot before restoration" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-2 left-2 bg-[#ff3e00] text-white text-xs px-2 py-1 rounded">Before</div>
              </div>
              <div className="relative">
                <img 
                  src={brImage} 
                  alt="Boot after restoration" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-2 right-2 bg-[#ffb340] text-[#1c1c1c] text-xs px-2 py-1 rounded">After</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in stagger-delay-4">
            <div className="p-4 bg-[#1c1c1c]">
              <h4 className="font-heading font-semibold text-lg text-white text-center">Before & After: Sneaker Restore</h4>
            </div>
            <div className="grid grid-cols-2">
              <div className="relative">
                <img 
                  src={srImage} 
                  alt="Sneaker before restoration" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-2 left-2 bg-[#ff3e00] text-white text-xs px-2 py-1 rounded">Before</div>
              </div>
              <div className="relative">
                <img 
                  src={slImage} 
                  alt="Sneaker after restoration" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-2 right-2 bg-[#ffb340] text-[#1c1c1c] text-xs px-2 py-1 rounded">After</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
