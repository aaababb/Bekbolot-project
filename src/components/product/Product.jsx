import React from 'react'
import { Link } from 'react-router-dom'

import './Product.css'

function Product({data}) {
  return (
    <div className='all-products'>
        <div className='product'>
            <img src={data.image} alt="" />
            <h2>{data.title}</h2>
            <p className='discount'>1000</p>
            <div className='price'>
                <p>{data.price}</p>
                <p>{data.currency}</p>
            </div>
        </div>
    </div>
  )
}

export default Product