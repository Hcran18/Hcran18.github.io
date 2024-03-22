import React, { useState } from 'react';
import './ContactStyles.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        // You can use the values of name, email, and message state variables
    };

    return (
        <div className='ContactPage'>
            <h1>Contact</h1>
            <div className='Socials'>
                <h2>Socials</h2>
                {/* Add your social media links here */}
            </div>
            <div className='FormSection'>
                <h2>Contact Form</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;