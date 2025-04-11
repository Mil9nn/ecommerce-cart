import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, addToCart, handleIncrement, handleDecrement } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const handlePrice = () => {
      const total = cart.reduce((sum, item) => sum + (item.price * item.count), 0);
      setTotalPrice(total);
    }
    handlePrice();
  }, [cart])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Shopping Cart</h1>
      
      {cart.length >= 1 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h2 className="font-medium text-gray-700">Cart Items ({cart.length})</h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center p-6 hover:bg-gray-50 transition-colors">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0 mr-6">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-grow">
                    <h3 className="text-sm md:text-base font-medium text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-purple-700 font-bold text-lg mb-3">₹{item.price}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button 
                          onClick={() => handleDecrement(item.id)} 
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <img src="/minus.svg" alt="Decrease" className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-1 font-medium">{item.count}</span>
                        <button 
                          onClick={() => handleIncrement(item.id)} 
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <img src="/plus.svg" alt="Increase" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4 text-gray-800">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>₹{(totalPrice * 0.18).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-purple-700">₹{(totalPrice + totalPrice * 0.18).toFixed(2)}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">Including {(totalPrice * 0.18).toFixed(2)} in taxes</p>
                </div>
              </div>
              
              <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                Proceed to Checkout
              </button>
              
              <div className="mt-4">
                <Link to="/products" className="text-purple-700 hover:text-purple-900 font-medium flex items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-10 text-center max-w-lg mx-auto">
          <img 
            className="w-64 h-64 mx-auto mb-6" 
            src='/empty-cart.png' 
            alt='empty cart'
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your shopping bag is empty!</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added anything to your bag. Let's change that.</p>
          
          <Link to="/products">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart