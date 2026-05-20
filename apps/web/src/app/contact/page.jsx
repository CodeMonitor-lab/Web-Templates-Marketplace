"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent 🚀");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Get in touch
        </h1>
        <p className="text-slate-600">
          Have a question or want to work together? We’d love to hear from you.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">

        {/* Form */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">
            Contact Information
          </h2>

          <p className="text-slate-600 mb-6">
            Reach out to us for support, partnerships, or just to say hello 👋
          </p>

          <div className="space-y-4 text-sm text-slate-700">
            <p><strong>Email:</strong> hello@futureapp.com</p>
            <p><strong>Location:</strong> India</p>
            <p><strong>Response time:</strong> Within 24 hours</p>
          </div>
        </div>

      </section>
    </div>
  );
}