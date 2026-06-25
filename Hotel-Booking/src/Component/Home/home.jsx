import React from "react";
import Hero from "../Hero/HeroSection";

function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-[0.3em] mb-2">Welcome</p>
            <h2 className="text-4xl font-bold text-slate-900">Discover Luxury Stays</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Explore handpicked hotels, exclusive offers, and premium services for your next getaway.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
