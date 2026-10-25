import React from 'react'
import "./card.css"
const Card = ({product}) => {
  
  return (
    <div className='card'>
        <p>Name : {product.name}</p>
        <h2>price: {product.price} </h2>
        <p>Rating: {product.rating} </p>
    </div>
  )
}

export default Card