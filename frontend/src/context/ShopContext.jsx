
import {createContext, useState} from 'react';
export const ShopContext = createContext();

import { products } from '../assets/assets';
const ShopContextProvider = ({children}) => {

    const currency = '$';
    const delivery_fee = 20.00;
    const [search,setsearch] = useState('');
    const [showsearch,setshowsearch] = useState(false);

    const shop = {
         products,
         currency,
         delivery_fee,
            search,
            setsearch,
            showsearch,
            setshowsearch

    }
    return (
        <ShopContext.Provider value={shop}>
            {children}
        </ShopContext.Provider>
    )
} 
export default ShopContextProvider;