import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32 ' alt="Logo" />
                <p className='w-full md:w-2/3 text-gray-600 '>
                    This is the best ecommerce platform for all your shopping needs. Look no further! 
                    We offer a wide range of quality products at competitive prices with fast delivery. 
                    Shop with confidence knowing that customer satisfaction is our top priority. 
                    Join thousands of happy customers who trust us for their online shopping experience.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='/'><li className='cursor-pointer hover:text-black'>Home</li></Link>

                    <Link to='/about'><li className='cursor-pointer hover:text-black'>About Us</li></Link>

                    <Link to='/collection'><li className='cursor-pointer hover:text-black'>Delivery</li></Link>
                    
                    <Link to='/contact'><li className='cursor-pointer hover:text-black'>Privacy Policy</li></Link>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@forever.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer