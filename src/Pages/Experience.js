import React from 'react';
import JobCard from '../Components/JobCard';
import { motion } from 'framer-motion';
import './ExperienceStyles.css';

function Experience() {
    const webDescription = [
        'Maintain multiple websites for 8 departments in the College of Fine Arts and Communications',
        'Develop multiple websites to meet semesterly project deadlines',
        'Design solutions as a team in weekly meetings to assist departments with their website requests',
        'Monitor and report monthly analytics using Google Analytics for the college dean'
    ];

    const pathwayDescription = [ 
        'Supervised multiple 8-10 person teams of customer service representatives',
        'Assisted unsatisfied students by fixing issues that had not yet been resolved',
        'Conducted weekly trainings to instruct team members',
        'Approved and managed employee time-off requests and pay'
    ];

    return (
        <div className='experience'>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
                <h1>Experience</h1>
            </motion.div>

            <div className='jobs'>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                >
                    <JobCard className='job-card'
                        title='Lead Web Developer'
                        dates='August 2023 - Present'
                        company='Brigham Young University'
                        descriptions={webDescription}
                    />
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                >
                    <JobCard className='job-card'
                        title='Support Team Lead'
                        dates= 'July 2021 - August 2023'
                        company='BYU Pathway Worldwide'
                        descriptions={pathwayDescription}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Experience;