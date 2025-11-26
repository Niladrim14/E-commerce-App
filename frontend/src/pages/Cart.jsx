import React from 'react'
 import {shopContext} from '../context/shopContext'
import { useContext } from 'react'

const Cart = () => {
  const {products,currency,cartItems} = useContext(shopContext);
  const [totalAmount,setTotalAmount] = React.useState(0);
  const [CartData,setCartData] = React.useState([]);
  
  

  return (
    <div >


    </div>

  )
}

export default Cart