import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from "../context/CartContext"

const Cart = () => {

  const { cart, addToCart, products, setProducts, handleIncrement, handleDecrement } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const handlePrice = () => {
      const total = cart.reduce((sum, items) => sum + items.price, 0);
      console.log(total);
      setTotalPrice(total);
    }
    handlePrice();
  }, [])


  return (
    <div className="flex justify-between">
      <div className="one w-[30vw]">
        {
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-5 p-5 rounded-md" >
              <div>
                <div className="title">
                  <h1 className="text-sm w-[300px] ">{item.title}</h1>
                  <div className="flex items-center justify-between">
                    <p>₹{item.price}</p>



                    <div className="flex items-center gap-2">
                      <button onClick={() => { addToCart(item) }} className="rounded-full p-2 px-4 font-semibold hover:scale-[1.1] active:scale-[0.9] transition-all ease-in-out cursor-pointer">Add To Cart</button>
                      <div className="flex items-center gap-1 shadow-lg p-1">
                        <button onClick={() => { handleDecrement(item.id) }} className="cursor-pointer"><img src="/minus.svg" /></button>
                        <p className="w-7 text-center">{item.count}</p>
                        <button onClick={() => { handleIncrement(item.id) }} className="cursor-pointer" ><img src="/plus.svg" /></button>
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

      {/* Order Summary Panel */}
      <div className="three max-w-sm mx-auto shadow-lg bg-white rounded-lg overflow-hidden w-[35vw]">
        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Total section */}
          <div className="pt-2 border-t">
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-700 font-medium">Subtotal</span>
              <span className="text-gray-900 font-bold text-lg">₹{totalPrice}</span>
            </div>
          </div>

          {/* Purchase button */}
          <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
