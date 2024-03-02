import React from 'react'
import { RiShoppingBasket2Fill } from "react-icons/ri";

const Product = ({Product}) => {
  return (
    <div className='productitemm'>

        <img src={Product.image.url} alt="" className='img1item'/>
        <div className="productitemicon d-flex align-items-center justify-content-between">
        <div>
          <p>
            {Product.name}
          </p>
          <h3>${Product.price.formatted}</h3>
        </div>
        <button><RiShoppingBasket2Fill /></button>
        </div>


    </div>
  )
}

export default Product