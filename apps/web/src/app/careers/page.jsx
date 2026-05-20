"use client";

import React from "react";

/* ---------------- Jobs Data ---------------- */

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Build modern UI with React, Next.js and Tailwind.",
  },
  {
    title: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Work on APIs, databases, and scalable systems.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description: "Design beautiful and intuitive user experiences.",
  },
];

/* ---------------- Page ---------------- */

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Join our team 🚀
        </h1>
        <p className="text-slate-600">
          We&apos;re building the future of automation. Come build with us.
        </p>
      </section>

      {/* Culture */}
      <section className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Remote First</h3>
          <p className="text-sm text-slate-600">
            Work from anywhere in the world.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Growth</h3>
          <p className="text-sm text-slate-600">
            Learn, build, and grow fast with us.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Impact</h3>
          <p className="text-sm text-slate-600">
            Your work directly shapes the product.
          </p>
        </div>
      </section>

      {/* Jobs */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Open Positions
        </h2>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition"
            >
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-sm text-slate-500">
                  {job.location} • {job.type}
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  {job.description}
                </p>
              </div>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition">
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
