import React from 'react'
import "./Contact.scss"
import contact from '../../../data/contact'
import Footer from '../Footer/Footer'

function Contact() {
    return (
        <div className='contact'>
            <p>{contact.content}</p>
            <a href='/'>Bestill</a>


            <ul>
                <li>{contact.telefonNummber}</li>
                <li>{contact.email}</li>
                <li>{contact.adresse}</li>
            </ul>


            <div className='contact-map'>

            </div>
            <Footer />
        </div>
    )
}

export default Contact