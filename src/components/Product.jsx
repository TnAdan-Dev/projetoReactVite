import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h2>Produto: {props.name}</h2>
        <p>Preço: {props.price}</p>
    </div>
  )
}

export default Product