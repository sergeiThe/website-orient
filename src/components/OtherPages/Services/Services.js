import React from 'react'
import services from '../../../data/services'
import Footer from '../Footer/Footer'
import Service from './Service'
import "./Services.scss"

function Services() {
    return (
        <div className='services'>
            <ul>

                {services.singlePersonMassage.map((service) => {
                    return (
                        <Service
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            pricings={service.pricings}
                        ></Service>
                    )
                })}
            </ul>

            <ul>

                {services.coupleMassage.map((service) => {
                    return (
                        <Service
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            pricings={service.pricings}
                        ></Service>
                    )
                })}
            </ul>


        </div>
    )
}

export default Services