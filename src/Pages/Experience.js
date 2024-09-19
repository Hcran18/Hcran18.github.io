import React from 'react';
import JobCard from '../Components/JobCard';
import { motion } from 'framer-motion';
import './ExperienceStyles.css';

function Experience() {
    const webDescription = [
        'Rebuilt the website from the ground up using HTML, CSS, and JavaScript, improving the design and user experience',
        'Developed the highest-viewed webpage for the college, achieving an average engagement time of over 10 minutes and increasing page views by 62%',
        'Streamlined the website\'s tagging system, reducing tags by 65%, enhancing search functionality and backend organization',
        'Utilized Python to create an automated data analysis script, saving the team 5 hours per month and improving efficiency by 80%'
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