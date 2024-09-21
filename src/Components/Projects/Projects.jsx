import React from 'react';
import ProjectCard from './ProjectCard';
import pathway from '../../assets/pathway.png'
import banner from '../../assets/banner.png'
import fixup from '../../assets/fixup.png'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold mb-8'>Projects</h1>
      
      {/* Using grid layout for better responsiveness */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ProjectCard 
          title="Pathway"
          main="Our website is a complete package which gives access to knowledge of all the upcoming Events, Hackathons, Domain Expertise Guide as well as the required Resources for beginners to start coding."
          imgSrc={pathway} // Placeholder image or use actual image link
        />
        <ProjectCard 
          title="Project X"
          main="Our website is a complete package which gives access to knowledge of all the upcoming Events, Hackathons, Domain Expertise Guide as well as the required Resources for beginners to start coding."
          imgSrc={banner} // Placeholder image or use actual image link
        />
        <ProjectCard 
          title="Next Big Thing"
          main="Our website is a complete package which gives access to knowledge of all the upcoming Events, Hackathons, Domain Expertise Guide as well as the required Resources for beginners to start coding."
          imgSrc={fixup}  // Placeholder image or use actual image link
        />
      </div>
    </div>
  );
};

export default Projects;

