"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TemplatesShowcase() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/templates");
        const data = await res.json();
        if (data.status === "success") {
          setTemplates(data.data.templates);
        }
      } catch (error) {
        console.error("Failed to load templates:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  const categories = ["all", "ecommerce", "portfolio", "saas", "admin-dashboard", "landing-page", "blog"];
  
  const filteredTemplates = filter === "all" 
    ? templates 
    : templates.filter(t => t.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-indigo-300 backdrop-blur-md mb-6 inline-block">
              ✨ Premium Web Templates
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent">
              Elevate your digital presence
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover production-ready templates built with modern tech stacks. Fast, accessible, and beautifully designed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium capitalize whitespace-nowrap transition-all duration-300 ${
                filter === cat 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>
      </section>

      {/* Templates Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl h-[400px] animate-pulse" />
            ))}
          </div>
        ) : filteredTemplates.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTemplates.map((template) => (
              <motion.div 
                key={template._id}
                variants={itemVariants}
                className="group relative bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-colors duration-500 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden w-full bg-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={template.thumbnailUrl || 'https://via.placeholder.com/600x400'} 
                    alt={template.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                      ${template.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/5 text-[10px] font-medium text-gray-300 uppercase tracking-wider">
                      {template.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-6 flex-1 leading-relaxed">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <a 
                      href={template.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-medium text-white transition-all"
                    >
                      Live Preview
                    </a>
                    <button className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all">
                      Purchase
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-32 border border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 border border-white/10">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No templates found</h3>
            <p className="text-gray-400">Check back later for new {filter.replace('-', ' ')} templates.</p>
          </div>
        )}
      </section>
    </div>
  );
}
