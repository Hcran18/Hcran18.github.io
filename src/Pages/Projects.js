import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandedProjectCard from '../Components/ExpandedProjectCard';
import ArtsBuildingConstruction from './Images/projects/ArtsBuildingConstruction.png';
import huntercrandallcom from './Images/projects/huntercrandall.com.png'
import dinnerdate from './Images/projects/DinnerDate.png';
import tweeter from './Images/projects/tweeter.png';
import sqlgpt from './Images/projects/SQLGPT.png';
import emmaolsonphoto from './Images/projects/emmaolsonphoto.com.png';
import cfac from './Images/projects/cfac.png'
import chorechart from './Images/projects/choreChart.png'
import jwtPizza from './Images/projects/jwtPizza.png'

import './ProjectsStyles.css';

const Projects = () => {
        const [selectedID, setSelectedID] = useState(null);

        const handleClose = () => {
                setSelectedID(null);
        };

  // Define the items array containing project data
        const items = [
        { id: 1,
                title: 'Chore Chart',
                subtitle: 'Personal Project',
                short: 'An application allowing parents to set chores and rewards for their children to earn points and earn rewards',
                description: 'Developed a RESTful API using FastAPI and Python for users to track children’s chores and earn points. Designed a MySQL database to manage user information, to-dos, points, and purchasable items. Utilized Docker to containerize the back-end, creating a scalable and isolated deployment environment.',
                tech: 'React, Python, FastAPI, MySQL, Docker',
                github: 'https://github.com/Hcran18/Chore-Chart',
                link: null,
                image: chorechart
        },
        { id: 2,
                title:'Homepage and Navigation',
                subtitle:'College of Fine Arts and Communications Website',
                short:'Redesigned and rebuilt the colleges website improving the design and user experience',
                description:'Worked with a UX designer to redesign and update the homepage and navigation. Implemented the change in Brightspot CMS while creating custom components using JavaScript, HTML, and CSS',
                tech:'Brightspot CMS, JavaScript, HTML, CSS, Google Analytics',
                github: null,
                link: 'https://cfac.byu.edu/',
                image: cfac
        },
        { id: 3,
                title:'JWT Pizza',
                subtitle:'QA and DevOps Course Project',
                short:'Automated deployments, scalability, and testing of a given application',
                description:'Automated frontend and backend deployments of a given application using GitHub Actions and AWS services. Implemented testing frameworks such as Jest for backend unit tests and Playwright for UI testing, achieving over 80% test coverage and integrating with CI/CD pipelines',
                tech:'React, GitHub Actions, AWS, Jest',
                github:'https://github.com/Hcran18/jwt-pizza',
                link: 'https://pizza.huntercrandall.com/',
                image: jwtPizza
        },
        { id: 4,
                title: 'Emma Olson Photo',
                subtitle: 'Photography Website',
                short: 'A website for a professional photographer to showcase her work.',
                description: 'Emma Olson is a professional photographer. This website was created to showcase her work. The website includes a gallery of her photos, information about her, and her contact information for potential clients to reach out to her.',
                tech: 'React, TypeScript, TailwindCSS, Framer Motion',
                github: null,
                link: 'https://emmaolsonphoto.com',
                image: emmaolsonphoto
        },
        { id: 5,
                title: 'Arts Building Construction',
                subtitle: 'New BYU Arts Building Website',
                short: 'A website for the new BYU Arts Building construction project.',
                description: 'The BYU Arts Building is currently under construction. This website was created to provide information about the project to the public. The website includes information about the project, a live webcam, time-lapse videos, and pictures with the progress of the project.',
                tech: 'Brightspot CMS, HTML, CSS, Google Analytics',
                github: null,
                link: 'https://cfac.byu.edu/arts-building',
                image: ArtsBuildingConstruction
        },
        { id: 6, 
                title: 'huntercrandall.com', 
                subtitle: 'Portfolio Website', 
                short: 'My personal portfolio website showcasing my projects and experience.', 
                description: 'My personal portfolio website showcasing my projects and experience. I wanted to create a website that was simple, clean, and easy to navigate. I also used EmailJS to create a contact form that allows users to send me messages directly from the website.',
                tech: 'React, Framer Motion, EmailJS',
                github: 'https://github.com/Hcran18/Hcran18.github.io',
                link: 'https://huntercrandall.com',
                image: huntercrandallcom
        },
        { id: 7, 
                title: 'Dinner Date', 
                subtitle: 'Current Project', 
                short: 'A web application to help solve the age old question, "Where do you want to eat?"', 
                description: 'Dinner Date is a web application that helps users decide where to eat. Users can create an account, friend others, and swipe on nearby restraunts. When a similar restaraunt is swiped on you will receive a match notifcation.',
                tech: 'React, MongoDB, Express, Auth0, AWS Amplify',
                github: 'https://github.com/Hcran18/Dinner-Date',
                link: null,
                image: dinnerdate
        },
        { id: 8,
                title: 'SQLGPT', 
                subtitle: 'AI Database Query Generator', 
                short: 'A application that uses GPT-3 to generate answers about a database based on user input.', 
                description: 'SQLGPT is an application that uses GPT-3 to generate answers about a database based on user input. Users can ask questions about a database and SQLGPT will use the provided schema to generate a SQL query. The query is then run on the database and the results returned to GPT-3 to generate a response. The response is then returned to the user.',
                tech: 'GPT-3, MySQL, Java',
                github: 'https://github.com/Hcran18/SQLGPT',
                link: null,
                image: sqlgpt
        },
        { id: 9, 
                title: 'Tweeter', 
                subtitle: 'Twitter Clone App', 
                short: 'A Twitter clone for android that allows users to post, follow, see their feed, and more.', 
                description: 'Tweeter is a Twitter clone I built for android as part of a course project. Users can view other users profiles, follow them, see their posts, and make posts of their own for their friends to see in their feeds.',
                tech: 'Java, Android Studio, AWS S3, AWS API Gateway, AWS Lambda, AWS DynamoDB, AWS SQS',
                github: 'https://github.com/Hcran18/tweeterAWS',
                link: null,
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