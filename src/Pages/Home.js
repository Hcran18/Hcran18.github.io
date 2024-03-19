import React from 'react';
import './HomeStyles.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-text'>
                <h3 className='text'>Hello, my name is</h3>
                <h1 className='text'>Hunter Crandall.</h1>
                <h2 className='text'>A full stack developer.</h2>
            </div>
        </div>
    );
}

export default Home;