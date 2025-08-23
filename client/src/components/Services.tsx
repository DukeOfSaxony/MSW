import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const ServiceCard: React.FC<{
  image: string;
  title: string;
  description: string;
  price: string;
  delay: string;
}> = ({ image, title, description, price, delay }) => (
  <div className={`service-card bg-white rounded-lg shadow-md overflow-hidden fade-in ${delay}`}>
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-heading font-semibold text-xl text-[#1c1c1c] mb-3">{title}</h3>
      <p className="font-body text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-[#ff3e00] font-heading font-semibold">{price}</span>
        <a href="#contact" className="text-[#1c1c1c] font-semibold hover:text-[#ff3e00] transition-colors">Inquire →</a>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  const services = [
    {
      image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Sole Replacement",
      description: "Complete replacement of worn soles with premium materials, extending the life of your favorite shoes.",
      price: "Starting at $45",
      delay: "stagger-delay-1"
    },
    {
      image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Heel Repair & Replacement",
      description: "Expert repair or replacement of damaged heels, restoring stability and appearance.",
      price: "Starting at $25",
      delay: "stagger-delay-2"
    },
    {
      image: "https://images.unsplash.com/photo-1573100925118-870b8efc799d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Leather Restoration",
      description: "Revitalize worn or damaged leather with our specialized cleaning, conditioning, and color restoration techniques.",
      price: "Starting at $35",
      delay: "stagger-delay-3"
    },
    {
      image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Shoe Stretching",
      description: "Custom stretching for a perfect fit, alleviating discomfort in tight shoes without damaging the material.",
      price: "Starting at $20",
      delay: "stagger-delay-1"
    },
    {
      image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Orthopedic Modifications",
      description: "Custom adjustments to accommodate specific foot conditions, improving comfort and support.",
      price: "Starting at $55",
      delay: "stagger-delay-2"
    },
    {
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Premium Sneaker Cleaning",
      description: "Comprehensive cleaning and restoration service specifically for athletic shoes and premium sneakers.",
      price: "Starting at $30",
      delay: "stagger-delay-3"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              price={service.price}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
