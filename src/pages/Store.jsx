import React, { useEffect, useContext, useState } from 'react'
import { CartContext } from "../context/CartContext"
import { ToastContainer } from 'react-toastify';

const Store = () => {
    const { addToCart, products, setProducts } = useContext(CartContext);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const productData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://fakestoreapi.in/api/products');
                const data = await response.json();
                const productsWithCount = data.products.map(product => ({
                    ...product,
                    count: 1,
                }));
                setProducts(productsWithCount);
                
                // Extract unique categories
                const uniqueCategories = [...new Set(productsWithCount.map(item => item.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        };
        productData();
    }, [setProducts]);

    // Filter products based on category and search query
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover
                draggable
                theme="dark"
                toastStyle={{ marginTop: '60px' }}
            />
            
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
                <p className="text-gray-600">Discover quality products at competitive prices</p>
            </div>
            
            {/* Filters Section */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Search Bar */}
                    <div className="relative flex-grow max-w-md">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <svg 
                            className="absolute left-3 top-2.5 text-gray-400" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    
                    {/* Category Filter */}
                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 whitespace-nowrap">Category:</span>
                        <select 
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            
            {/* Products Grid */}
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-700"></div>
                </div>
            ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                                <img 
                                    className="max-h-full max-w-full object-contain" 
                                    src={product.image} 
                                    alt={product.title}
                                />
                            </div>
                            
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="font-bold text-gray-800 line-clamp-1 flex-grow">{product.title}</h2>
                                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full uppercase">
                                        {product.category}
                                    </span>
                                </div>
                                
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                                
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-xl text-purple-700">₹{product.price}</span>
                                    <button 
                                        onClick={() => { addToCart(product) }} 
                                        className="bg-purple-600 cursor-pointer hover:bg-purple-700 hover:scale-[1.1] active:scale-[0.9] transition-all text-white px-3 py-1 rounded-lg flex items-center gap-1"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                            <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
                    <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
            )}
            
            {/* Results Count */}
            {!isLoading && filteredProducts.length > 0 && (
                <div className="mt-6 text-sm text-gray-500">
                    Showing {filteredProducts.length} of {products.length} products
                </div>
            )}
        </div>
    );
};

export default Store;