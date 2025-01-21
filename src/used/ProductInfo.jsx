import React from 'react'

const name = "laptop negativo"
const price = 2999
const avaliability = "disponivel"


const ProductInfo = () => {
  return (
    <div>
        <p>Nome: {name}</p>
        <p>preço: R${price}</p>
        <p>disponibilidade: {avaliability}</p>
    </div>
  )
}

export default ProductInfo