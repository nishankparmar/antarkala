
import { useEffect, useRef } from "react";
import { ArrowDownCircle } from "lucide-react";
import * as THREE from "three";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && textRef.current) {
        const scrollPos = window.scrollY;
        const opacity = Math.max(1 - scrollPos / 700, 0);
        const translateY = scrollPos * 0.3;
        
        textRef.current.style.opacity = opacity.toString();
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initialize Three.js
    const initThreeJS = () => {
      try {
        const canvas = document.createElement('canvas');
        const container = document.getElementById('canvas-container');
        
        if (container) {
          canvas.style.width = '100%';
          canvas.style.height = '100%';
          container.appendChild(canvas);
          
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
          
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(window.devicePixelRatio);
          
          // Create a more elegant geometric shape
          const geometry = new THREE.OctahedronGeometry(2, 1);
          const material = new THREE.MeshBasicMaterial({ 
            color: 0xC09456,
            wireframe: true,
            transparent: true,
            opacity: 0.6
          });
          
          const octa = new THREE.Mesh(geometry, material);
          scene.add(octa);
          
          camera.position.z = 5;
          
          // Animation loop
          const animate = () => {
            requestAnimationFrame(animate);
            
            octa.rotation.x += 0.001;
            octa.rotation.y += 0.002;
            
            renderer.render(scene, camera);
          };
          
          animate();
          
          // Handle resize
          const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          };
          
          window.addEventListener('resize', handleResize);
          
          return () => {
            window.removeEventListener('resize', handleResize);
            container?.removeChild(canvas);
          };
        }
      } catch (error) {
        console.error("Error initializing Three.js:", error);
      }
    };
    
    initThreeJS();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      id="home" 
      ref={heroRef} 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-primary/90"
    >
      <div id="canvas-container"></div>
      
      <div 
        ref={textRef} 
        className="container mx-auto px-4 text-center z-10"
      >
        <p className="text-accent-light uppercase tracking-widest mb-4 text-sm animate-fade-in">
          Interior Design Studio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold text-white mb-4 leading-tight tracking-wide animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Antar Kala
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white/90 mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Crafting Spaces<br />That Inspire Life
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          We transform spaces into beautiful, functional environments that reflect your unique style and enhance your quality of life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <button className="bg-accent hover:bg-accent-light text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Book a Consultation
          </button>
          <button className="border-2 border-white/30 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full transition-all duration-300">
            Explore Projects
          </button>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-bounce"
        style={{ animationDuration: "2s" }}
      >
        <ArrowDownCircle size={36} />
      </a>
    </div>
  );
};

export default Hero;
