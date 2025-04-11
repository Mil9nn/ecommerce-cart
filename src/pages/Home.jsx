import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/shopping-bg.webp')] bg-cover bg-center p-8 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-6xl text-center p-16 bg-[#ffffff64] bg-opacity-80 rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to QuickKart</h1>
        <p className="text-xl text-gray-600 mb-8">Shop the Latest Trends at Unbeatable Prices!</p>
        <Link 
          to="/products" 
          className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-700 transition-all duration-300 hover:shadow-lg inline-block"
        >
          Explore Products
        </Link>
      </div>
      
      {/* Featured Products Section */}
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <Link 
            to="/products" 
            className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1"
          >
            View All 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
          {[
            "/nataliya.webp",
            "/watch.webp",
            "/headphone.webp",
            "/sandles.webp",
            "/camera.webp",
            "/perfume.webp",
            "/goggles.webp",
            "/bottle.webp",
            "/wooden-tool.webp"
          ].map((img, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img src={img} alt={`Product ${index + 1}`} 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="mt-2 flex justify-center">
                <span className="h-2 w-2 rounded-full bg-gray-300 mx-1 group-hover:bg-purple-600 transition-colors duration-300"></span>
                <span className="h-2 w-2 rounded-full bg-gray-300 mx-1 group-hover:bg-purple-600 transition-colors duration-300"></span>
                <span className="h-2 w-2 rounded-full bg-gray-300 mx-1 group-hover:bg-purple-600 transition-colors duration-300"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="w-full max-w-6xl bg-purple-700 text-white p-8 rounded-lg shadow-lg mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6">Get the latest updates on new products and special promotions</p>
        <div className="flex flex-col gap-2 md:flex-row max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow p-3 bg-[#ffffff64] rounded-l-lg focus:outline-none text-gray-800" 
          />
          <button className="bg-gray-800 text-white font-medium py-3 px-6 rounded-r-lg hover:bg-gray-900 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
