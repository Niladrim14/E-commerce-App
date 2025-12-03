import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterbox from '../components/NewsLetterbox'

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        {/* Contact Image */}
        <img className='w-full md:max-w-[480px] rounded-lg shadow-lg' src={assets.contact_img} alt="Contact Us" />
        
        {/* Contact Information */}
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          
          <p className='text-gray-500'>
            Tel: (415) 555-0132 <br />
            Email: admin@forever.com
          </p>

          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className='my-10 max-w-3xl mx-auto'>
        <div className='text-center text-2xl mb-8'>
          <Title text1={'GET IN'} text2={'TOUCH'} />
        </div>

        <form className='flex flex-col gap-4'>
          <div className='flex flex-col sm:flex-row gap-4'>
            <input
              type="text"
              placeholder='Your Name'
              className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500'
              required
            />
            <input
              type="email"
              placeholder='Your Email'
              className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500'
              required
            />
          </div>

          <input
            type="text"
            placeholder='Subject'
            className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500'
            required
          />

          <textarea
            placeholder='Your Message'
            rows='6'
            className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 resize-none'
            required
          ></textarea>

          <button
            type='submit'
            className='bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors self-start'
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Newsletter */}
      <NewsLetterbox />
    </div>
  )
}

export default Contact