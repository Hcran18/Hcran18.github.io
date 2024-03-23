import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactStyles.css';
import '../Components/Button.js';
import '../Components/ButtonStyles.css';

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        console.log("Handling submit...");
        e.preventDefault();
        console.log(name, email, message);
        
        emailjs
        .sendForm('service_c0gt18o', 'template_ppga4pj', form.current, {
            publicKey: 'mYPaIVchKPCnsihfc',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setShowSuccessMessage(true);
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );

        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 5000);
    };

    return (
        <div className='ContactPage'>
            <h1>Get in Touch</h1>
            <div className='ContactInfo'>
                <div className='FormSection'>
                    <h2>Let Me Know How I Can Help You!</h2>
                    {showSuccessMessage && <div className='success-message'>Form submitted successfully!</div>}
                    <form ref={form} className='form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name='user_name'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name='user_email'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                name='message'
                            />
                        </div>
                        <button className='button' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;