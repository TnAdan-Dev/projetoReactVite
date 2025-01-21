import React from 'react'

const ProductList = () => {
    const products = [
    {id: 1, name: "ventilador", price: 299},
    {id: 2, name: "caderno", price: 29},
    {id: 3, name: "chocolate", price: 5}
    ]
    
  return (
    <div>
        {products.map(product => (
            <ul key={product.id}>
                <li>Produto: {product.name}</li>
                <li>Preço: {product.price}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList