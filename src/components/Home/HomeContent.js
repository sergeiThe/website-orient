import React from 'react'
import video from './../../resources/video/video.mp4'
import "./HomeContent.scss"
import { Link } from "react-router-dom"
import { useIsHomeContext, usePageCategoryContext, pageCategories } from '../../store/page-context'


function HomeContent() {

    const isHomeCtx = useIsHomeContext();
    const pageCatCtx = usePageCategoryContext();

    const switchPageTypeHandler = () => {
        isHomeCtx.changePageType(false);
        pageCatCtx.changePageCategory(pageCategories.about)
    }

    return (
        <section className='main-section home-section'>
            <div className='title-container'>
                <h1>Oriental Thaimassasje Trondheim</h1>
            </div>

            <div className='home_content-wrapper'>
                <div className='home_text-wrapper'>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <Link to={'sider'} onClick={switchPageTypeHandler}>Oppdag</Link>
                </div>

                <video autoPlay loop muted>
                    <source src={video} />
                </video>

            </div>
        </section>
    )
}

export default HomeContent