import React from 'react'
import { ContactForm } from '../portfolio/ContactForm';
import { Footer } from '../portfolio/Footer';

export const ContactScreen = () => {

    return (
        <div>
            <ContactForm />
            <div style={{ height:"300px" }}></div>
            <Footer />
        </div>
    )
}
