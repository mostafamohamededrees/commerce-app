import React from 'react'
import cat1 from "../../Assets/images/category/cat1.png"
import cat2 from '../../Assets/images/category/cat2.png'
import cat3 from '../../Assets/images/category/cat3.png'
import cat4 from '../../Assets/images/category/cat4.png'
import cat5 from '../../Assets/images/category/cat5.png'
import cat6 from '../../Assets/images/category/cat6.png'
import cat7 from '../../Assets/images/category/cat7.png'
import cat8 from '../../Assets/images/category/cat8.png'
import cat9 from '../../Assets/images/category/cat9.png'
import cat10 from '../../Assets/images/category/cat10.png'
import cat11 from '../../Assets/images/category/cat11.png'




export default function Categories() {
    const data = [
        {
            cateImg: cat1,
            cateName: "Fashion",
        },
        {
            cateImg: cat2,
            cateName: "Electronic",
        },
        {
            cateImg: cat3,
            cateName: "Cars",
        },
        {
            cateImg: cat4,
            cateName: "Home & Garden",
        },
        {
            cateImg: cat5,
            cateName: "Gifts",
        },
        {
            cateImg: cat6,
            cateName: "Music",
        },
        {
            cateImg: cat7,
            cateName: "Health & Beauty",
        },
        {
            cateImg: cat8,
            cateName: "Pets",
        },
        {
            cateImg: cat9,
            cateName: "Baby Toys",
        },
        {
            cateImg: cat10,
            cateName: "Groceries",
        },
        {
            cateImg: cat11,
            cateName: "Books",
        },
    ]

    return (
        <>
            <div className="category">

                {
                    data.map((item, index) => {
                        return (
                            <div className="box  f_flex" key={index}>
                                <img src={item.cateImg} alt="img" />
                                <span >{item.cateName}</span>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
