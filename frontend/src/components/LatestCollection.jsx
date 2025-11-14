import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const {products}=useContext(ShopContext);
   const [latestProducts, setLatestProducts] = React.useState([]);
   
   React.useEffect(() => { 
    setLatestProducts(products.slice(0,10));
    }, []);
  
  return (
    <div className='my-10 '>
        <div className='text-center py-8 text-4xl '>
         <Title text1="LATEST" text2="COLLECTIONS" />
          <p className='w-3/4 m-auto text-xs sm:text-sm text-gray-500'>Discover our newest arrivals and stay ahead of the trends with our latest collections.</p>
        </div>
        {/* Product Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {latestProducts.map((item)=>(
            <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>

    </div>
  )
}

export default LatestCollection