import React from 'react';
import JobCard from '../Components/JobCard';
import { motion } from 'framer-motion';
import './ExperienceStyles.css';

function Experience() {
    const jobs = [
        {
            title: 'Software Engineer',
            dates: 'April 2025 - Present',
            company: 'Axon',
            descriptions: [],
            delay: 0.3
        },
        {
            title: 'Front-End Developer Intern',
            dates: 'December 2024 - April 2025',
            company: 'Spot Parking',
            descriptions: [
                'Designed and implemented a company dashboard using React, enabling real-time insights into key performance metrics',
                'Integrated data from internal APIs to display live metrics, including monitored parking lots and weekly app downloads',
                'Implemented a monitoring system that calculated overall company health as a percentage using predefined thresholds'
            ],
            delay: 0.6
        },
        {
            title: 'Lead Web Developer',
            dates: 'November 2023 - January 2025',
            company: 'Brigham Young University',
            descriptions: [
                'Rebuilt the website in Brightspot CMS using HTML, CSS, and JavaScript, improving the design and user experience',
                'Streamlined the website\'s tagging system, reducing tags by 65%, enhancing search functionality and backend organization',
                'Utilized Python to create an automated data analysis script, saving the team 5 hours per month in analytics and improving efficiency by 80%',
            ],
            delay: 0.9
        },
        {
            title: 'Web Developer',
            dates: 'August 2023 - November 2023',
            company: 'Brigham Young University',
            descriptions: [
                'Developed the highest-viewed webpage for the college, achieving an average engagement time of over 10 minutes and increasing page views by 62%',
                'Analyzed and presented monthly web analytics for all college areas, preparing data visualizations and strategic insights for the Dean’s review',
                'Identified and resolved responsiveness issues on multiple web pages, ensuring a seamless and optimized user experience across mobile and desktop devices'
            ],
            delay: 1.2
        },
        {
            title: 'Support Team Lead',
            dates: 'July 2021 - August 2023',
            company: 'BYU Pathway Worldwide',
            descriptions: [
                'Supervised multiple 8-10 person teams of customer service representatives',
                'Assisted unsatisfied students by fixing issues that had not yet been resolved',
                'Conducted weekly trainings to instruct team members',
                'Approved and managed employee time-off requests and pay'
            ],
            delay: 1.5
        }
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
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: job.delay }}
                    >
                        <JobCard
                            className='job-card'
                            title={job.title}
                            dates={job.dates}
                            company={job.company}
                            descriptions={job.descriptions}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experience;