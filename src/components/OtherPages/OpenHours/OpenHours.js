import React from 'react'
import "./OpenHours.scss"
import openHours from '../../../data/openhours'
import Footer from '../Footer/Footer'

function OpenHours() {
    return (
        <div className='open-hours'>
            <ul>

                <li>Hverdager {openHours.hverdagerFra} - {openHours.hverdagerTil}</li>
                <li>Lørdag {openHours.lørdagFra} - {openHours.lørdagTil}</li>
                <li>Søndag - stengt</li>
            </ul>
            <Footer />
        </div>
    )
}

export default OpenHours