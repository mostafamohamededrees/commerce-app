import React from 'react'
import ArrivalData from './ArrivalData'
import './style.css'

export default function CartArrivals() {
  return (
    <div className="content grid grid-Md  ">
      {
        ArrivalData.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })
      }
    </div>
  )
}
