import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Contact Us</h1>
        <p className="text-lg text-slate-600 mb-10">
          Have questions or need help booking your stay? Reach out to our team and we will assist you with the best options.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Customer Support</h2>
            <p className="text-slate-600 mb-2">Email: support@mybooking.com</p>
            <p className="text-slate-600">Phone: +91 98605695</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Visit Us</h2>
            <p className="text-slate-600 mb-2">123 Hotel Street, City</p>
            <p className="text-slate-600">Mon - Fri, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
