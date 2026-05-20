"use client";

import Image from "next/image";

export default function WorkSection() {
  const useCases = [
    {
      title: "Automate Workflows",
      desc: "Save hours by automating repetitive tasks and processes.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    },
    {
      title: "Build Internal Tools",
      desc: "Create dashboards and tools without complex setup.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "Scale Your Operations",
      desc: "Handle growth with systems that scale with your business.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What you can build
          </h2>
          <p className="text-gray-600">
            Powerful tools designed to help you automate, build, and scale faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}