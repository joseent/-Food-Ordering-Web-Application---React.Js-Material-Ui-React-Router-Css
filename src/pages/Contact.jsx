import React from 'react';
import '../styles/Contact.css'
import contactImage  from'../assets/meatballs.png'

export default function Contact(props) {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${contactImage})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full name</label>
                    <input type="text" name="name" placeholder="Please enter your name" />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <label htmlFor="message">Messege</label>
                    <textarea name="message" rows="10" placeholder="Enter your message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

