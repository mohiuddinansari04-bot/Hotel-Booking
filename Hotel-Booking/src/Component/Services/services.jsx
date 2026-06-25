import React from "react";

function Services() {
  return (
    <section className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-[0.3em] mb-2">Our Services</p>
          <h1 className="text-4xl font-bold text-slate-900">Hotel Booking Services</h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Get personalized recommendations, flexible booking options, and round-the-clock support for every stay.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Luxury Hotels</h2>
            <p className="text-slate-600">Premium properties with exceptional amenities and service.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Exclusive Deals</h2>
            <p className="text-slate-600">Special rates and offers tailored to your travel plans.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Support</h2>
            <p className="text-slate-600">24/7 customer service to assist with booking and travel needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
