import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [FilteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState('relavent');
 
  // Generic toggle function for any filter type
  const toggleFilter = (value, selectedArray, setSelectedArray) => {
    if (selectedArray.includes(value)) {
      // Remove if already selected
      setSelectedArray(prev => prev.filter((item) => item !== value));
    } else {
      // Add if not selected
      setSelectedArray(prev => [...prev, value]);
    }
  };

  const toggleCategory = (e) => {
    toggleFilter(e.target.value, selectedCategories, setSelectedCategories);
  };

  const toggleType = (e) => {
    toggleFilter(e.target.value, subCategory, setSubCategory);
  };

  useEffect(() => {
    let updatedProducts = [...products];

    // Filter by categories
    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by types
    if (subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case 'low-high':
        updatedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        updatedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // 'relavent' - keep original order
        break;
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategories, subCategory, products, sortOption]);
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Add filter options  */}
      <div className='min-w-60'>
      <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
        <img className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`}  src={assets.dropdown_icon}  />
      </p>
      {/*Category Filter */}
      <div className={`border border-gray-300 pl-5 my-5  ${showFilters ? '' : 'hidden'} sm:block`}> 
        <p className='mb-3 text-sm mt-2 font-medium'> CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2 '> 
            <input type="checkbox" className='w-3' value={'Men'}
             id="" onChange={toggleCategory} />Men
          </p>
             <p className='flex gap-2 '> 
            <input type="checkbox" className='w-3' value={'Women'}
             id="" onChange={toggleCategory} />Women
          </p>
             <p className='flex gap-2 mb-2 '> 
            <input type="checkbox" className='w-3  ' value={'Kids'}
             id="" onChange={toggleCategory} />Kids
          </p>
        </div>
      </div>
      {/* Subcategory Filter */}

      <div className={`border border-gray-300 pl-5   my-5 ${showFilters ? '' : 'hidden'} sm:block`}> 
        <p className='mb-3 text-sm mt-2 font-medium'> TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2 '> 
            <input type="checkbox" className='w-3' value={'Topwear'}
             id="" onChange={toggleType} />Topwear
          </p>
             <p className='flex gap-2 '> 
            <input type="checkbox" className='w-3' value={'Bottomwear'}
             id="" onChange={toggleType}   />Bottomwear
          </p>
           <p className='flex gap-2 '> 
            <input type="checkbox" className='w-3' value={'Winterwear'}
             id="" onChange={toggleType} />Winterwear
          </p>
             <p className='flex gap-2 mb-2 '> 
            <input type="checkbox" className='w-3' value={'Accessories'}
             id="" onChange={toggleType} />Accessories
          </p>
        </div>
      </div> 
     <div>
     </div>
      </div>
      {/* Right Display */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4 '>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Sort By Dropdown */}
          <select 
            className='border border-gray-300 text-sm px-2 hover:border-gray-900'
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option className='bg-black text-white hover:bg-gray-800' value="relavent">Relevance</option>
            <option className='bg-black text-white hover:bg-gray-800' value="low-high">Low to High</option>
            <option className='bg-black text-white hover:bg-gray-800' value="high-low">High to Low</option>
          </select>
        </div>
          {/* Products Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 '>
            {
              FilteredProducts.map((item)=>{
                return <ProductItem key={item._id} id={item._id} name ={item.name} image={item.image} price={item.price} />
              })
            }
     
          </div>
      
      
      </div>
    </div>
  )
}

export default Collection