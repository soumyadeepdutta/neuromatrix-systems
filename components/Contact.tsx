'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', company: '', message: '' })
        }, 3000)
      } else {
        // Handle error response
        console.error('Form submission failed:', result.message)
        alert(`Submission failed: ${result.message}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@neuromatrix-systems.com',
      link: 'mailto:info@neuromatrix-systems.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Tech Park, Whitefield, Bangalore, Karnataka 560066, India',
      link: 'https://maps.google.com/?q=Whitefield,Bangalore'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
      link: null
    }
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/neuromatrix-systems', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/neuromatrixsys', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/neuromatrix-systems', label: 'GitHub' }
  ]

  return (
    <section id="contact" className="py-20 bg-nm-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-nm-primary via-transparent to-nm-secondary" />
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
            Get in <span className="text-nm-primary">Touch</span>
          </h2>
          <p className="text-xl text-nm-text/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology solutions? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-nm-text mb-6">
                Send us a Message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-nm-secondary/20 border border-nm-secondary/40 rounded-2xl p-6 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-nm-secondary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-nm-text mb-2">Message Sent Successfully!</h4>
                  <p className="text-nm-text/80">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-nm-text/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-nm-accent/20 border border-nm-accent/30 rounded-lg text-nm-text placeholder-nm-text/50 focus:outline-none focus:border-nm-primary focus:ring-2 focus:ring-nm-primary/20 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-nm-text/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-nm-accent/20 border border-nm-accent/30 rounded-lg text-nm-text placeholder-nm-text/50 focus:outline-none focus:border-nm-primary focus:ring-2 focus:ring-nm-primary/20 transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-nm-text/80 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-nm-accent/20 border border-nm-accent/30 rounded-lg text-nm-text placeholder-nm-text/50 focus:outline-none focus:border-nm-primary focus:ring-2 focus:ring-nm-primary/20 transition-all duration-200"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-nm-text/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-nm-accent/20 border border-nm-accent/30 rounded-lg text-nm-text placeholder-nm-text/50 focus:outline-none focus:border-nm-primary focus:ring-2 focus:ring-nm-primary/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-nm text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-nm-primary/25 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-nm-text mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-nm-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-nm-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-nm-text mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-nm-text/80 hover:text-nm-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-nm-text/80">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-nm-text mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-nm-accent/20 rounded-xl flex items-center justify-center text-nm-primary hover:bg-nm-secondary hover:text-white transition-all duration-200"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h4 className="text-lg font-semibold text-nm-text mb-4">Our Location</h4>
              <div className="bg-nm-accent/10 rounded-2xl p-4 border border-nm-accent/30 hover:border-nm-accent/60 hover:shadow-[0_0_20px_#9D00FF] transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-nm-primary/20 to-nm-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-nm-primary">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Google Maps Integration</p>
                    <p className="text-xs text-nm-text/70 mt-1">
                      Whitefield, Bangalore, Karnataka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-nm-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-nm-accent/30 hover:border-nm-accent/60 hover:shadow-[0_0_20px_#9D00FF] transition-all duration-300">
            <h3 className="text-2xl font-bold text-nm-text mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-nm-text/80 mb-6 max-w-2xl mx-auto">
              Let's schedule a consultation to discuss your requirements and explore how our 
              innovative solutions can drive your business transformation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-nm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-nm-primary/25 transition-all duration-200 flex items-center gap-2 mx-auto group"
            >
              Schedule a Consultation
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
