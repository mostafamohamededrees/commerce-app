import React from 'react'
import Categories from './Categories'
import Slider from './Slider'

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="container d_flex">
                    <Categories />
                    <Slider />

                </div>
            </div>
        </>
    )
}
