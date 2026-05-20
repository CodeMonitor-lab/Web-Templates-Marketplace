"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
            Resources
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Insights, Guides & AI Playbooks
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore expert insights, automation strategies, and technical deep dives
            to help you build smarter systems and scale efficiently.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <span
              key={category}
              className="px-5 py-2 rounded-full bg-slate-100 text-slate-700 text-sm border border-slate-200 hover:bg-slate-200 transition cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <Badge className="bg-slate-200 text-slate-800">
              Featured Guide
            </Badge>

            <h2 className="text-3xl font-bold text-slate-900">
              Building AI Automation Systems for Modern Enterprises
            </h2>

            <p className="text-slate-600">
              A complete guide to designing scalable AI workflows, integrating APIs,
              and deploying automation systems using cloud-native architecture.
            </p>

            <Link href="#">
              <Button className="rounded-full px-8">
                Read Guide
              </Button>
            </Link>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-10 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">
              What You’ll Learn
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Designing AI-powered workflows</li>
              <li>• Scaling SaaS platforms</li>
              <li>• DevOps automation strategies</li>
              <li>• Enterprise cloud deployment best practices</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {resources.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-xl transition duration-500"
            >
              <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-4">
                {item.category}
              </Badge>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm mb-6">
                {item.description}
              </p>

              <Link
                href="#"
                className="text-sm font-medium text-slate-900 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stay Ahead in AI & Automation
          </h2>

          <p className="text-slate-300">
            Subscribe for exclusive guides, system architecture insights,
            and automation playbooks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-full text-slate-900 w-full"
            />
            <Button className="rounded-full px-6 bg-white text-slate-900 hover:bg-slate-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}

const categories = [
  "AI Automation",
  "SaaS Architecture",
  "DevOps",
  "Cloud Infrastructure",
  "Marketing Intelligence",
  "Enterprise Systems",
]

const resources = [
  {
    title: "How to Build Scalable AI SaaS Platforms",
    category: "SaaS Architecture",
    description:
      "A technical deep dive into building scalable SaaS platforms powered by AI and cloud-native systems.",
  },
  {
    title: "Automating Business Operations with AI Agents",
    category: "AI Automation",
    description:
      "Learn how AI agents and workflow orchestration tools can streamline internal business processes.",
  },
  {
    title: "CI/CD Pipelines for Modern DevOps Teams",
    category: "DevOps",
    description:
      "Best practices for designing reliable CI/CD pipelines using Docker and cloud infrastructure.",
  },
  {
    title: "Predictive Analytics for Marketing Teams",
    category: "Marketing Intelligence",
    description:
      "Using machine learning to optimize campaigns and improve lead scoring performance.",
  },
  {
    title: "Cloud Infrastructure Security Best Practices",
    category: "Cloud Infrastructure",
    description:
      "A guide to securing enterprise cloud environments and managing access control.",
  },
  {
    title: "Designing Enterprise Data Platforms",
    category: "Enterprise Systems",
    description:
      "Building scalable data pipelines and analytics systems for modern organizations.",
  },
]