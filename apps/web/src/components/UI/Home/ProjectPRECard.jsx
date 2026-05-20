"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import projects from "@/data/projects.json"

export default function ProjectShowcase() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
          {projects.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid mb-10 group relative overflow-hidden 
                         rounded-3xl bg-white border border-slate-200 
                         shadow-sm hover:shadow-xl 
                         transition-all duration-500"
            >
              {/* MEDIA */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  unoptimized
                  className="w-full h-auto object-cover 
                             transition-transform duration-700 
                             group-hover:scale-105"
                />

                {project.video && (
                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover 
                               opacity-0 group-hover:opacity-100 
                               transition-opacity duration-500"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t 
                                from-white/60 via-white/20 to-transparent 
                                opacity-0 group-hover:opacity-100 
                                transition duration-500" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
                  {project.category}
                </Badge>

                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full 
                                 bg-slate-100 text-slate-600 
                                 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}