
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Minimalist Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000",
    description: "A clean, minimalist design for an urban apartment focused on functionality and subtle elegance."
  },
  {
    id: 2,
    title: "Luxury Restaurant Redesign",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
    description: "An upscale dining experience with custom furniture and warm, inviting atmosphere."
  },
  {
    id: 3,
    title: "Contemporary Home Office",
    category: "residential",
    image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=1000",
    description: "A productivity-focused home office with ergonomic design and natural light optimization."
  },
  {
    id: 4,
    title: "Boutique Hotel Lobby",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000",
    description: "A welcoming hotel lobby blending local cultural elements with luxury comfort."
  },
  {
    id: 5,
    title: "Scandinavian Villa Renovation",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    description: "Complete renovation of a villa using Scandinavian design principles and natural materials."
  },
  {
    id: 6,
    title: "Urban Café Design",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000", 
    description: "A trendy café space designed to create a unique social experience with custom lighting solutions."
  }
];

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [animationElements, setAnimationElements] = useState<Element[]>([]);

  const handleFilterChange = (category: string) => {
    setFilter(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  useEffect(() => {
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

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    setAnimationElements(Array.from(elements));

    return () => {
      animationElements.forEach((el) => observer.unobserve(el));
    };
  }, [animationElements]);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-widest mb-2 reveal">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 reveal reveal-delay-1">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 reveal reveal-delay-2">
            Explore our collection of meticulously crafted spaces that showcase our commitment to innovative design and exceptional quality.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 reveal reveal-delay-3">
            {["all", "residential", "commercial"].map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-white"
                    : "bg-secondary hover:bg-secondary-dark text-primary"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card rounded-lg overflow-hidden shadow-lg reveal`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-80 object-cover transition-transform duration-700"
                loading="lazy"
              />
              <div className="project-overlay text-white">
                <h3 className="text-xl font-playfair font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 text-white/80">{project.description}</p>
                <a href="#" className="inline-flex items-center text-accent hover:text-accent-light">
                  View Project <ArrowUpRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-3 rounded transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
