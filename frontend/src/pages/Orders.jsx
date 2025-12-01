import React,{useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title' 


const Orders = () => {
 const {products ,cartItems ,getTotalCartAmount,currency} = useContext(ShopContext)
  return (
    <div>
      <div className='text-2xl mb-3 mt-14'>
    <Title text1={"Your"} text2={"Orders"}/>
      </div>
      <div >
         {
          products.slice(1,4).map((item,index)=>(
             <div  key ={index} className='py-4 border-b border-t text-gray-400 flex flex-col md:flex-row  md:flex  md:items-center justify-between gap-6 shadow-xl '>
              <div className='flex items-start gap-6 text-sm '>
                <img className='w-16 sm:w-20' src={item.image[0]} alt={item.name} />
                <div>
                  <p className='sm:text-base font-medium text-gray-800'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700 '>
                    <p className='text-m'>{currency}{item.price}</p>
                    <p>Quantity-1</p>
                    <p>Size M</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>24.July</span></p>
                </div>

              </div>

             </div>
          ))
         }
      </div>
    </div>
  )
}

export default Orders