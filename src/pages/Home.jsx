import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="w-full h-[100vh] bg-[url('/shopping-bg.jpg')] bg-cover bg-center p-5">
      <h1 className="text-2xl font-bold">Welcome to Shopify</h1>
      <p className="mb-5">Shop the Latest Trends!</p>

      <Link to="/products" className="bg-[whitesmoke] p-2 px-4 rounded-full text-black font-medium" >View Products</Link>

      <div className="w-[1200px] mx-auto mt-10 shadow-md bg-white p-5 rounded-md">
        <h2 className="text-xl font-medium">Featured Products</h2>
        <div className="flex items-center gap-5 w-fit mx-auto overflow-x-auto scroll-smooth p-5">
          <img src="/nataliya.jpg" alt="Product 1" className="w-40 h-40 rounded-md" />
          <img src="/watch.jpg" alt="Product 2" className="w-40 h-40 rounded-md" />
          <img src="/headphone.jpg" alt="Product 3" className="w-40 h-40 rounded-md " />
          <img src="/sandles.jpg" alt="Product 4" className="w-40 h-40 rounded-md" />
          <img src="/camera.jpg" alt="Product 5" className="w-40 h-40 rounded-md" />
          <img src="/perfume.jpg" alt="Product 6" className="w-40 h-40 rounded-md " />
          <img src="/goggles.jpg" alt="Product 7" className="w-40 h-40 rounded-md" />
          <img src="/bottle.jpg" alt="Product 8" className="w-40 h-40 rounded-md" />
          <img src="/wooden-tool.jpg" alt="Product 9" className="w-40 h-40 rounded-md" />
        </div>
      </div>
    </div>
  )
}

export default Home
