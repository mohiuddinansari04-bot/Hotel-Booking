import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (

    <section className="relative h-screen y-7xl">
      <img  className="w-full h-screen object-cover" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMyMTEzNi1pbWFnZS1rd3Z5OWg0YS5qcGc.jpg" alt="Luxury hotel stay" />
  
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">
            Find Your Perfect Stay
          </h1>

          <p className="mt-4 text-xl">
            Discover luxury hotels and amazing deals worldwide.
          </p>

          <Link
            to="/services"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700"
          >
            Explore Hotels
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;