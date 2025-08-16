'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { blogPosts } from '@/data/blog'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <section id="blog" className="py-20 bg-nm-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-nm-primary via-transparent to-nm-accent" />
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
            Latest <span className="text-nm-primary">Insights</span>
          </h2>
          <p className="text-xl text-nm-text/80 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and thought leadership in technology, 
            AI, and digital transformation from our expert team.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-nm text-white shadow-lg shadow-nm-primary/25'
                  : 'bg-nm-accent/20 text-nm-text/80 hover:bg-nm-accent/40 hover:text-nm-text border border-nm-accent/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <motion.article
                whileHover={{ y: -10 }}
                className="bg-nm-accent/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-nm-accent/30 hover:border-nm-accent/60 hover:shadow-[0_0_20px_#9D00FF] transition-all duration-300 h-full"
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-nm-primary/20 to-nm-secondary/20 flex items-center justify-center">
                    <div className="text-center text-nm-primary">
                      <div className="w-16 h-16 mx-auto mb-2 bg-nm-primary/20 rounded-xl flex items-center justify-center">
                        <Tag className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-medium">Article Preview</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-nm-primary/90 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-nm-text mb-3 group-hover:text-nm-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-nm-text/80 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center gap-4 text-sm text-nm-text/70 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-nm-primary/20 text-nm-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-3 py-1 bg-nm-secondary/20 text-nm-secondary text-xs font-medium rounded-full">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-nm text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-nm-primary/25 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-nm-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-nm-accent/30 hover:border-nm-accent/60 hover:shadow-[0_0_20px_#9D00FF] transition-all duration-300">
            <h3 className="text-2xl font-bold text-nm-text mb-4">
              Stay Updated with Our Insights
            </h3>
            <p className="text-nm-text/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest technology insights, industry trends, 
              and expert perspectives delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-nm-accent/20 border border-nm-accent/30 rounded-lg text-nm-text placeholder-nm-text/50 focus:outline-none focus:border-nm-primary focus:ring-2 focus:ring-nm-primary/20 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-nm text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-nm-primary/25 transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
            
            <p className="text-xs text-nm-text/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>

        {/* View All Posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-nm-primary text-nm-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nm-primary hover:text-white transition-all duration-200 flex items-center gap-2 mx-auto group"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
