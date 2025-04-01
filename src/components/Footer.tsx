
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6">Antar Kala</h3>
            <p className="text-white/70 mb-6">
              Creating beautiful, functional spaces that enhance the way people live, work, and play.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent/20 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent/20 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent/20 transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent/20 transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Projects", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {["Residential Design", "Commercial Design", "Custom Furniture", "Color Consultation", "Space Planning"].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for design inspiration and updates.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 bg-white/10 rounded-l-lg focus:outline-none focus:bg-white/20"
                />
                <button className="bg-accent hover:bg-accent-light text-primary px-4 py-2 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-12 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Antar Kala Interior Design Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center md:justify-end">
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
