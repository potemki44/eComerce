import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'



const ProductCartInfo = ({product, getAllProductsCart}) => {

  const handleDeleteProduct =()=>{
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
  axios.delete(URL,getConfig())
  .then(()=>getAllProductsCart())
  .catch(err=>console.log(err))
  }

  return (
    <article className='cart__item'>
      <header className='cart__item-header'>
        <h4 className='cart__category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
      </header>
    
      <span className='cart__quantity'> {product.productsInCart.quantity} Added </span>
      <div>
        <span className='cart__total-label'> Price:</span>
        <p className='cart__total-number'>{product.price}$</p>
   <i  onClick={handleDeleteProduct} className="fa-regular fa-trash-can"></i>
        
      </div>
    </article>

  )
}

export default ProductCartInfo