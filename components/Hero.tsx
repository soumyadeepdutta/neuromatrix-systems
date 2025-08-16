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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neural-pattern pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-4 h-4 bg-nm-primary rounded-full opacity-60 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-32 w-6 h-6 bg-nm-secondary rounded-full opacity-40 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-1/4 w-3 h-3 bg-nm-accent rounded-full opacity-50 blur-sm"
        />

        {/* Neural Network Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <motion.path
              d="M100,200 Q300,100 500,200 T900,200"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M100,400 Q300,300 500,400 T900,400"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M100,600 Q300,500 500,600 T900,600"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F5FF" />
                <stop offset="100%" stopColor="#00FF9D" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FF9D" />
                <stop offset="100%" stopColor="#9D00FF" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9D00FF" />
                <stop offset="100%" stopColor="#00F5FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
            className="bg-gradient-nm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-nm-primary/25 transition-all duration-200 flex items-center gap-2 group"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#services')}
            className="border-2 border-nm-primary text-nm-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nm-primary hover:text-white transition-all duration-200 flex items-center gap-2 group"
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
              <div className="w-16 h-16 mx-auto mb-3 bg-nm-accent/20 rounded-xl flex items-center justify-center group-hover:bg-nm-accent/40 transition-all duration-200 border border-nm-accent/30 group-hover:border-nm-accent/60">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <p className="text-nm-text/70 text-sm font-medium">{feature.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-nm-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-nm-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
