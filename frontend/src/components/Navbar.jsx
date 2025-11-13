import React from 'react'
import {assets} from '../assets/assets'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
        <div className=' flex items-center justify-between py-4 font-medium '>
            <img src={assets.logo} alt="Logo" />
            <ul className='hidden sm:flex gap-5 text-sm text-slate-700 '>
            
                  <NavLink to='/' className="flex flex-col items-center gap-1 hover:text-gray-900">
                     <p>HOME</p>
                     <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden' />
                  </NavLink>
                
                  <NavLink to='/collection' className="flex flex-col items-center gap-1 hover:text-gray-900">
                     <p>COLLECTION</p>
                     <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden' />
                  </NavLink>
                
                  <NavLink to='/about' className="flex flex-col items-center gap-1 hover:text-gray-900">
                     <p>ABOUT</p>
                     <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden' />
                  </NavLink>

                    <NavLink to='/contact' className="flex flex-col items-center gap-1 hover:text-gray-900">
                     <p>CONTACT</p>
                     <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden' />
                  </NavLink>
            </ul>
             <div className='flex items-center gap-6 '>
                <img src={assets.search_icon} alt="Search" className='w-5  cursor-pointer' />
                 <div className='group relative'>
                    <img src={assets.profile_icon} alt="User" className='w-5 cursor-pointer' />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 
                        bg-slate-50 text-gray-500 rounded-md shadow-lg '>
                            <p className='cursor-pointer hover:text-black '>Profile </p>
                             <p className='cursor-pointer hover:text-black '> Orders</p>
                             <p className='cursor-pointer hover:text-black '> Logout</p>

                        </div>
                    </div>
                 </div>
                   <div>
                    <Link to ='/cart' className='relative'>
                     <img src={assets.cart_icon} alt="Cart" className='w-5 min-w-5 cursor-pointer' />
                     <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]  '>10</p>
                    </Link>
                 </div>

             </div>
               
        </div>
  )
}   

export default Navbar