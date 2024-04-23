import React from 'react';
import { motion } from 'framer-motion';

const ExpandedProjectCard = ({ project, onClose }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="expanded-project-card">
        <i className='close fas fa-times' onClick={onClose}></i>
        <div className='project-header'>
          <div className='project-info'>
            <h2>{project.title}</h2>
            <h3>{project.subtitle}</h3>
          </div>
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-info">
          <p>{project.description}</p>
          <p><strong>Technologies Used:</strong> {project.tech}</p>
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="social fa-brands fa-github"></i></a>}
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer"><i class="link fa-solid fa-link"></i></a>}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandedProjectCard;