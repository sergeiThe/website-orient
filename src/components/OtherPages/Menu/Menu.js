import React from 'react'
import "./Menu.scss"
import { Link } from 'react-router-dom'
import { usePageCategoryContext } from '../../../store/page-context'
import { pageCategories } from '../../../store/page-context'

function Menu() {

    const categoryContext = usePageCategoryContext();

    return (
        <div className='menu'>
            <nav>
                <ul>
                    <li><a href='/'>Book time</a></li>
                    <li><Link to={'/'}>Hjem</Link></li>
                    <li><button style={{ color: categoryContext.pageCategory === pageCategories.about ? 'red' : 'green' }}>Om oss</button></li>
                    <li><button style={{ color: categoryContext.pageCategory === pageCategories.services ? 'red' : 'green' }}>Tjenester</button></li>
                    <li><button style={{ color: categoryContext.pageCategory === pageCategories.contact ? 'red' : 'green' }}>Kontakt</button></li>
                    <li><button style={{ color: categoryContext.pageCategory === pageCategories.openHours ? 'red' : 'green' }}>Åpningstimer</button></li>

                </ul>
            </nav>
        </div>
    )
}

export default Menu