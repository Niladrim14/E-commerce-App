import React, {createContext, useEffect, useState} from 'react';
import { toast } from 'react-hot-toast';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {

    const currency = '$';
    const delivery_fee = 20.00;
    const [search,setsearch] = useState('');
    const [showsearch,setshowsearch] = useState(false);
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (itemId,size) => {
        if(!size){
           toast.error("Please select a size");
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
        toast.success("Item added to cart");
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
         getCartCount
    }
    
    return (
        <ShopContext.Provider value={shop}>
            {children}
        </ShopContext.Provider>
    )
} 

export default ShopContextProvider;

<button onClick={(e) => {
    e.preventDefault(); // Prevent form submission/page reload
    addToCart(productData._id, selectedSize);
}}>
    ADD TO CART
</button>