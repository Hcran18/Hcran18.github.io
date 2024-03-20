import React from 'react';
import JobCard from '../Components/JobCard';
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
            <h1>Jobs I've Had</h1>
            <div className='jobs'>
                <JobCard className='job-card'
                    title='Lead Web Developer'
                    dates='August 2023 - Present'
                    company='Brigham Young University'
                    descriptions={webDescription}
                />
                <JobCard className='job-card'
                    title='Support Team Lead'
                    dates= 'July 2021 - August 2023'
                    company='BYU Pathway Worldwide'
                    descriptions={pathwayDescription}
                />
            </div>
        </div>
    );
}

export default Experience;