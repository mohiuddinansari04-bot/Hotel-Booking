import React from "react";
function Hero() {
  return (
    <section className="relative h-screen">
      <img  className="w-full h-screen" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMyMTEzNi1pbWFnZS1rd3Z5OWg0YS5qcGc.jpg" alt="" />
  
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">
            Find Your Perfect Stay
          </h1>

          <p className="mt-4 text-xl">
            Discover luxury hotels and amazing deals worldwide.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg">
            Explore Hotels
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;