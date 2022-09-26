
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'



const ProductDetail = () => {

  const [productInfo, setProductInfo] = useState()


  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))
  }, [])


  const { id } = useParams()

console.log(productInfo)
  return (


    <div><ProductDescription productInfo={productInfo}/></div>

  )
}

export default ProductDetail