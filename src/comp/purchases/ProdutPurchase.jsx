import React from 'react'

export const ProdutPurchase = ({product}) => {
  return (
    <li className='card-purchase__item'>
        <h4 className='card-purchase_name'>{product.title}</h4>
        <span className='card-purchase_quantity'>{product.productsInCart.quantity}</span>
        <span className='card-purchase_price'>{product.price}</span>
    </li>
  )
}
