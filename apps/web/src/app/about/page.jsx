"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white text-gray-700 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for speed. Designed for growth.
          </h2>
          <p className="text-gray-600">
            FutureAgency is a modern platform that helps teams automate workflows,
            build faster, and scale without complexity.
          </p>
        </div>

        {/* Product + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              One platform. Everything you need.
            </h3>

            <p className="mb-4 text-gray-600">
              Manage your workflows, automate repetitive tasks, and deploy
              powerful tools — all from a single platform.
            </p>

            <p className="text-gray-600">
              No complexity. No unnecessary features. Just tools that help you
              move faster.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-[320px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Dashboard preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

        </div>

        {/* Features (instead of stats) */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              ⚡ Automation
            </h4>
            <p className="text-sm text-gray-600">
              Automate repetitive workflows and save hours every week.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              🚀 Performance
            </h4>
            <p className="text-sm text-gray-600">
              Built for speed with modern infrastructure and clean architecture.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              🔗 Integration
            </h4>
            <p className="text-sm text-gray-600">
              Connect with your favorite tools and scale your workflow easily.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Start building smarter today
          </h3>
          <p className="text-gray-600 mb-6">
            Join teams already using FutureAgency to scale faster.
          </p>

          <button className="px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}