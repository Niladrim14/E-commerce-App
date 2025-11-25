import React from 'react'
import { useContext,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

const RelatedProduct = ({category,subCategory}) => {
const {products}= useContext(ShopContext);
const [relatedProducts,setRelatedProducts]= React.useState([]);

useEffect(() => {
  const filteredProducts = products.filter((product) => 
    product.category === category && product.subCategory === subCategory
  );
  setRelatedProducts(filteredProducts);
}, [category, subCategory, products]);

  return (
    <div>
     
     
    </div>
  )
}

export default RelatedProduct