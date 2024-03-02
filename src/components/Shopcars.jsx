import React from 'react'
import img from '../images/model-s.jpg'

const Shopcars = ({title,dec,img}) => {
  return (
    <div>
       <img src={img} alt="" srcset="" className='carimg' />

       <div className='cardiv'>

        <h1>{title}</h1> 

       <p>{dec}</p> 

       </div>
       
    </div>
  )
}

export default Shopcars