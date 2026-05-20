"use client"

import { useState } from "react"
import { SlidersHorizontal, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

const categories = [
  "All",
  "Enterprise AI Platform",
  "SaaS Product",
  "DevOps Platform",
  "Automation Tool",
  "Analytics Platform",
]

const technologies = [
  "Next.js",
  "React",
  "OpenAI",
  "Docker",
  "AWS",
  "n8n",
]

export default function FilterTooltip() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeTech, setActiveTech] = useState(null)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full border-neutral-200 bg-white shadow-sm hover:bg-neutral-50"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-80 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl"
      >
        {/* CATEGORY FILTER */}

        <DropdownMenuSeparator className="my-5" />

        {/* TECH FILTER */}
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
            Technology
          </p>

          <div className="space-y-2">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() =>
                  setActiveTech(activeTech === tech ? null : tech)
                }
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition"
              >
                {tech}
                {activeTech === tech && (
                  <Check className="h-4 w-4 text-black" />
                )}
              </button>
            ))}
          </div>
        </div>

        <DropdownMenuSeparator className="my-5" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
