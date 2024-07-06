import React from 'react'
import SlideCard from './SlideCard'
import './Home.css'

export default function Slider() {
    return (
        <>
            <section className='homeSlide contentWidth'>
                <div className='container'>
                    <SlideCard />
                </div>
            </section>
        </>
    )
}
