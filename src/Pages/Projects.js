import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './ProjectsStyles.css';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Define the items array containing project data
const items = [
    { id: 1, title: 'Project 1', subtitle: 'Subtitle 1', short: 'Short Description 1', description: 'Description 1'},
    { id: 2, title: 'Project 2', subtitle: 'Subtitle 2', short: 'Short Description 2', description: 'Description 2'},
    { id: 3, title: 'Project 3', subtitle: 'Subtitle 3', short: 'Short Description 2', description: 'Description 3'},
    // Add more projects as needed
];

  return (
    <div className='ProjectsPage'>
        <h1>Get in Touch</h1>
        <div className="grid-container">
            {items.map((item) => (
                <motion.div
                whileHover={{ scale: 1.1 }}
                key={item.id}
                layoutId={item.id}
                className="card"
                onClick={() => setSelectedId(item.id)}
                >
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.p>{item.short}</motion.p>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                <motion.div
                    key="expanded"
                    layoutId={selectedId}
                    className="expanded-card"
                    onClick={() => setSelectedId(null)}
                >
                    <motion.h5>{items.find((item) => item.id === selectedId)?.subtitle}</motion.h5>
                    <motion.h2>{items.find((item) => item.id === selectedId)?.title}</motion.h2>
                    <motion.p>{items.find((item) => item.id === selectedId)?.description}</motion.p>
                    <motion.button className='button' onClick={() => setSelectedId(null)}>Close</motion.button>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    </div>
  );
};

export default Projects;