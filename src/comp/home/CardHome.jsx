import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const CardHome = ({ product }) => {
  const [added, setAdded] = useState()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddCart = e => {

    const token = localStorage.getItem("token")
    e.stopPropagation()
    if (token) { alert("Succesfully added to cart") } else {
      alert("you need to log in")
    }

    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart"
    const obj = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }


  return (
    <article onClick={handleClick} className='card-home'>
      <header className='card-home_header'>
        <img className="card-home_img" src={product.productImgs[0]} alt=""
        />   </header>


      <div className='car-home__body'>
        <h3 className='card-home__name'>{product.title}</h3>
        <section className='card-home__price'>
          <h4 className='card-home__price-label'>Price:</h4>
          <span className='card-home__price-value'>${product.price}</span>
        </section>
        <span className='card-home__add'>Add to cart</span>
        <button onClick={handleAddCart} className='card-home__btn'><i className="fa-solid fa-cart-plus"></i></button>




      </div>
    </article>
  )
}

export default CardHome