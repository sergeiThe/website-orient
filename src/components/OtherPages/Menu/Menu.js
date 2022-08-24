import React from 'react'
import "./Menu.scss"
import { Link } from 'react-router-dom'
import { usePageCategoryContext } from '../../../store/page-context'
import { pageCategories } from '../../../store/page-context'

function Menu() {

    const categoryContext = usePageCategoryContext();

    const goToPageHandler = (page) => {
        if (page === categoryContext.pageCategory) { return; }

        categoryContext.changePageCategory(page);
    }

    return (
        <div className='menu'>
            <nav>
                <ul>
                    <li><a href='/'>Book time</a></li>
                    <li><Link to={'/'}>Hjem</Link></li>
                    <li><button
                        style={{ color: categoryContext.pageCategory === pageCategories.about ? 'red' : 'green' }}
                        onClick={goToPageHandler(pageCategories.about)}
                    >Om oss</button></li>
                    <li><button
                        style={{ color: categoryContext.pageCategory === pageCategories.services ? 'red' : 'green' }}
                        onClick={goToPageHandler(pageCategories.services)}
                    >Tjenester</button></li>
                    <li><button
                        style={{ color: categoryContext.pageCategory === pageCategories.contact ? 'red' : 'green' }}
                        onClick={goToPageHandler(pageCategories.contact)}
                    >Kontakt</button></li>
                    <li><button
                        style={{ color: categoryContext.pageCategory === pageCategories.openHours ? 'red' : 'green' }}
                        onClick={goToPageHandler(pageCategories.openHours)}
                    >Åpningstimer</button></li>

                </ul>
            </nav>
        </div>
    )
}

export default Menu