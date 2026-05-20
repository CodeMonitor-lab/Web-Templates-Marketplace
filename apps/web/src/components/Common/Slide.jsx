"use client"

import { motion } from "framer-motion"

export default function Slide({
  title,
  description,
  image,
  tags = [],
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group rounded-2xl border bg-background overflow-hidden 
                 hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t 
                        from-black/40 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 
                        transition duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full 
                           bg-muted text-muted-foreground 
                           group-hover:bg-primary/10 
                           transition"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}