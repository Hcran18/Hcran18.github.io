import React from 'react';
import './JobCardStyles.css';

class JobCard extends React.Component {
    render() {
        const { title, company, dates, descriptions } = this.props;

        return (
            <div className='job-card'>
                <h2 className='title'>{title}</h2>
                <p className='company'>{company}</p>
                <p className='location'>{dates}</p>
                <ul className='descriptions'>
                    {descriptions.map((description, index) => (
                    <li key={index} className='description'>{description}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default JobCard;