"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const [yearly, setYearly] = useState(false)

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-slate-50 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
            Pricing
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Simple, Transparent Pricing
          </h1>

          <p className="text-slate-600 text-lg">
            Choose the plan that fits your workflow automation needs.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <span className={!yearly ? "font-semibold" : "text-slate-500"}>
              Monthly
            </span>

            <button
              onClick={() => setYearly(!yearly)}
              className="w-14 h-8 bg-slate-200 rounded-full relative"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition ${
                  yearly ? "translate-x-6" : ""
                }`}
              />
            </button>

            <span className={yearly ? "font-semibold" : "text-slate-500"}>
              Yearly
            </span>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly

            return (
              <div
                key={plan.name}
                className={`rounded-3xl border p-10 shadow-sm transition hover:shadow-xl ${
                  plan.popular
                    ? "border-slate-900"
                    : "border-slate-200"
                }`}
              >
                {plan.popular && (
                  <span className="text-xs font-medium bg-slate-900 text-white px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-semibold text-slate-900 mt-4">
                  {plan.name}
                </h3>

                <p className="text-slate-600 mt-2 mb-6">
                  {plan.description}
                </p>

                <div className="text-4xl font-bold text-slate-900 mb-6">
                  ${price}
                  <span className="text-lg font-medium text-slate-600">
                    /mo
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-slate-600 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>

                <Link href="#">
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular
                        ? "bg-slate-900 text-white hover:bg-slate-800"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )
          })}

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq) => (
            <div key={faq.question} className="space-y-2">
              <h4 className="font-semibold text-slate-900">
                {faq.question}
              </h4>
              <p className="text-slate-600 text-sm">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to Automate Smarter?
          </h2>

          <p className="text-slate-600">
            Start your free trial today and deploy intelligent workflows.
          </p>

          <Link href="#">
            <Button size="lg" className="rounded-full px-8">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

    </main>
  )
}

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with automation.",
    monthly: 19,
    yearly: 15,
    popular: false,
    features: [
      "Up to 5 workflows",
      "Basic AI integrations",
      "Email support",
      "Community access",
    ],
  },
  {
    name: "Pro",
    description: "For growing teams scaling automation.",
    monthly: 49,
    yearly: 39,
    popular: true,
    features: [
      "Unlimited workflows",
      "Advanced AI agents",
      "Priority support",
      "Real-time analytics",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations.",
    monthly: 99,
    yearly: 79,
    popular: false,
    features: [
      "Custom integrations",
      "Dedicated infrastructure",
      "SLA & premium support",
      "Advanced security controls",
    ],
  },
]

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your dashboard.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a 14-day free trial with full access to Pro features.",
  },
  {
    question: "Do you offer enterprise discounts?",
    answer:
      "Yes, contact our sales team for custom enterprise pricing.",
  },
]