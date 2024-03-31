import React from 'react';
import Button from '../Components/Button';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"

import './HomeStyles.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-background'>
                <motion.div 
                    className='home-text'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >   
                    <h3 className='text'>Hello, my name is</h3>
                    <NavLink className='main' to='/about'>
                        <motion.h1 
                            className='text main'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ opacity: { duration: 1, delay: 0.3 } }}
                        >
                            Hunter Crandall.
                        </motion.h1>
                    </NavLink>
                    <motion.h2 
                        className='text'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: .6 }}
                    >
                        Creating web solutions for you.
                    </motion.h2>
                </motion.div>
            </div>
            <div className='home-button-container'>
                <motion.div 
                    className='home-button'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: .9 }}
                >
                    <Button text='Contact me!' to='/contact' />
                </motion.div>
            </div>
        </div>
    );
}

export default Home;