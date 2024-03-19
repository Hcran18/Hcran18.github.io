import React from 'react';
import './JobCardStyles.css';

class JobCard extends React.Component {
    render() {
        const { title, company, location, description } = this.props;

        return (
            <div className='job-card'>
                <h2 className='title'>{title}</h2>
                <p className='job-info'>{company}</p>
                <p className='job-info'>{location}</p>
                <p className='job-info'>{description}</p>
            </div>
        );
    }
}

export default JobCard;