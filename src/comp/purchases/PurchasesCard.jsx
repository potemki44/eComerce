import React from 'react'
import { ProdutPurchase } from './Produtpurchase'

const PurchasesCard = ({purchase}) => {
    console.log(purchase)
  return (
<article className='card-purchase'>
    <h3 className='card-purchase__date'>{purchase.createdAt}</h3>
<ul className='card-purchase__body'>
    {
        purchase.cart.products.map(product =>(<ProdutPurchase 
            key={product.id}
        product={product}/>

        ))
    }
</ul>
</article>
  )
}

export default PurchasesCard