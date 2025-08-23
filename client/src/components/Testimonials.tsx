import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import yelpLogo from '@assets/yelp.png';
import googleLogo from '@assets/google.png';

interface TestimonialProps {
  text: string;
  name: string;
  image: string;
  delay: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, name, image, delay }) => (
  <div className={`bg-[#f5f5f5] rounded-lg shadow-md p-6 relative scale-in ${delay}`}>
    <div className="absolute -top-4 left-6 text-[#ff3e00]" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
      </svg>
    </div>
    <div className="pt-6">
      <p className="font-body text-gray-700 mb-6 italic">{text}</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <p className="font-heading font-semibold text-[#1c1c1c]">{name}</p>
          <div className="flex text-[#ff3e00]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  const testimonials = [
    {
      text: "\"Michael saved my favorite boots that I thought were beyond repair. The craftsmanship is impeccable, and they look better than when I first bought them. I won't trust my shoes with anyone else.\"",
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: ""
    },
    {
      text: "\"I have a collection of vintage shoes that I treasure, and Michael is the only person I trust with them. His attention to detail and knowledge of traditional techniques is unmatched in Brooklyn.\"",
      name: "Robert Chen",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: "stagger-delay-1"
    },
    {
      text: "\"After trying several shoe repair shops in NYC, I finally found Michael. The orthopedic adjustments he made to my work shoes completely eliminated my foot pain. True craftsmanship and excellent service!\"",
      name: "Jennifer Martinez",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: "stagger-delay-2"
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1c1c1c] mb-4 fade-in">
            What Our Customers Say
          </h2>
          <p className="font-body text-gray-700 max-w-2xl mx-auto fade-in stagger-delay-1">
            Don't just take our word for it. Here's what our loyal customers have to say about our craftsmanship and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              image={testimonial.image}
              delay={testimonial.delay}
            />
          ))}
        </div>
        
        {/* Review Platform Links */}
        <div className="mt-12 text-center">
          <p className="font-body text-gray-700 mb-6 fade-in stagger-delay-3">
            Read more reviews from happy customers on:
          </p>
          <div className="flex flex-wrap justify-center gap-12 fade-in stagger-delay-4">
            <a 
              href="https://www.yelp.com/biz/michaels-shoe-repair-brooklyn-2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform hover:scale-105"
            >
              <img src={yelpLogo} alt="Yelp Reviews" className="h-12" />
            </a>
            <a 
              href="https://www.google.com/maps/place/Michael's+Shoe+Repair/@40.681102,-73.9966506,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25a5768993891:0xd8f03f82d260f4c7!8m2!3d40.681102!4d-73.9940757!16s%2Fg%2F11c607674q?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform hover:scale-105"
            >
              <img src={googleLogo} alt="Google Reviews" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
