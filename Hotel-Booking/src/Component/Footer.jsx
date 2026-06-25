import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">MyBooking</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Find the best hotels and make your next stay comfortable and memorable.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>support@mybooking.com</li>
              <li>+91 98605695</li>
              <li>123 Hotel Street, City</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="text-slate-300 hover:text-white transition">Facebook</a>
              <a href="#" className="text-slate-300 hover:text-white transition">Twitter</a>
              <a href="#" className="text-slate-300 hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-400 text-center">
          © {new Date().getFullYear()} MyBooking. All rights reserved.
        </div>
      </div>
    </footer>
    
  )
}

export default Footer