
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    title: "Contemporary Living Room",
    category: "living",
    image: "/lovable-uploads/bb37b4cb-7989-46e2-845b-a990acd1422a.png",
    description: "A modern living space with warm tones, featuring copper accent wall and elegant lighting solutions."
  },
  {
    id: 2,
    title: "Botanical Bedroom Retreat",
    category: "bedroom",
    image: "/lovable-uploads/d5dc84d4-4ec7-41c5-8f6e-39a81aca674f.png",
    description: "Serene bedroom with botanical wall art, natural wood elements, and soft neutral palette."
  },
  {
    id: 3,
    title: "Luxury Living Area",
    category: "living",
    image: "/lovable-uploads/def7cb12-b77b-4fc9-8a8b-dd7de26a2564.png",
    description: "Spacious living room featuring elegant lighting fixtures, custom paneling, and sophisticated furniture arrangement."
  },
  {
    id: 4,
    title: "Statement Wall Bedroom",
    category: "bedroom",
    image: "/lovable-uploads/c0b6b482-8dba-441d-a79a-099db666b8fd.png",
    description: "Bold bedroom design with textured accent wall, integrated lighting, and vibrant color accents."
  },
  {
    id: 5,
    title: "Minimalist Kitchen Design",
    category: "kitchen",
    image: "/lovable-uploads/b8b26ba0-53d3-4f59-9a02-8eb606fcef90.png",
    description: "Clean L-shaped kitchen with contrasting cabinetry, seamless design, and optimal functionality."
  },
  {
    id: 6,
    title: "Tranquil Living Space",
    category: "living",
    image: "/lovable-uploads/c149b14b-94eb-4e64-a79a-9448cf25d1e1.png",
    description: "Zen-inspired living room with artistic wall panels, Buddha sculpture, and natural wood elements."
  },
  {
    id: 7,
    title: "Zen Bedroom Sanctuary",
    category: "bedroom",
    image: "/lovable-uploads/2105fd5d-3b61-4196-b424-46ccc5d54028.png",
    description: "Peaceful bedroom with indirect lighting, textured wall panels, and minimalist tea service detail."
  }
];

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [animationElements, setAnimationElements] = useState<Element[]>([]);

  // Log image paths for debugging
  useEffect(() => {
    console.log("Image paths:", projects.map(p => p.image));
  }, []);

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
    <section id="projects" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-widest mb-2 reveal">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 reveal reveal-delay-1">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 reveal reveal-delay-2">
            Explore our collection of meticulously crafted spaces that showcase our commitment to innovative design and exceptional quality.
          </p>
          
          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-12 reveal reveal-delay-3 bg-white/50 shadow-sm">
              {["all", "living", "bedroom", "kitchen"].map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => handleFilterChange(category)}
                  className="text-sm md:text-base capitalize"
                >
                  {category === "all" ? "All Projects" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card overflow-hidden shadow-lg reveal group"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative h-80">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    e.currentTarget.src = "/placeholder.svg"; // Fallback to placeholder image
                  }}
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 text-white/90 text-center">{project.description}</p>
                  <a href="#" className="inline-flex items-center text-accent-light hover:text-accent mt-2 group">
                    View Project 
                    <ArrowUpRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-playfair font-semibold text-primary">{project.title}</h3>
                <p className="text-sm text-gray-500 capitalize">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-accent px-8 py-3 font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-white">
            <span className="relative">View All Projects</span>
          </button>
        </div>
      </div>

      <style>
        {`
        .project-card {
          transform: translateY(30px);
          opacity: 0;
          transition: all 0.6s ease-out;
        }
        
        .project-card.active {
          transform: translateY(0);
          opacity: 1;
        }
        `}
      </style>
    </section>
  );
};

export default ProjectsShowcase;
