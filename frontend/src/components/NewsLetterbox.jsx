import React from 'react'
import toast from 'react-hot-toast';

const NewsLetterbox = () => {
  const OnSubmit = (e) => {
    e.preventDefault();
    toast.success("Subscribed to newsletter successfully!");
    e.target.reset();
    
  }
  return (
    <div className='text-center py-10'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe to our newsletter for the latest updates and offers!</p>
        <p className='text-gray-600 mt-1 '>Stay informed with exclusive deals and news delivered straight to your inbox.</p>
        <form onSubmit={OnSubmit} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />

            <button type='submit' className='bg-black text-white px-10 py-4  hover:bg-pink-600 transition-colors duration-300 '>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterbox