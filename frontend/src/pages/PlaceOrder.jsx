import React from 'react'
import {ShopContext} from '../context/ShopContext'
import { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'


const PlaceOrder = () => {
  const [method ,setmethod] = React.useState('cod')
  const {navigate} = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-2 sm:px-0'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder="First Name" required />
          <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder="Middle Name" />
          <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder="Surname" required />
        </div>
         <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="email" placeholder="Email address" required />
         <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder="Street Address" required />  
          <div className='flex gap-3'>
          <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder="City" required />
          <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder="State/Province" required />
          <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder="Postal Code" required />
        </div>

         <div className='flex gap-3'>
          <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder="Phone Number" required />
          <input className='border border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder="Country" required />
        </div>
      </div>
      
      {/* Order Summary Section - To be implemented */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
        <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"}/>
            <div className='flex gap-3 flex-col lg:flex-row'>

              <div  onClick={()=>setmethod('razorpay')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''} `}></p>  
              <img  className='h-5 mx-4' src={assets.razorpay_logo}  />
              </div>
                 <div  onClick={()=>setmethod('stripe')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500 ' : ''} `}></p> 
                <img  className='h-5 mx-4' src={assets.stripe_logo}  />
              </div>
                 <div  onClick={()=>setmethod('cod')}  className='flex items-center gap-3 border border-gray-300   p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''} `}></p>  
                      <p className='text-gray-600'>Cash on Delivery</p>
              </div>
            </div>
            <div>
          <button onClick={()=>navigate('/orders')} className='bg-pink-600 text-white w-full py-3 mt-6 hover:bg-pink-700  font-semibold  transition-colors'>PLACE ORDER</button>
            </div>
        </div>

      </div>

    </div>
  )
}

export default PlaceOrder