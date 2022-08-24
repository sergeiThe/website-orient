import "./Service.scss"
import React from 'react'

function Service(props) {
    return (
        <li className='service'>
            <h3>{props.title}</h3>
            {props.description && <p>{props.description}</p>}
            <ul>
                {props.pricings.map((pricing) => {
                    return (
                        <li>{pricing.time} minutter - {pricing.price} NOK</li>
                    )
                })}
            </ul>
        </li>
    )
}

export default Service