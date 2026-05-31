// app/page.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Mesh Gradient */}
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[140px]" />

        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />

        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/15 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
      </div>

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20">
        {/* Badge */}
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
          <span className="text-sm text-zinc-300">
            ✨ Built for modern creators ✨
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-5xl text-center text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          Sell digital products
          <span className="mt-2 block bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            beautifully
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-center text-lg text-zinc-400 md:text-xl">
          A modern workspace for selling templates, managing orders,
          tracking revenue, and growing your digital business.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/register"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-medium text-white shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-all duration-300 hover:scale-105"
          >
            Start Selling
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/login"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
          >
            Sign In
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
          <span>10,000+ sales</span>
          <span>•</span>
          <span>2,500+ creators</span>
          <span>•</span>
          <span>$1M+ revenue generated</span>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-24 w-full max-w-6xl">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-2xl shadow-[0_0_100px_rgba(139,92,246,0.15)]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70">
              <div className="grid md:grid-cols-[240px_1fr]">
                {/* Sidebar */}
                <div className="border-r border-white/10 p-6">
                  <div className="h-8 w-32 rounded-lg bg-gradient-to-r from-violet-500/30 to-cyan-500/30" />

                  <div className="mt-10 space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className="h-10 rounded-xl bg-white/5"
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Stats */}
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      {
                        title: "Revenue",
                        value: "$12.4K",
                      },
                      {
                        title: "Orders",
                        value: "1,245",
                      },
                      {
                        title: "Templates",
                        value: "48",
                      },
                    ].map((card) => (
                      <div
                        key={card.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                      >
                        <p className="text-sm text-zinc-500">
                          {card.title}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold">
                          {card.value}
                        </h3>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <h3 className="font-medium">
                        Revenue Overview
                      </h3>

                      <span className="text-sm text-emerald-400">
                        +24%
                      </span>
                    </div>

                    <div className="flex h-64 items-end gap-3">
                      {[40, 90, 70, 120, 100, 160, 220].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-500 to-cyan-400"
                            style={{ height }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Recent Sales */}
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <h4 className="font-medium">
                        Recent Orders
                      </h4>

                      <div className="mt-4 space-y-3">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="rounded-lg bg-white/5 p-3"
                          >
                            SaaS Dashboard Template
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <h4 className="font-medium">
                        Top Products
                      </h4>

                      <div className="mt-4 space-y-3">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="rounded-lg bg-white/5 p-3"
                          >
                            Modern Landing Page Kit
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-zinc-600">
          Built for creators who value simplicity.
        </p>
      </section>
    </main>
  );
}