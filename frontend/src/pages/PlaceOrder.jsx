import React from 'react'
import {ShopContext} from '../context/ShopContext'
import { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'


const PlaceOrder = () => {

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-2 sm:px-0'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="text" placeholder="First Name" required />
          <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="text" placeholder="Middle Name" />
          <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="text" placeholder="Surname" required />
        </div>
         <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="email" placeholder="Email address" required />
         <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="text" placeholder="Street Address" required />

          <div className='flex gap-3'>
          <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="text" placeholder="City" required />
          <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="text" placeholder="State/Province" required />
          <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="text" placeholder="Postal Code" required />
        </div>

         <div className='flex gap-3'>
          <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="text" placeholder="Phone Number" required />
          <input className='border border-gray-600 py-1.5 px-3.5 w-full' type="text" placeholder="Country" required />
        </div>
      </div>
      
      {/* Order Summary Section - To be implemented */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
        <CartTotal/>
        </div>

      </div>


    </div>
  )
}

export default PlaceOrder