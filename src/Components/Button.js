import React from 'react';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';

import './ButtonStyles.css';

const Button = ({ text, onClick, to, type }) => {
    return (
        <NavLink to={to}>
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type={type} className='button' onClick={onClick}>
                {text}
            </motion.button>
        </NavLink>
    );
};

export default Button;