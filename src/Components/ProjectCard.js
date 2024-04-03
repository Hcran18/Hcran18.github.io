import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} onClick={onClick} className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <h2>{project.title}</h2>
        <h3>{project.subtitle}</h3>
        <p>{project.short}</p>
        <p className='read-more'>Read More...</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;