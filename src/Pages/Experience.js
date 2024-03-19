import React from 'react';
import JobCard from '../Components/JobCard';
import './ExperienceStyles.css';

function Experience() {
    return (
        <div className='experience'>
            <h1>Jobs I've Had</h1>
            <div className='jobs'>
                <JobCard className='job-card'
                    title='Lead Web Developer'
                    company='Brigham Young University'
                    location='Provo, UT'
                    description='I led a team of developers to create a website for the college.'
                />
                <JobCard className='job-card'
                    title='Team Lead'
                    company='BYU Pathway Worldwide'
                    location='Salt Lake City, UT'
                    description='I led a team of customer service representatives to help and assist students.'
                />
            </div>
        </div>
    );
}

export default Experience;