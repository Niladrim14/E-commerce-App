import React from 'react'
import {ShopContext} from '../context/ShopContext'
import { useContext } from 'react'

const Cart = () => {
  const {products,currency,cartItems} = useContext(ShopContext);
  const [totalAmount,setTotalAmount] = React.useState(0);
  const [CartData,setCartData] = React.useState([]);
  
  

  return (
    <div >


    </div>

  )
}

export default Cart