import React from 'react'
import CartArrivals from './CartArrivals'

export default function Arrivals() {
    return (
        <>
            <section className='NewArrivals background'>
                <div className='container'>
                    <div className='heading d_flex'>
                        <div className='heading-left row  f_flex'>
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt='logo' />
                            <h2>New Arrivals </h2>
                        </div>
                        <div className='heading-right row '>
                            <span>View all</span>
                            <i className='fa-solid fa-caret-right'></i>
                        </div>
                    </div>
                    <CartArrivals />
                </div>
            </section>
        </>
    )
}



