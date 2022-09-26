import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/product.slice'
import CardHome from '../home/CardHome'
import { Footer } from '../Shared/Footer'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {

dispatch(getAllProducts())

  }, [])

  const products = useSelector (state => state.products)

  console.log(products)
  return (
    <div className='home'>
        <div className='home_container-card'>
          {
            products?.map(product => (
              <CardHome key={product.id} product={product}/>

            ))
          }
        </div>
<Footer/>

    </div>
  )
}

export default Home