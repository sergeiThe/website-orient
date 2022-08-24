import React from 'react'
import Menu from './Menu/Menu'
import "./OtherPagesContent.scss"
import { usePageCategoryContext, pageCategories } from '../../store/page-context'
import About from './About/About';
import Contact from './Contact/Contact';
import OpenHours from './OpenHours/OpenHours';
import Services from './Services/Services';
import PageNotFound from './404/PageNotFound';


function OtherPagesContent() {

    const pageCatCtx = usePageCategoryContext();

    return (
        <section className='main-section other-pages-section'>

            <div className='hat'>
                <span>F IN</span>
                <span>Oriental Thaimassasje Trondheim</span>
            </div>

            <div className='other-pages-content-side'>

                {pageCatCtx.pageCategory === pageCategories.about ? <About />
                    : pageCatCtx.pageCategory === pageCategories.contact ? <Contact />
                        : pageCatCtx.pageCategory === pageCategories.openHours ? <OpenHours />
                            : pageCatCtx.pageCategory === pageCategories.services ? <Services />
                                : <PageNotFound />
                }
            </div>

            <Menu />

        </section>
    )
}

export default OtherPagesContent