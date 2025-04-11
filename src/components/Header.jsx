import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Header = () => {
    const { itemsInCart } = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <h2 className="text-2xl font-bold">
                                <span className="text-white">Quick</span>
                                <span className="text-yellow-300">Kart</span>
                            </h2>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link 
                            className="text-white hover:text-yellow-200 px-3 py-2 text-lg font-medium transition-colors duration-200" 
                            to="/"
                        >
                            Home
                        </Link>
                        <Link 
                            className="text-white hover:text-yellow-200 px-3 py-2 text-lg font-medium transition-colors duration-200" 
                            to="/products"
                        >
                            Products
                        </Link>
                        <Link 
                            to="/cart" 
                            className="flex items-center space-x-1 bg-purple-600 hover:bg-purple-800 px-4 py-2 rounded-full transition-colors duration-200"
                        >
                            <div className="relative">
                                <img className="w-6 h-6" src="/cart.svg" alt="Cart" />
                                {itemsInCart > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-purple-900 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                                        {itemsInCart}
                                    </span>
                                )}
                            </div>
                            <span className="font-medium">Cart</span>
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-200 hover:bg-purple-800 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                /* Icon when menu is open */
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link 
                            to="/" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-800"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/products" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-800"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Products
                        </Link>
                        <Link 
                            to="/cart" 
                            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-800"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <div className="relative mr-2">
                                <img className="w-5 h-5" src="/cart.svg" alt="Cart" />
                                {itemsInCart > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-purple-900 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                                        {itemsInCart}
                                    </span>
                                )}
                            </div>
                            Cart
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header