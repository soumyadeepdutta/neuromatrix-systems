'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { caseStudies } from '@/data/case-studies'
import { ExternalLink, ArrowRight, CheckCircle } from 'lucide-react'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const categories = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.category)))]

  return (
    <section id="portfolio" className="py-20 bg-nm-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-nm-accent via-transparent to-nm-primary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nm-text mb-6">
            Our <span className="text-nm-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-nm-text/80 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped organizations across industries transform their operations 
            with cutting-edge technology solutions and innovative approaches.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-[#1C1C1C] backdrop-blur-sm rounded-2xl overflow-hidden border border-nm-primary/20 hover:border-nm-accent/60 hover:shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300 h-full relative"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-nm-primary/20 to-nm-secondary/20 flex items-center justify-center">
                    <div className="text-center text-nm-primary">
                      <div className="w-16 h-16 mx-auto mb-2 bg-nm-primary/20 rounded-xl flex items-center justify-center">
                        <ExternalLink className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-medium">Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-nm-bg/80 to-nm-bg flex items-end"
                  >
                    <div className="p-6 w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-nm-primary/20 text-nm-primary text-xs font-medium rounded-full">
                          {project.industry}
                        </span>
                        <span className="px-3 py-1 bg-nm-secondary/20 text-nm-secondary text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-nm-text mb-2">{project.title}</h4>
                      <p className="text-nm-text/80 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Key Results */}
                      <div className="space-y-2 mb-4">
                        {project.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2 text-sm text-nm-secondary">
                            <CheckCircle className="w-4 h-4" />
                            {result}
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-[#2a2a2a] text-nm-text/80 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-[#2a2a2a] text-nm-primary text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-nm text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-nm-primary/25 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Project Info (Always Visible) */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-nm-primary/20 text-nm-primary text-xs font-medium rounded-full">
                      {project.industry}
                    </span>
                    <span className="px-3 py-1 bg-nm-secondary/20 text-nm-secondary text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-nm-text mb-3 group-hover:text-nm-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-nm-text/80 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Client */}
                  <div className="text-sm text-nm-text/70 mb-4">
                    <span className="font-medium">Client:</span> {project.client}
                  </div>

                  {/* Technologies Preview */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-[#2a2a2a] text-nm-text/80 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-[#2a2a2a] text-nm-primary text-xs rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-[#1C1C1C] backdrop-blur-sm rounded-2xl p-8 border border-nm-primary/20 hover:border-nm-accent/60 hover:shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300">
            <h3 className="text-2xl font-bold text-nm-text mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-nm-text/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results and transform your business 
              with innovative technology solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-nm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-nm-primary/25 transition-all duration-200 flex items-center gap-2 mx-auto group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
