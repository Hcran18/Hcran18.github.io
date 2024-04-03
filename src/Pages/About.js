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
                        <span className='intro'>Hi, I'm Hunter.</span> Currently, I'm a senior at Brigham Young University pursuing a degree in Computer Science. 
                        I'm particularly interested in full-stack development, 
                        and I enjoy working on both the front-end and back-end aspects of web applications.
                    </motion.p>
                    <motion.hr className='text-break' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: .6 }}}/>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: .9 }}}>
                        <span className='intro'>I excel</span> in a wide array of technologies and languages, from React and AWS to 
                        SQL, Java, Python, JavaScript, HTML, and CSS. 
                        My commitment to ongoing learning keeps me attuned to the latest tech trends, 
                        ensuring I'm always equipped with the latest tools and techniques.
                    </motion.p>
                    <motion.hr className='text-break' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: .9 }}}/>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: {duration: 1, delay: 1.2 }}}>
                        <span className='intro'>Delivering tailored solutions,</span> I craft efficient web applications that drive results. 
                        With a focus on innovation and staying current with industry trends, 
                        I ensure your project stands out in today's digital landscape.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default About;
