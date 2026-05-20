"use client";

import React, { useState } from "react";

/* ---------------- FAQ Data ---------------- */

const faqs = [
  {
    question: "How do I get started?",
    answer: "Sign up, create your account, and start building your workflow in minutes.",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes, we offer a free plan with limited features to get you started.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. You can cancel your subscription anytime from your dashboard.",
  },
  {
    question: "Do you offer support?",
    answer: "Yes, our support team is available 24/7 via email.",
  },
];

/* ---------------- Page ---------------- */

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Help Center
        </h1>
        <p className="text-slate-600 mb-6">
          Find answers, guides, and support for using FutureApp.
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full max-w-xl mx-auto px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </section>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-xl hover:shadow transition">
          <h3 className="font-semibold mb-2">Getting Started</h3>
          <p className="text-sm text-slate-600">
            Learn how to set up and use the platform.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow transition">
          <h3 className="font-semibold mb-2">Billing</h3>
          <p className="text-sm text-slate-600">
            Manage your plans, payments, and invoices.
          </p>
        </div>

        <div className="p-6 border rounded-xl hover:shadow transition">
          <h3 className="font-semibold mb-2">Integrations</h3>
          <p className="text-sm text-slate-600">
            Connect tools and automate workflows easily.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{faq.question}</h3>
                <span>{openIndex === i ? "-" : "+"}</span>
              </div>

              {openIndex === i && (
                <p className="text-sm text-slate-600 mt-3">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="text-center pb-20">
        <h3 className="text-lg font-semibold mb-2">
          Still need help?
        </h3>
        <p className="text-slate-600 mb-4">
          Our team is here to support you.
        </p>

        <a
          href="/contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
        >
          Contact Support
        </a>
      </section>

    </div>
  );
}