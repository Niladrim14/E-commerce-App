import React from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {

    const{getCartAmount,currency,delivery_fee,cartItems} = React.useContext(ShopContext);
    const [totalAmount, setTotalAmount] = React.useState(0);

    React.useEffect(() => {
        const fetchAmount = async () => {
            const amount = await getCartAmount();
            setTotalAmount(amount);
        };
        fetchAmount();
    }, [cartItems]);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
<Title text1={'CART'} text2={'TOTAL'}/>
</div>

    <div className='flex flex-col gap-2 mt-2 text-gray-700 text-sm'>
    <div className='flex justify-between'>
        <p>Subtotal</p>
        <p className='text-pink-900'>  {currency}{totalAmount.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between '>  
        <p>Delivery Fee</p>
        <p className='text-pink-900'> {currency}{delivery_fee.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between font-semibold text-lg mt-2'>
        <p>Total</p>
        <p className='text-pink-900'>{currency}{(totalAmount === 0 ? 0 : totalAmount + delivery_fee).toFixed(2)}</p>

        </div>


    
        </div>
     
    </div>
  )
}

export default CartTotal