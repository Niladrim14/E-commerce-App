import React, { useContext, useState, useEffect, use } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProduct from '../components/RelatedProduct';
const Product = () => {
  const {productId} = useParams();
  const{products,
         currency,
         delivery_fee} = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const[image, setImage] = useState('');
  const[rating, setRating] = useState(0);
  const[selectedSize, setSelectedSize] = useState(null);

  const fetchProductData = () => {
     products.map((product) =>{
      if(product._id === productId){
        setProductData(product);
        setImage(product.image[0]);

        setRating((Math.random() * 1.5 + 3.5).toFixed(1)); // Random rating between 3.5-5.0
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
       
       <div className='flex-1  '>
        <h1 className=' font-medium mt-2 text-4xl'>{productData.name}</h1>
        <p className='mt-3 text-gray-700 leading-relaxed'>{productData.description}</p>

          {/* Star Rating */}

          <div className='flex items-center gap-1 mt-4 '>
     
      {[1, 2, 3, 4, 5].map((star) => (
        <svg 
          key={star}
          className={`w-5 h-5 ${star <= Math.floor(rating) ? 'text-pink-500' : star - 0.5 <= rating ? 'text-pink-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <p className='pl-2 text-sm'>({rating})</p>

    </div>
        <p className='mt-6 text-3xl font-semibold  '>{currency}{productData.price.toFixed(2)}</p> 
         <div className='mt-8'>
          <p className='font-medium mb-2'>Delivery Information</p>
        
        </div>  <p className='text-gray-700'>Delivery Fee: {currency}{delivery_fee.toFixed(2)}</p>
          <p className='text-gray-700'>Estimated Delivery Time: 7-10 business days</p>
        
        <div className='my-6 flex flex-col gap-4'>
          <p>Select Size</p>
         <div className='flex gap-2'>
         { productData.sizes.map((size, index) => (
            <button  onClick={() => setSelectedSize(size)} key={index} className={`border border-gray-400 px-4 py-2 rounded-md hover:border-pink-500 transition-colors duration-300 ${selectedSize === size ? 'bg-pink-500 text-white' : ''}`}>{size}</button>
          )) }
         </div>
        </div>
      
       
        <div className='mt-6'>
           <button className='bg-gray-800 text-white px-9 py-3 rounded-md hover:bg-pink-600 transition-colors duration-300'>Add to Cart</button>
           <hr className='mt-8 sm:w-4/5 text-gray-500 ' />
           <div className='text-sm text-gray-700 mt-5 flex flex-col gap-2'>
            <p>Why shop with us?</p>
            <p>• 30-day return policy</p>
            <p>• Secure payment processing</p>
            <p>• Quality assurance on all products</p>
           </div>
            </div>
          </div>
        </div> 
            <div className='mt-16'>
      {/* Reviews Section */}
      <h2 className='text-3xl font-semibold mb-8'>Customer Reviews</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Review 1 */}
        <div className='border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className='w-4 h-4 text-yellow-400' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className='text-sm text-gray-500'>5.0</span>
          </div>
          <h3 className='font-semibold mb-2'>Excellent Quality!</h3>
          <p className='text-gray-600 text-sm mb-3'>Absolutely love this product. The quality exceeded my expectations and it arrived quickly.</p>
          <p className='text-xs text-gray-400'>- Sarah M.</p>
        </div>

        {/* Review 2 */}
        <div className='border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='flex'>
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className='w-4 h-4 text-yellow-400' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className='w-4 h-4 text-gray-300' fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className='text-sm text-gray-500'>4.0</span>
          </div>
          <h3 className='font-semibold mb-2'>Great value for money</h3>
          <p className='text-gray-600 text-sm mb-3'>Really happy with my purchase. Fits perfectly and looks exactly like the photos.</p>
          <p className='text-xs text-gray-400'>- John D.</p>
        </div>

        {/* Review 3 */}
        <div className='border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className='w-4 h-4 text-yellow-400' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className='text-sm text-gray-500'>5.0</span>
          </div>
          <h3 className='font-semibold mb-2'>Highly Recommend!</h3>
          <p className='text-gray-600 text-sm mb-3'>Perfect product! The material is premium and the fit is amazing. Will buy again!</p>
          <p className='text-xs text-gray-400'>- Emily R.</p>
        </div>

        {/* Review 4 */}
        <div className='border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='flex'>
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className='w-4 h-4 text-yellow-400' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className='w-4 h-4 text-gray-300' fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className='text-sm text-gray-500'>4.0</span>
          </div>
          <h3 className='font-semibold mb-2'>Good product</h3>
          <p className='text-gray-600 text-sm mb-3'>Nice quality and comfortable. Shipping was a bit slow but worth the wait.</p>
          <p className='text-xs text-gray-400'>- Michael B.</p>
        </div>

        {/* Review 5 */}
        <div className='border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className='w-4 h-4 text-yellow-400' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className='text-sm text-gray-500'>5.0</span>
          </div>
          <h3 className='font-semibold mb-2'>Perfect!</h3>
          <p className='text-gray-600 text-sm mb-3'>Exactly what I was looking for. The sizing chart was accurate and helpful.</p>
          <p className='text-xs text-gray-400'>- Lisa K.</p>
        </div>

        {/* Review 6 */}
        <div className='border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='flex'>
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className='w-4 h-4 text-yellow-400' fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className='w-4 h-4 text-gray-300' fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className='text-sm text-gray-500'>4.0</span>
          </div>
          <h3 className='font-semibold mb-2'>Very satisfied</h3>
          <p className='text-gray-600 text-sm mb-3'>Great product overall. Would have given 5 stars if shipping was faster.</p>
          <p className='text-xs text-gray-400'>- David P.</p>
        </div>
      </div>
 </div>
 {/*Related Products Section */}

<RelatedProduct  />
    </div>
  ) :(<div className='text-4xl'>Loading...</div>)
  
}

export default Product