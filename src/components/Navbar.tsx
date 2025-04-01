
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-playfair font-semibold text-primary">
          Antar Kala
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Projects", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-primary hover:text-accent transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary hover:text-accent transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col space-y-8 items-center">
          {["Home", "Projects", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-accent text-2xl font-playfair transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
