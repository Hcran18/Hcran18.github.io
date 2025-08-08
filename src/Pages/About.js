import React from 'react';
import { motion } from "framer-motion"
import './AboutStyles.css';
import myImage from './Images/HunterPhoto.jpg';

const About = () => {
    return (
        <div className="about-container">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>About Me</motion.h1>
            <div className="about-info">
                <motion.div whileHover={{scale: 1.1}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: .3 }, scale: {duration: .3}}} className="about-image">
                    <img src={myImage} alt="Hunter" />
                </motion.div>
                <div className="about-text">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: .6 }}}>
                        <span className='intro'>Hi, I'm Hunter!</span> I'm a passionate software developer and recent Computer Science graduate from Brigham Young University.
                    </motion.p>
                    <motion.hr className='text-break' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: .6 }}}/>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: .9 }}}>
                        <span className='intro'>I'm skilled</span> in a diverse range of technologies and programming languages. 
                        With two years of hands-on professional experience, 
                        I specialize in React, AWS, JavaScript, Python, and Go. 
                        My passion for continuous learning keeps me ahead of emerging tech trends, 
                        ensuring I deliver innovative solutions with cutting-edge tools and techniques.
                    </motion.p>
                    <motion.hr className='text-break' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: .9 }}}/>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: 1.2 }}}>
                        <span className='intro'>Delivering tailored solutions,</span> I craft web applications that drive results. 
                        With a focus on innovation and staying current with industry trends, 
                        I ensure your project stands out in today's digital landscape.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default About;
