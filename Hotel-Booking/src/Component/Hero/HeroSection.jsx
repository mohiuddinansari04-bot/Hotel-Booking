function Hero() {
  return (
    <section className="relative h-screen">
  
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