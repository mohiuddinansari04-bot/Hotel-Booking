import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-slate-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            We'd Love To Hear From You
          </h1>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Have questions about booking a room or need assistance with your
            stay? Our team is available 24/7 to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-5 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-5 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-5 py-3 outline-none focus:border-blue-600"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-xl px-5 py-3 outline-none resize-none focus:border-blue-600"
              ></textarea>

              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-6 flex gap-5 items-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl">Address</h3>

                <p className="text-slate-600 mt-2">
                  LuxeNest Hotel, MG Road, Mumbai, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 flex gap-5 items-center">
              <div className="bg-green-100 p-4 rounded-full">
                <FaPhoneAlt className="text-green-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl">Phone</h3>

                <p className="text-slate-600 mt-2">+91 98765 43210</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 flex gap-5 items-center">
              <div className="bg-red-100 p-4 rounded-full">
                <FaEnvelope className="text-red-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl">Email</h3>

                <p className="text-slate-600 mt-2">support@luxenest.com</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 flex gap-5 items-center">
              <div className="bg-yellow-100 p-4 rounded-full">
                <FaClock className="text-yellow-600 text-2xl" />
              </div>

              <div>
                <h3 className="font-bold text-xl">Working Hours</h3>

                <p className="text-slate-600 mt-2">Monday - Sunday</p>

                <p className="text-slate-600">Open 24 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
