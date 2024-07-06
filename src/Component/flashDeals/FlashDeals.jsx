import React from 'react'
import FlashCard from './FlashCard'

export default function FlashDeals({  addToCart }) {
    return (
        <>
            <section className='flash background'>
                <div className='container'>
                    <div className='heading f_flex'>
                        <i className='fa fa-bolt'></i>
                        <h1>Flash Delas</h1>
                    </div>
                    <FlashCard addToCart={addToCart}  />
                </div>
            </section>
        </>
    )
}
