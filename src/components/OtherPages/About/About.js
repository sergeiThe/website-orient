import React from 'react'
import "./About.scss"
import about from '../../../data/about'
import Footer from '../Footer/Footer'

function About() {
    return (
        <div className='about'>
            <div className='about-text'>

                <p>
                    {about}
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About