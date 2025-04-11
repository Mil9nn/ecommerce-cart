import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Header = () => {
    const { itemsInCart } = useContext(CartContext);

    return (
        <div className="bg-[#aecddc] p-5 flex items-center justify-between gap-5">
            <div className="flex items-center gap-5">
                <Link className="font-medium hover:text-[orangered] transition-colors text-lg" to="/" >Home</Link>
                <Link className="font-medium hover:text-[orangered] transition-colors text-lg" to="/products" >Products</Link>
            </div>
            <div>
                <Link to="/cart" >
                    <h1 className="relative">
                        <img src="/cart.svg" />
                        <p className="absolute top-[-1px] left-6 bg-[#800080] w-6 h-6 text-white p-1 rounded-full text-[12px] text-center font-semibold">
                            {itemsInCart}
                        </p>
                    </h1>
                </Link>
            </div>

        </div>
    )
}

export default Header
