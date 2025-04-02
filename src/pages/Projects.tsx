
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsShowcase from '@/components/ProjectsShowcase';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <ProjectsShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
