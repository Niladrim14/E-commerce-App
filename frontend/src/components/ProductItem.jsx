import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
   

const ProductItem = ({id,image,name,price}) => {
     const {currency}= useContext(ShopContext);
     
  return (
    <Link  to={`/product/${id}`} className='border border-gray-300 group hover:shadow-lg duration-300 rounded-md overflow-hidden '>
        <div className=' overflow-hidden relative'>
            <img  className='hover-scale-110 transition ease-in-out' src={image[0]}  />
            </div>
            <p className='flex justify-center pt-3 pb-1 text-sm'>{name}</p>
            <p className='flex justify-center text-sm font-medium'> {currency}{price}</p>
    </Link>

  )
}

export default ProductItem