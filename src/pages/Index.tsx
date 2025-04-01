
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsShowcase from "../components/ProjectsShowcase";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set up scroll animations
    const setupScrollAnimations = () => {
      const revealElements = document.querySelectorAll(".reveal");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 }
      );
      
      revealElements.forEach((el) => observer.observe(el));
      
      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
      };
    };
    
    // Set up custom cursor
    const setupCustomCursor = () => {
      if (!cursorRef.current) return;
      
      const cursor = cursorRef.current;
      
      const onMouseMove = (e: MouseEvent) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      };
      
      const onMouseEnter = () => {
        cursor.style.opacity = "1";
        cursor.style.transform = "scale(1)";
      };
      
      const onMouseLeave = () => {
        cursor.style.opacity = "0";
      };
      
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      
      // Handle hover on interactive elements
      const handleInteractiveElements = () => {
        const interactiveElements = document.querySelectorAll("a, button");
        
        interactiveElements.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            cursor.style.transform = "scale(1.5)";
            cursor.style.mixBlendMode = "difference";
          });
          
          el.addEventListener("mouseleave", () => {
            cursor.style.transform = "scale(1)";
            cursor.style.mixBlendMode = "difference";
          });
        });
      };
      
      handleInteractiveElements();
      
      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
      };
    };
    
    setupScrollAnimations();
    
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setupCustomCursor();
    }
    
    // Add script for Three.js
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      {/* Custom Cursor (will only be visible on desktop) */}
      <div ref={cursorRef} className="custom-cursor"></div>
      
      <Navbar />
      <Hero />
      <ProjectsShowcase />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
