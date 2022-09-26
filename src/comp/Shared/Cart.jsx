import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from './ProductCartInfo'


const Cart = () => {

    const [cartProducts, setCartProducts] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const getAllProductsCart = () => {
        const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart"

        axios.get(URL, getConfig())
            .then(res => {
                const products = res.data.data.cart.products
                setCartProducts(products)
                const total = products.reduce((acc, cv) => {
                    return Number(cv.price) * cv.productsInCart.quantity + acc
                }, 0)
                console.log(total)
            })
            .catch(err => setCartProducts())
    }

    useEffect(() => {
        getAllProductsCart()

    }, [])

    const handleCheckOut = () => {
        const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases"
        const obj = {

            street: "green St. 1456",
            colony: "southwest",
            zipCode: 12345,
            city: 'USA',
            references: "Some references"
        }

        axios.post(URL, obj, getConfig())
            .then(res => {
                console.log(res.data)
                getAllProductsCart()
            })
            .catch(err => console.log(err))

    }

    return (

        <section className='cart'>

            <h2 className='cart__title'>Cart</h2>

            {cartProducts?.map(product => (<ProductCartInfo
                key={product.id}
                product={product}
                getAllProductsCart={getAllProductsCart} />
            ))
            }



            <hr className='cart__hr' />
            <button onClick={handleCheckOut} className='cart__btn'>Checkout</button>
            <footer className='cart__footer'>
                <span className='cart__total-global-label'></span>
                <p className='cart__total-global-value'></p>
                <span className='cart__adv'> ADD Your products from Home </span>

            </footer>
        </section>

    )
}

export default Cart