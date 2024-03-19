import React from 'react';
import { NavLink } from 'react-router-dom';

import './ButtonStyles.css';

const Button = ({ text, onClick, to }) => {
    return (
        <NavLink to={to}>
            <button className='button' onClick={onClick}>
                {text}
            </button>
        </NavLink>
    );
};

export default Button;