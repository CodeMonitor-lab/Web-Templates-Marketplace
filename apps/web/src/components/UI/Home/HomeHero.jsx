"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white" />
      <div className="absolute top-[-120px] left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-purple-200/40 blur-3xl -z-10" />
      <div className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-200/40 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-6">
            <Badge className="bg-gray-100 text-gray-700 border px-3 py-1 text-xs">
              AI SaaS Platform
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Automate Your Business with
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Intelligent Workflows
              </span>
            </h1>

            <p className="text-gray-600 text-lg">
              Build, automate, and scale your SaaS with powerful tools designed
              for modern teams and developers.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8"
              >
                <Link href="/get-started">Get Started</Link>
              </Button>

              <Button size="lg" variant="outline" className="px-8">
                View Demo
              </Button>
            </div>

            {/* TRUST LINE */}
            <p className="text-sm text-gray-500 pt-2">
              Trusted by startups & developers worldwide
            </p>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: -20 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
            }}
            className="relative"
          >
            <Card className="rounded-3xl border shadow-xl bg-white/70 backdrop-blur-xl">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between">
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                  <div className="h-3 w-12 bg-purple-200 rounded" />
                </div>

                <div className="h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl" />

                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 bg-gray-100 rounded" />
                  <div className="h-16 bg-gray-100 rounded" />
                </div>

                <div className="h-8 bg-purple-200 rounded" />
              </CardContent>
            </Card>

            {/* Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200/50 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
