import React from 'react';
import { Heart, Home, Building2, PenTool, Palette, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Home size={32} />,
    title: "Residential Design",
    description: "Comprehensive interior design solutions for homes, apartments, and private residences.",
    pricing: "Starting at $2,500"
  },
  {
    icon: <Building2 size={32} />,
    title: "Commercial Design",
    description: "Strategic design for offices, retail spaces, restaurants, and hospitality environments.",
    pricing: "Starting at $5,000"
  },
  {
    icon: <PenTool size={32} />,
    title: "Custom Furniture",
    description: "Bespoke furniture design and production to perfectly fit your space and style.",
    pricing: "Custom quotes"
  },
  {
    icon: <Palette size={32} />,
    title: "Color Consultation",
    description: "Expert color scheme development to enhance mood, function, and aesthetic appeal.",
    pricing: "Starting at $500"
  },
  {
    icon: <Heart size={32} />,
    title: "Space Planning",
    description: "Optimizing layout and flow for maximum functionality and comfort.",
    pricing: "Starting at $1,200"
  },
  {
    icon: <ArrowRight size={32} />,
    title: "Project Management",
    description: "Full-service oversight of your design project from concept to completion.",
    pricing: "15% of project cost"
  }
];

const process = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with an in-depth discussion about your vision, needs, and budget."
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Our team creates preliminary designs and mood boards based on your requirements."
  },
  {
    number: "03",
    title: "Design Refinement",
    description: "We refine the concepts based on your feedback until the design is perfect."
  },
  {
    number: "04",
    title: "Implementation",
    description: "We coordinate with contractors and vendors to bring the design to life."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-widest mb-2 reveal">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 reveal reveal-delay-1">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 reveal reveal-delay-2">
            We provide a comprehensive range of interior design services tailored to meet your specific needs and exceed your expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="service-card p-6 bg-secondary rounded-lg reveal"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="text-xl font-playfair font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-primary font-medium">{service.pricing}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-primary text-white rounded-xl p-8 md:p-12 mb-20 reveal">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-4">
              Our Design Process
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              We follow a structured yet flexible process to ensure each project is completed efficiently and to the highest standard.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.number} 
                className="relative reveal"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="text-5xl font-playfair font-bold text-accent/30 mb-2">
                  {step.number}
                </div>
                <h4 className="text-xl font-playfair font-medium mb-2">{step.title}</h4>
                <p className="text-white/70">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2">
                    <ArrowRight size={24} className="text-accent/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center reveal">
          <h3 className="text-2xl font-playfair font-semibold mb-8">
            Ready to Transform Your Space?
          </h3>
          <Link 
            to="/consultation" 
            className="bg-accent hover:bg-accent-light text-primary font-medium px-8 py-3 rounded transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
