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
    <section id="portfolio" className="py-20 bg-neuromatrix-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-neuromatrix-accent via-transparent to-neuromatrix-primary" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                className="bg-neuromatrix-gray/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-neuromatrix-primary/20 hover:border-neuromatrix-primary/40 transition-all duration-300 h-full relative"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-neuromatrix-primary/20 to-neuromatrix-secondary/20 flex items-center justify-center">
                    <div className="text-center text-neuromatrix-primary">
                      <div className="w-16 h-16 mx-auto mb-2 bg-neuromatrix-primary/20 rounded-xl flex items-center justify-center">
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
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-neuromatrix-darker/80 to-neuromatrix-darker flex items-end"
                  >
                    <div className="p-6 w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-neuromatrix-primary/20 text-neuromatrix-primary text-xs font-medium rounded-full">
                          {project.industry}
                        </span>
                        <span className="px-3 py-1 bg-neuromatrix-secondary/20 text-neuromatrix-secondary text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Key Results */}
                      <div className="space-y-2 mb-4">
                        {project.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2 text-sm text-neuromatrix-secondary">
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
                            className="px-2 py-1 bg-neuromatrix-gray/50 text-gray-300 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-neuromatrix-gray/50 text-neuromatrix-primary text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-neuromatrix-primary to-neuromatrix-secondary text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-neuromatrix-primary/25 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
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
                    <span className="px-3 py-1 bg-neuromatrix-primary/20 text-neuromatrix-primary text-xs font-medium rounded-full">
                      {project.industry}
                    </span>
                    <span className="px-3 py-1 bg-neuromatrix-secondary/20 text-neuromatrix-secondary text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neuromatrix-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Client */}
                  <div className="text-sm text-gray-400 mb-4">
                    <span className="font-medium">Client:</span> {project.client}
                  </div>

                  {/* Technologies Preview */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-neuromatrix-gray/50 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-neuromatrix-gray/50 text-neuromatrix-primary text-xs rounded">
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
          <div className="bg-neuromatrix-gray/30 backdrop-blur-sm rounded-2xl p-8 border border-neuromatrix-primary/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results and transform your business 
              with innovative technology solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-neuromatrix-primary to-neuromatrix-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-neuromatrix-primary/25 transition-all duration-200 flex items-center gap-2 mx-auto group"
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
