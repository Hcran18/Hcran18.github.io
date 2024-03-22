import React from 'react';
import './FooterStyles.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='credit'>
                <p>Designed and Built by Hunter Crandall</p>
            </div>
            <div className='socials'>
                <a href="https://github.com/Hcran18" className='social-icon' target="_blank" rel="noopener noreferrer"><i className="social fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/hcrandall/" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="social fa-brands fa-linkedin-in"></i></a>
            </div>
        </footer>
    );
};

export default Footer;