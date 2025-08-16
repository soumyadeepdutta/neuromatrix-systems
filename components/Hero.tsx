'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Brain, Cloud, Shield } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-nm-bg via-[#1a1a1a] to-nm-bg pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-nm-primary via-transparent to-nm-secondary" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-nm-text mb-6"
          >
            <span className="text-nm-primary">Engineering</span>
            <br />
            <span className="text-nm-text">Intelligence.</span>
            <br />
            <span className="text-nm-secondary">Powering the</span>
            <br />
            <span className="text-nm-text">Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-nm-text/80 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            We are a cutting-edge IT solutions company specializing in AI, Machine Learning, 
            Cloud Infrastructure, and Digital Transformation. Transforming businesses through 
            innovative technology solutions.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="bg-gradient-nm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-nm-primary/25 transition-all duration-200 flex items-center gap-2 group"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#services')}
            className="border-2 border-nm-accent text-nm-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nm-accent hover:text-white transition-all duration-200 flex items-center gap-2 group"
          >
            <Play className="w-5 h-5" />
            Explore Services
          </motion.button>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Brain, label: 'AI & ML', color: 'text-nm-primary' },
            { icon: Cloud, label: 'Cloud', color: 'text-nm-secondary' },
            { icon: Shield, label: 'Security', color: 'text-nm-accent' },
            { icon: Zap, label: 'Innovation', color: 'text-nm-primary' },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-[#1C1C1C] rounded-xl flex items-center justify-center group-hover:bg-[#2a2a2a] transition-all duration-200 border border-nm-primary/20 group-hover:border-nm-primary/40">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <p className="text-nm-text/70 text-sm font-medium">{feature.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-nm-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-nm-primary/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
