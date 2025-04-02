
import { Users, Award, History, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-widest mb-2 reveal">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 reveal reveal-delay-1">
            About Antar Kala
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 reveal reveal-delay-2">
            We are a passionate team of designers dedicated to creating spaces that inspire, function beautifully, and reflect the unique personalities of our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="reveal">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Studio" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-playfair font-semibold mb-4 reveal">Our Design Philosophy</h3>
            <p className="text-gray-600 mb-6 reveal reveal-delay-1">
              At Antar Kala, we believe that exceptional interior design is achieved through a perfect balance of aesthetics, functionality, and client vision. We approach each project with fresh eyes, creating custom solutions that are as unique as our clients.
            </p>
            <p className="text-gray-600 mb-6 reveal reveal-delay-2">
              Our process is collaborative and transparent. We listen carefully to our clients' needs and preferences, and combine their vision with our expertise to create spaces that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm reveal reveal-delay-1">
                <div className="p-3 bg-accent/10 rounded-full mb-3">
                  <Lightbulb className="text-accent" size={24} />
                </div>
                <h4 className="font-playfair font-medium">Innovation</h4>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm reveal reveal-delay-2">
                <div className="p-3 bg-accent/10 rounded-full mb-3">
                  <History className="text-accent" size={24} />
                </div>
                <h4 className="font-playfair font-medium">Experience</h4>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm reveal reveal-delay-3">
                <div className="p-3 bg-accent/10 rounded-full mb-3">
                  <Users className="text-accent" size={24} />
                </div>
                <h4 className="font-playfair font-medium">Collaboration</h4>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm reveal reveal-delay-4">
                <div className="p-3 bg-accent/10 rounded-full mb-3">
                  <Award className="text-accent" size={24} />
                </div>
                <h4 className="font-playfair font-medium">Quality</h4>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-playfair font-semibold text-center mb-12 reveal">
          Meet Our Team
        </h3>
        
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 reveal">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                  alt="Sailee Satve" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardContent className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <Avatar className="h-14 w-14 border-2 border-accent">
                    <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Sailee Satve" />
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="text-2xl font-playfair font-semibold mb-1">Sailee Satve</h4>
                    <p className="text-accent font-medium">Principal Designer & Founder</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience in luxury residential and commercial design, Sailee brings a wealth of knowledge, creativity, and passion to each project. Her unique vision and attention to detail have established Antar Kala as a premier design studio.
                </p>
                <div className="flex gap-4">
                  <span className="text-sm font-medium bg-secondary px-3 py-1 rounded-full">Residential</span>
                  <span className="text-sm font-medium bg-secondary px-3 py-1 rounded-full">Commercial</span>
                  <span className="text-sm font-medium bg-secondary px-3 py-1 rounded-full">Sustainable Design</span>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-8 reveal">
          <button className="bg-primary hover:bg-primary-light text-white font-medium px-8 py-3 rounded transition-all duration-300">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
