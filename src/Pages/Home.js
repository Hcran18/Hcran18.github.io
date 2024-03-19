import React from 'react';
import Button from '../Components/Button';

import './HomeStyles.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-text'>
                <h3 className='text'>Hello, my name is</h3>
                <h1 className='text'>Hunter Crandall.</h1>
                <h2 className='text'>A full stack developer.</h2>
            </div>
            <div className='home-button'>
                <Button text='Take a Look at My Past Projects' to='/projects' />
            </div>
        </div>
    );
}

export default Home;