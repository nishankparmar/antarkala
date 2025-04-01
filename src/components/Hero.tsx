
import { useEffect, useRef } from "react";
import { ArrowDownCircle } from "lucide-react";

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
    const initThreeJS = async () => {
      try {
        const THREE = await import('three');
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
          
          // Create a simple geometric shape
          const geometry = new THREE.IcosahedronGeometry(2, 0);
          const material = new THREE.MeshBasicMaterial({ 
            color: 0xD4AF37,
            wireframe: true
          });
          
          const icosahedron = new THREE.Mesh(geometry, material);
          scene.add(icosahedron);
          
          camera.position.z = 5;
          
          // Animation loop
          const animate = () => {
            requestAnimationFrame(animate);
            
            icosahedron.rotation.x += 0.0015;
            icosahedron.rotation.y += 0.0025;
            
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
      className="relative h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      <div id="canvas-container"></div>
      
      <div 
        ref={textRef} 
        className="container mx-auto px-4 text-center z-10"
      >
        <p className="text-accent uppercase tracking-widest mb-2 opacity-80 animate-fade-in">
          Interior Design Studio
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Crafting Spaces<br />That Inspire Life
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          We transform spaces into beautiful, functional environments that reflect your unique style and enhance your quality of life.
        </p>
        <button 
          className="bg-accent hover:bg-accent-light text-primary font-medium px-8 py-3 rounded transition-all duration-300 animate-fade-in" 
          style={{ animationDelay: "0.6s" }}
        >
          Book a Consultation
        </button>
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
