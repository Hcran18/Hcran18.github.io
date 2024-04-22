import React from 'react';
import { motion } from 'framer-motion';
import './PricingCardStyles.css';

const PricingCard = ({ planName, description, price, features }) => {
    if (!features) return null;

    return (
        <motion.div whileHover={{scale: 1.1}} className="pricing-card">
            {/* Pricing details */}
            <h2>{planName}</h2>
            <p className='description'>{description}</p>
            <p className='price'>{price}</p>
            <hr className='divider'/>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default PricingCard;