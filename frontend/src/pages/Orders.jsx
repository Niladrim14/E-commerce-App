import React, {useContext, useEffect} from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title' 


const Orders = () => {
  const {products, cartItems, currency} = useContext(ShopContext)
  const [orderData, setOrderData] = React.useState([]);

  useEffect(() => {
    const tempOrders = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const productData = products.find((product) => product._id === itemId);
          if (productData) {
            tempOrders.push({
              _id: itemId,
              name: productData.name,
              image: productData.image[0],
              price: productData.price,
              size: size,
              quantity: cartItems[itemId][size],
              date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
              status: 'Processing',
              paymentStatus: 'Pending'
            });
          }
        }
      }
    }
    setOrderData(tempOrders);
  }, [cartItems, products]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'Shipped':
        return 'bg-blue-100 text-blue-700';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className='border-t pt-16 px-4 sm:px-0'>
      <div className='text-2xl mb-8'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className='space-y-4'>
        {orderData.length > 0 ? (
          orderData.map((order, index) => (
            <div key={index} className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'>
              <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
                {/* Product Image */}
                <img 
                  className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded' 
                  src={order.image} 
                  alt={order.name} 
                />

                {/* Order Details */}
                <div className='flex-1'>
                  <p className='font-semibold text-base sm:text-lg mb-1'>{order.name}</p>
                  <div className='flex flex-wrap gap-3 text-sm text-gray-600 mb-2'>
                    <p className='flex items-center gap-1'>
                      <span className='font-medium'>Price:</span> {currency}{order.price.toFixed(2)}
                    </p>
                    <p className='flex items-center gap-1'>
                      <span className='font-medium'>Quantity:</span> {order.quantity}
                    </p>
                    <p className='flex items-center gap-1'>
                      <span className='font-medium'>Size:</span> {order.size}
                    </p>
                  </div>
                  <p className='text-xs text-gray-500'>Order Date: {order.date}</p>
                </div>

                {/* Status & Actions */}
                <div className='flex flex-col sm:items-end gap-3 w-full sm:w-auto'>
                  <div className='flex gap-2 items-center'>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    <span className='w-2 h-2 bg-gray-300 rounded-full'></span>
                    <span className='text-xs text-gray-600'>{order.paymentStatus}</span>
                  </div>
                  <button className='border border-gray-300 px-4 py-2 text-sm rounded hover:bg-gray-50 transition-colors w-full sm:w-auto'>
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='text-center py-20 border border-dashed border-gray-300 rounded-lg'>
            <div className='text-gray-400 text-6xl mb-4'>📦</div>
            <p className='text-gray-500 text-lg mb-2'>No orders yet</p>
            <p className='text-gray-400 text-sm mb-6'>Your order history will appear here</p>
            <button 
              onClick={() => window.location.href = '/collection'}
              className='bg-black text-white px-8 py-3 text-sm rounded hover:bg-gray-800 transition-colors'
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders