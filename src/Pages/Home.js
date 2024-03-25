import React from 'react';
import Button from '../Components/Button';
import { NavLink } from 'react-router-dom';

import './HomeStyles.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-background'>
                <div className='home-text'>
                    <h3 className='text'>Hello, my name is</h3>
                    <NavLink className='main' to='/about'>
                        <h1 className='text main'>Hunter Crandall.</h1>
                    </NavLink>
                    <h2 className='text'>Creating web solutions for you.</h2>
                </div>
            </div>
            <div className='home-button'>
                <Button text='Contact me!' to='/contact' />
            </div>
        </div>
    );
}

export default Home;