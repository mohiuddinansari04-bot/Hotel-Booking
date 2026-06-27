import React from 'react'

function About() {
  return (
      // all about section
    <section className="bg-white shadow-2xl py-20 w-full h-screen  ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-[0.3em] mb-4">About Us</p>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Welcome to Your Dream Hotel Experience
            </h2>

            <p className="text-slate-700 leading-8 mb-6">
              We connect travelers with thoughtfully selected hotels that combine comfort,
              excellent service, and authentic local flavor. Our team curates properties
              based on real guest feedback, quality of amenities, and proximity to key
              attractions so you can focus on enjoying your trip.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Our Mission</h3>
                <p className="text-slate-600 leading-7">
                  To simplify travel discovery by delivering curated hotel choices and
                  transparent pricing, backed by friendly support at every step.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">What We Value</h3>
                <ul className="list-disc list-inside text-slate-600 leading-7">
                  <li>Authenticity — real stays that reflect local culture</li>
                  <li>Comfort — clean, well-appointed rooms and reliable service</li>
                  <li>Trust — honest reviews and secure booking</li>
                </ul>
              </div>
            </div>
          {/* ///btn that direct to contact  */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow">Contact Us</a>
              <a href="/services" className="px-6 py-3 border border-slate-200 rounded-lg hover:bg-green-400 hover:text-white ">Explore Offers & Services</a>
            </div>
          </div>
           {/* image dive */}
          <div>
            <div className="grid gap-4">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
                alt="Lounge"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />

              <img
                src="https://images.unsplash.com/photo-1505691723518-36a1fb5a4b0a?auto=format&fit=crop&w=1000&q=80"
                alt="Room"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />

              <div className="rounded-2xl bg-slate-50 p-6 shadow-inner">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Our Team</h4>
                <p className="text-slate-600 leading-7">
                  A small team of travel-curious experts who care about great stays and
                  clear information. We're responsive, friendly, and happy to help plan your trip.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About