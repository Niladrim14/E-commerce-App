import React, { useContext, useState, useEffect, use } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const Product = () => {
  const {productId} = useParams();
  const{products} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const[image, setImage] = useState('');

  const fetchProductData = () => {
     products.map((product) =>{
      if(product._id === productId){
        setProductData(product);
        setImage(product.image[0]);
        console.log(product);
        
        
        return;
      }
     } 
    );
  
  }
 useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Details */ }
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
         {/* Product Images */ }
         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full   '>
      {
        productData.image.map((item, index)=>(
          <img onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0  border border-gray-300 cursor-pointer rounded-md shadow-lg' src={item} key={index}  />
        ))
      }
     </div>
       <div className=' w-full sm:w-[80%]'>
          <img className='w-full h-auto border border-gray-300 rounded-2xl shadow-2xl' src={image} alt={productData.name} />
         </div>
       </div>
       {/* Product Info */ }
       
       
       
      </div> 
    </div>
  ) :(<div className='text-4xl'>Loading...</div>)
  
}

export default Product