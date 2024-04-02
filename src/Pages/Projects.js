import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandedProjectCard from '../Components/ExpandedProjectCard';
import huntercrandallcom from './Images/projects/huntercrandall.com.png'
import dinnerdate from './Images/projects/DinnerDate.png';
import tweeter from './Images/projects/tweeter.png';

import './ProjectsStyles.css';

const Projects = () => {
        const [selectedID, setSelectedID] = useState(null);

        const handleClose = () => {
                setSelectedID(null);
        };

  // Define the items array containing project data
        const items = [
        { id: 1, 
                title: 'huntercrandall.com', 
                subtitle: 'Portfolio Website', 
                short: 'My personal portfolio website showcasing my projects and experience.', 
                description: 'My personal portfolio website showcasing my projects and experience. I wanted to create a website that was simple, clean, and easy to navigate. I also used EmailJS to create a contact form that allows users to send me messages directly from the website.',
                tech: 'React, Framer Motion, EmailJS',
                github: 'https://github.com/Hcran18/Hcran18.github.io',
                image: huntercrandallcom
        },
        { id: 2, 
                title: 'Dinner Date', 
                subtitle: 'Current Project', 
                short: 'A web application to help solve the age old question, "Where do you want to eat?"', 
                description: 'Dinner Date is a web application that helps users decide where to eat. Users can create an account, friend others, and swipe on nearby restraunts. When a similar restaraunt is swiped on you will receive a match notifcation.',
                tech: 'React, MongoDB, Express, Auth0, AWS Amplify',
                github: 'https://github.com/Hcran18/Dinner-Date',
                image: dinnerdate
        },
        { id: 3, 
                title: 'Tweeter', 
                subtitle: 'Twitter Clone App', 
                short: 'A Twitter clone for android that allows users to post, follow, see their feed, and more.', 
                description: 'Tweeter is a Twitter clone I built for android as part of a course project. Users can view other users profiles, follow them, see their posts, and make posts of their own for their friends to see in their feeds.',
                tech: 'Java, Android Studio, AWS S3, AWS API Gateway, AWS Lambda, AWS DynamoDB, AWS SQS',
                github: 'https://github.com/Hcran18/tweeterAWS',
                image: tweeter
        },
        // Add more projects as needed
        ];

        return (
                <div className="project-page">
                        <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3}} >Projects</motion.h1>
                        <div className="cards-container">
                                {items.map((item) => (
                                        <motion.div
                                                key={item.id}
                                                layoutId={item.id}
                                                onClick={() => setSelectedID(item.id)}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ opacity: {delay: (item.id * .3) , duration: 0.3} }}
                                        >
                                                <ProjectCard project={item} />
                                        </motion.div>
                                ))}
                        </div>
                        <AnimatePresence>
                                {selectedID && (
                                        <motion.div
                                                className="expanded-cards-container"
                                                layoutId={selectedID}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                        >
                                                <ExpandedProjectCard
                                                        project={items.find((item) => item.id === selectedID)}
                                                        onClose={handleClose}
                                                />
                                        </motion.div>
                                )}
                        </AnimatePresence>
                </div>
        );
};

export default Projects;