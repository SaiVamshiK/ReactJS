import React from 'react'

export default function Product(props) {
  console.log(props.product.price)
  return (
    <div className='row'>
      <div className='col-6'>
        <h2>{props.product.model} <span className="badge bg-secondary">₹{props.product.price}</span> </h2>        
      </div>
    </div>
  )
}
