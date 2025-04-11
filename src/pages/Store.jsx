import React, { useEffect, useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { ToastContainer } from 'react-toastify';

const Store = () => {
    const { addToCart, products, setProducts, handleIncrement, handleDecrement } = useContext(CartContext);

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

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h1>Products</h1>
            <div className="flex items-center justify-center gap-5 flex-wrap">
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="flex flex-col justify-center items-start gap-3 p-3 rounded-sm">
                                <img className="w-40 h-40" src={product.image} alt="" />
                                <h1 className="font-bold max-w-sm line-clamp-1">{product.title}</h1>
                                <p className="p-2 text-sm rounded-full uppercase">{product.category}</p>
                                <p className="text-sm max-w-sm line-clamp-3">{product.description}</p>
                                <div className="flex items-center gap-5">
                                    <span className="font-bold text-2xl text-blue-700">₹{product.price}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => { addToCart(product) }} className="rounded-full p-2 px-4 font-semibold hover:scale-[1.1] active:scale-[0.9] transition-all ease-in-out cursor-pointer">Add To Cart</button>
                                    <div className="flex items-center gap-1 shadow-lg p-1">
                                        <button onClick={() => { handleDecrement(product.id) }} className="cursor-pointer"><img src="/minus.svg" /></button>
                                        <p className="w-7 text-center">{product.count}</p>
                                        <button onClick={() => { handleIncrement(product.id) }} className="cursor-pointer" ><img src="/plus.svg" /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Store
