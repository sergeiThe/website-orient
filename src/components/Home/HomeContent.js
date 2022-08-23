import React from 'react'
import video from './../../resources/video/video.mp4'

function HomeContent() {
    return (
        <section className='main-section'>
            <div className='title-container'>
                <h1>Oriental Thaimassasje Trondheim</h1>
            </div>

            <div className='home_content-wrapper'>
                <div className='home_text-wrapper'>
                    <p>dsdsds wdef wfew efwefwe w</p>
                    <button>Oppdag</button>
                </div>
                <div className='home_video-wrapper'>
                    <video width={320} height={250} controls>
                        <source src={video} />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default HomeContent