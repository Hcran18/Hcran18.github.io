import React from 'react';
import { NavLink } from 'react-router-dom';

import './ButtonStyles.css';

const Button = ({ text, onClick, to, type }) => {
    return (
        <NavLink to={to}>
            <button type={type} className='button' onClick={onClick}>
                {text}
            </button>
        </NavLink>
    );
};

export default Button;