'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'AI & Machine Learning',
    'Cloud Infrastructure',
    'DevOps & Automation',
    'Cybersecurity',
    'Data Engineering',
    'Digital Transformation',
  ]

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'News & Updates',
    'Case Studies',
    'Client Success Stories',
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/neuromatrix-systems', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/neuromatrixsys', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/neuromatrix-systems', label: 'GitHub' },
    { icon: Mail, href: 'mailto:info@neuromatrix-systems.com', label: 'Email' },
  ]

  const contactInfo = [
    { icon: Phone, value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: Mail, value: 'info@neuromatrix-systems.com', href: 'mailto:info@neuromatrix-systems.com' },
    { icon: MapPin, value: 'Tech Park, Whitefield, Bangalore, Karnataka 560066, India', href: 'https://maps.google.com/?q=Whitefield,Bangalore' },
  ]

  return (
    <footer className="bg-neuromatrix-darker border-t border-neuromatrix-primary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-t from-neuromatrix-primary via-transparent to-neuromatrix-secondary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-neuromatrix-primary to-neuromatrix-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-xl font-bold text-white">
                  NeuroMatrix
                  <span className="text-neuromatrix-primary"> Systems</span>
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Engineering Intelligence. Powering the Future. We are a cutting-edge IT solutions 
                company specializing in AI, Machine Learning, Cloud Infrastructure, and Digital Transformation.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-neuromatrix-gray/50 rounded-lg flex items-center justify-center text-neuromatrix-primary hover:bg-neuromatrix-primary hover:text-white transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-neuromatrix-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 text-sm cursor-pointer hover:text-neuromatrix-primary transition-colors duration-200">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3 mb-8">
                {company.map((item) => (
                  <li key={item}>
                    <span className="text-gray-300 text-sm cursor-pointer hover:text-neuromatrix-primary transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <h4 className="text-md font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? '_self' : '_blank'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-neuromatrix-primary transition-colors duration-200 text-sm"
                  >
                    <info.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="line-clamp-2">{info.value}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-8 border-t border-neuromatrix-primary/20">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stay updated with the latest technology insights, industry trends, and company updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-neuromatrix-gray/50 border border-neuromatrix-primary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neuromatrix-primary focus:ring-2 focus:ring-neuromatrix-primary/20 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-neuromatrix-primary to-neuromatrix-secondary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-neuromatrix-primary/25 transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-neuromatrix-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} NeuroMatrix Systems Pvt Ltd. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-neuromatrix-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-neuromatrix-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-neuromatrix-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neuromatrix-primary to-neuromatrix-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-neuromatrix-primary/25 transition-all duration-200 z-40"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}
