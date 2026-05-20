"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
            Our Product
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            AI Workflow Platform for Modern Teams
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Automate operations, integrate systems, and deploy AI-powered workflows
            with a scalable cloud-native platform built for startups and enterprises.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Link href="#">
              <Button size="lg" className="rounded-full px-8">
                Start Free Trial
              </Button>
            </Link>

            <Link href="#">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <Image
              src="https://picsum.photos/seed/product-dashboard/1400/800"
              alt="Product Dashboard"
              width={1400}
              height={800}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Powerful Features Built for Scale
          </h2>
          <p className="text-slate-600 mt-4">
            Everything you need to build, automate, and optimize.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-800">
                {index + 1}
              </div>
              <h4 className="font-semibold text-slate-900">
                {step.title}
              </h4>
              <p className="text-sm text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Seamless Integrations
          </h2>
          <p className="text-slate-600">
            Connect with your existing tools and APIs effortlessly.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {integrations.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-700 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Simple & Transparent Pricing
          </h2>

          <div className="rounded-3xl border border-slate-200 p-10 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Pro Plan
            </h3>
            <p className="text-slate-600 mb-6">
              Everything you need to run intelligent workflows at scale.
            </p>
            <p className="text-4xl font-bold text-slate-900 mb-6">
              $49<span className="text-lg font-medium text-slate-600">/mo</span>
            </p>

            <Link href="#">
              <Button size="lg" className="rounded-full px-8">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Workflow?
          </h2>

          <p className="text-slate-300">
            Start automating with AI and deploy enterprise-ready systems today.
          </p>

          <Link href="#">
            <Button className="rounded-full px-8 bg-white text-slate-900 hover:bg-slate-200">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

    </main>
  )
}

const features = [
  {
    title: "AI Workflow Engine",
    description: "Design and deploy intelligent automation with drag-and-drop AI orchestration.",
  },
  {
    title: "Real-Time Analytics",
    description: "Monitor performance with enterprise-grade dashboards and insights.",
  },
  {
    title: "Cloud-Native Architecture",
    description: "Built for scale with Docker, Kubernetes, and secure cloud deployment.",
  },
  {
    title: "API & Webhook Integration",
    description: "Connect seamlessly with your CRM, SaaS tools, and internal systems.",
  },
  {
    title: "Role-Based Access Control",
    description: "Secure multi-tenant environment with granular permissions.",
  },
  {
    title: "AI Agents",
    description: "Deploy custom AI agents for support, marketing, and operations.",
  },
]

const steps = [
  {
    title: "Connect Your Tools",
    description: "Integrate your CRM, APIs, and existing SaaS platforms.",
  },
  {
    title: "Build Workflows",
    description: "Design AI-powered automation logic visually.",
  },
  {
    title: "Deploy & Scale",
    description: "Run workflows securely in the cloud with real-time monitoring.",
  },
]

const integrations = [
  "OpenAI",
  "AWS",
  "Docker",
  "Kubernetes",
  "Stripe",
  "Slack",
  "HubSpot",
  "Salesforce",
]