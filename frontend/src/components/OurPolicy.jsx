import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
            <p className=' font-semibold'>Easy Returns and Exchanges</p>
            <p className='text-gray-500'>Hassle-free returns and exchanges within 30 days.</p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Quality Icon" />
            <p className=' font-semibold'>Quality Assurance</p>
            <p className='text-gray-500'>We ensure the highest quality standards for all our products.</p>
        </div>


        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support Icon" />
            <p className=' font-semibold'>Customer Support</p>
            <p className='text-gray-500'>24/7 customer support to assist you with any inquiries.</p>
        </div>

    </div>
  )
}

export default OurPolicy