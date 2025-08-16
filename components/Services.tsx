'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { services } from '@/data/services'
import { ArrowRight, Check } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 bg-nm-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tl from-nm-secondary via-transparent to-nm-primary" />
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
            Our <span className="text-nm-primary">Services</span>
          </h2>
          <p className="text-xl text-nm-text/80 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive IT solutions that drive digital transformation and business growth. 
            From AI and Machine Learning to Cloud Infrastructure and Cybersecurity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-[#1C1C1C] backdrop-blur-sm rounded-2xl p-6 border border-nm-primary/20 hover:border-nm-accent/60 hover:shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300 h-full relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-nm-text mb-3 group-hover:text-nm-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-nm-text/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        className="flex items-center gap-2 text-sm text-nm-text/70"
                      >
                        <Check className="w-4 h-4 text-nm-secondary" />
                        {feature}
                      </motion.div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-nm-primary font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-nm text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-nm-primary/25 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredService === service.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-nm-primary/10 to-nm-secondary/10 rounded-2xl"
                />
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-nm-text/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can drive your digital transformation 
              and create lasting competitive advantages.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-nm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-nm-primary/25 transition-all duration-200 flex items-center gap-2 mx-auto group"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
