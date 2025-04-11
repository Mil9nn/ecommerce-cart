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
    <div className="flex justify-between m-10">
      {cart.length >= 1 ? (
        <>
          <div className="one w-[30vw]">
            {
              cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-5 p-5 rounded-md">
                  <div>
                    <div className="title">
                      <h1 className="text-sm w-[300px]">{item.title}</h1>
                      <div className="flex items-center justify-between">
                        <p>₹{item.price}</p>

                        <div className="flex items-center gap-2">
                          <button onClick={() => { addToCart(item) }} className="rounded-full p-2 px-4 font-semibold hover:scale-[1.1] active:scale-[0.9] transition-all ease-in-out cursor-pointer">Add To Cart</button>
                          <div className="flex items-center gap-1 shadow-lg p-1">
                            <button onClick={() => { handleDecrement(item.id) }} className="cursor-pointer"><img src="/minus.svg" /></button>
                            <p className="w-7 text-center">{item.count}</p>
                            <button onClick={() => { handleIncrement(item.id) }} className="cursor-pointer"><img src="/plus.svg" /></button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="two">
                    <img src={item.image} alt="" className="w-20 h-20" />
                  </div>
                </div>
              ))
            }
          </div>
          
          {/* Total Price */}
          <div className="three max-w-sm mx-auto shadow-lg bg-white rounded-lg overflow-hidden w-[35vw]">
            <div className="p-5 space-y-4">
              <div className="pt-2 border-t">
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700 font-medium">Subtotal</span>
                  <span className="text-gray-900 font-bold text-lg">₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Purchase button */}
              <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center gap-3 p-5 mx-auto">
          <img className="w-100" src='/empty-cart.png' alt='empty-cart-icon' />
          <p className="text-2xl font-medium text-[#343232]">Your shopping bag is empty!</p>
          <p>Looks like you haven't added anything to your bag. Let's change that.</p>

          <Link to="/products">
            <button className="bg-blue-700 p-3 font-semibold text-white cursor-pointer hover:bg-blue-900">Back to shopping</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart