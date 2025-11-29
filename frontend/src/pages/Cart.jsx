import React, { useEffect } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useContext } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'


const Cart = () => {
  const {products,currency,cartItems,updateQuantity,navigate} = useContext(ShopContext);
  const [CartData,setCartData] = React.useState([]);

  useEffect(() => {
   const tempData = [];
   for (const items in cartItems) {
    for (const item in cartItems[items]) {
    if( cartItems[items][item] > 0){
      tempData.push({
        _id: items,
        size: item,
        quantity: cartItems[items][item],
       
        
      });
    }
    }
   }
   console.log(tempData);
   setCartData(tempData);
    
  }, [cartItems]);
  
  

  return (
    <div  className='boder-t pt-14    '>
    <div className='text-2xl mb-3'> 
   <Title text1={"Your"} text2={"Cart"}/>
    </div>
  <div>
    {
      CartData.map((item,index)=>{
      const productData = products.find((product) => product._id === item._id);
      return (
       <div key ={index} className='py-4 border-b border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[3fr_1fr_1fr] mt-3 items-center gap-4 shadow-xl'>
        <div className='flex items-start gap-6'>
          <img  className=' w-20 sm:w-30  rounded-lg' src={productData.image[0]} alt={productData.name} />
          <div>
            <p className='font-semibold'>{productData.name}</p>
            <p className='text-sm text-gray-500'>Size: {item.size}</p>
           
             <div className='flex items-center gap-2 mt-2'>
              <p className='text-sm text-gray-600'>Quantity:</p>

              <input onChange={(e) => updateQuantity(item._id, item.size, parseInt(e.target.value))} type="number" min={1} defaultValue={item.quantity}  className='border-black hover:border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 ' />
            </div>
          
          </div>
        </div>
       

          <p className='font-semibold text-pink-900 text-m mt-2'>{currency} { (productData.price * item.quantity).toFixed(2)}</p>

          
        <img onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
            

       </div>

        

      )
      })
    }
  </div>
   
   
  {/* Cart Total Component */}
  <div className='flex justify-end my-20'>
    <div className='w-full sm:w-[450px]'>
      <CartTotal/>
      <div className='w-full text-end'>
      <button onClick={() => navigate('/placeorder')} className='bg-pink-600 text-white px-6 py-2 mt-4 rounded-md hover:bg-pink-800 '>Proceed to Checkout</button>

      </div>
    </div>
  </div>

    </div>

  )
}

export default Cart