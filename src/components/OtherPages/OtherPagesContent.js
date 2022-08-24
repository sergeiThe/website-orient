import React from 'react'
import Menu from './Menu/Menu'
import "./OtherPagesContent.scss"
import { usePageCategoryContext, pageCategories } from '../../store/page-context'
import About from './About/About';
import Contact from './Contact/Contact';
import OpenHours from './OpenHours/OpenHours';
import Services from './Services/Services';
import PageNotFound from './404/PageNotFound';
import Footer from './Footer/Footer';


function OtherPagesContent() {

    const pageCatCtx = usePageCategoryContext();

    return (
        <section className='main-section other-pages-section'>

            <div className='hat'>
                <span>F IN</span>
                <span>Oriental Thaimassasje Trondheim</span>
            </div>

            <div className='other-pages-content-side'>

                {pageCatCtx.pageCategory === pageCategories.contact ? <Contact />
                    : pageCatCtx.pageCategory === pageCategories.openHours ? <OpenHours />
                        : pageCatCtx.pageCategory === pageCategories.services ? <Services />
                            : <About />
                }

            </div>

            <Menu />

        </section>
    )
}

export default OtherPagesContent