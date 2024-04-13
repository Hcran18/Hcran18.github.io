import React from 'react';
import ReactGA from 'react-ga4';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';

import './ButtonStyles.css';

const Button = ({ text, onClick, to, type, trackEvent }) => {
    const handleClick = (e) => {
        if (trackEvent) {
            ReactGA.event({
                category: 'Button',
                action: 'Click',
                label: text,
            });
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <NavLink to={to}>
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type={type} className='button' onClick={handleClick}>
                {text}
            </motion.button>
        </NavLink>
    );
};

export default Button;