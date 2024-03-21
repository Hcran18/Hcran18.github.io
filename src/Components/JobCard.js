import React from 'react';
import './JobCardStyles.css';

class JobCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const rect = this.cardRef.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2 && !this.state.scrolled) {
            this.setState({ scrolled: true });
        } else if ((rect.top >= window.innerHeight / 2 || rect.bottom <= window.innerHeight / 2) && this.state.scrolled) {
            this.setState({ scrolled: false });
        }
    }
    
    render() {
        const { title, company, dates, descriptions } = this.props;

        const { scrolled } = this.state;

        return (
            <div className={`job-card ${scrolled ? 'scrolled' : ''}`} ref={ref => this.cardRef = ref}>
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