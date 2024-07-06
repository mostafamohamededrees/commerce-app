import React from 'react'
import Ddata from './discData'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Dcard() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <Slider {...settings}>
                {Ddata.map((value, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className='box product'>
                                <div className='img'>
                                    <img src={value.cover} alt='' width='100%' />
                                </div>
                                <h4>{value.name}</h4>
                                <span>{value.price}</span>
                            </div>
                        </React.Fragment>
                    )
                })}
            </Slider>
        </>)
}
