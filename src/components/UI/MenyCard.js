import React from 'react'
import "./../../scss/layout.scss"
import "./../../scss/variables.scss"

function MenyCard({ children }) {
    return (
        <div className='menu-card'>
            {children}
        </div>
    )
}

export default MenyCard