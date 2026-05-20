"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SolutionsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
            Our Solutions + add image in the card
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Intelligent Systems Built for Modern Businesses
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We design and deploy AI-powered platforms, automation systems,
            and scalable cloud solutions that drive real business growth.
          </p>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {solutions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-xl transition duration-500"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 mb-6">
                {item.description}
              </p>

              <ul className="space-y-2 text-sm text-slate-500">
                {item.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Process
          </h2>
          <p className="text-slate-600 mt-4">
            From strategy to deployment, we build scalable solutions that last.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {process.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-800">
                {index + 1}
              </div>
              <h4 className="font-semibold text-slate-900">{step.title}</h4>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Ready to Build Your AI Infrastructure?
          </h2>

          <p className="text-slate-600">
            Let’s design automation systems and AI tools tailored to your business.
          </p>

          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8">
              Start a Project
            </Button>
          </Link>
        </div>
      </section>

    </main>
  )
}

const solutions = [
  {
    title: "AI Automation Systems",
    description:
      "End-to-end automation workflows powered by AI to reduce manual operations and improve efficiency.",
    features: [
      "Custom AI agents",
      "Workflow orchestration",
      "CRM & API integrations",
      "24/7 automation"
    ],
  },
  {
    title: "Enterprise SaaS Platforms",
    description:
      "Scalable SaaS architecture designed for performance, security, and multi-tenant environments.",
    features: [
      "Cloud-native architecture",
      "Multi-tenant systems",
      "Secure authentication",
      "Real-time analytics"
    ],
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description:
      "Automated infrastructure management with CI/CD pipelines and containerized deployments.",
    features: [
      "Docker & Kubernetes",
      "AWS infrastructure",
      "CI/CD pipelines",
      "Monitoring & logging"
    ],
  },
  {
    title: "AI Marketing Intelligence",
    description:
      "Predictive marketing tools and lead scoring systems powered by machine learning.",
    features: [
      "Lead scoring automation",
      "Predictive analytics",
      "Campaign optimization",
      "Data dashboards"
    ],
  },
  {
    title: "Data & Analytics Platforms",
    description:
      "Enterprise data intelligence systems with real-time insights and API integrations.",
    features: [
      "Data visualization",
      "AI-driven insights",
      "Custom dashboards",
      "API integrations"
    ],
  },
  {
    title: "AI Content & Growth Tools",
    description:
      "Automated content generation, SEO optimization, and growth-focused AI systems.",
    features: [
      "Content automation",
      "SEO AI tools",
      "Growth workflows",
      "Performance tracking"
    ],
  },
]

const process = [
  {
    title: "Discovery & Strategy",
    description: "Understanding business goals and defining system architecture.",
  },
  {
    title: "Design & Development",
    description: "Building scalable, secure, and intelligent platforms.",
  },
  {
    title: "Deployment",
    description: "Cloud deployment with monitoring and performance tuning.",
  },
  {
    title: "Optimization",
    description: "Continuous improvement with analytics and automation upgrades.",
  },
]