import React from "react"
import banner1 from '../../Assets/images/annocument/banner-1.png'
import banner2 from '../../Assets/images/annocument/banner-2.png'

const Annocument = () => {
    const mystyle = {
        width: "30%",
        height: "340px",
    }
    const mystyle1 = {
        width: "68%",
        height: "340px",
    }
    return (
        <>
            <section className='annocument background'>
                <div className='container d_flex'>
                    <div className='img' style={mystyle}>
                        <img src={banner1} alt="banner"  />
                    </div>
                    <div className='img' style={mystyle1}>
                        <img src={banner2} alt="banner"  />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Annocument
