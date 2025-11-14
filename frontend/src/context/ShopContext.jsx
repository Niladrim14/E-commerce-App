
import {createContext} from 'react';
export const ShopContext = createContext();

import { products } from '../assets/assets';
const ShopContextProvider = ({children}) => {

    const currency = '$';
    const delivery_fee = 20.00;
    const shop = {
         products,
         currency,
         delivery_fee
    }
    return (
        <ShopContext.Provider value={shop}>
            {children}
        </ShopContext.Provider>
    )
} 
export default ShopContextProvider;