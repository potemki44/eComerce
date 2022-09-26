import React, { useState } from 'react'

const ProductDescription = ({ productInfo }) => {

    const [counter, setCounter] = useState(1)

const handlePlus = ()=> {
    setCounter(counter+1)
}

const handleMinus = ()=> {
    if(counter - 1 >= 0){setCounter(counter-1)}
}
    
    return (
        <section className='product-desc'>
            <h2 className="product-info-name">{productInfo?.title}</h2>
            <p className="product-info_description">{productInfo?.description}</p>
            <div className='prodcut-info_body'>
                <article className='product-info_price'>
                    <h3 className='product-info-pricr-label'> Price </h3>
                    <span className='product-info_price-value'>
                        <bold>$</bold>{productInfo?.price}</span>



                </article>
                <article className='product-info_quantity'>
                    <hr></hr>
                    <h3 className='product-info_quantity-label'>
                        Quantity
                    </h3>
                    <div className='product-info-quantity-'>
                        <button className='product-info_btn-'   onClick={handleMinus}>-</button>
                        <div>{counter}</div>
                        <button  className='product-info_btn2' onClick={handlePlus}>+</button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default ProductDescription