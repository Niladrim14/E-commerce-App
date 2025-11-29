import React, {createContext, useEffect, useState} from 'react';
import { toast } from 'react-hot-toast';
import { products } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {

    const currency = '$';
    const delivery_fee = 20.00;
    const [search,setsearch] = useState('');
    const [showsearch,setshowsearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();


    const addToCart = async (itemId,size) => {
        if(!size){
           toast.error("Please select a size", { duration: 1000 });
            return;
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        toast.success("Item added to cart", { duration: 1000 });
    };
   
    const getCartCount = () => {
        let count = 0;
        for(const itemId in cartItems){
            for(const size in cartItems[itemId]){
                count += cartItems[itemId][size];
            }
        }
        return count;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = async () => {
        let totalamount = 0;
        for(const items in cartItems){
            let productData = products.find((product) => product._id === items);
            for (const item in cartItems[items]){
                totalamount += productData.price * cartItems[items][item];
            }
        }
      
        return totalamount;
    };
    
   
    const shop = {
         products,
         currency,
         delivery_fee,
         search,
         setsearch,
         showsearch,
         setshowsearch,
         cartItems,
         addToCart,
         getCartCount,
         updateQuantity,
         getCartAmount,
         navigate
    }
    
    return (
        <ShopContext.Provider value={shop}>
            {children}
        </ShopContext.Provider>
    )
} 

export default ShopContextProvider;


