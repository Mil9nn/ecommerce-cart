import React, { useState, useEffect } from 'react'
import { CartContext } from "./CartContext"
import { ToastContainer, toast } from 'react-toastify';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const itemsInCart = cart.length;

  const addToCart = (product) => {
    const itemExists = cart.some(item => item.id === product.id);
    if (itemExists) {
      alert("Looks like this item is already in your cart. You can update the quantity there.");
    } else {
      setCart((prevValues) => [...prevValues, product]);
      toast.success('Item successfully added to the cart!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  useEffect(() => {
    const productData = async () => {
      const response = await fetch('https://fakestoreapi.in/api/products')
      const data = await response.json();
      const productsWithCount = data.products.map(product => ({
        ...product,
        count: 1,
      }));
      setProducts(productsWithCount);
    }
    productData();
  }, [])

  const handleIncrement = (id) => {
    setCart(prevItems => prevItems.map(item => item.id === id ? { ...item, count: item.count + 1 } : item))
  }

  const handleDecrement = (id) => {
    setCart(prevItems => prevItems.map(item => item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item))
  }

  const removeFromCart = (id) => {
    setCart(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, itemsInCart, products, setProducts, handleIncrement, handleDecrement }}>
      {children}
    </CartContext.Provider>
  )
}
