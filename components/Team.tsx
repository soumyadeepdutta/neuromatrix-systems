'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { teamMembers } from '@/data/team'
import { Linkedin, Twitter, Github, Mail, ExternalLink } from 'lucide-react'

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" className="py-20 bg-neuromatrix-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-bl from-neuromatrix-secondary via-transparent to-neuromatrix-accent" />
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
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in technology, 
            innovation, and business transformation. Meet the minds behind our success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-neuromatrix-gray/30 backdrop-blur-sm rounded-2xl p-6 border border-neuromatrix-primary/20 hover:border-neuromatrix-primary/40 transition-all duration-300 h-full relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-neuromatrix-primary/5 to-neuromatrix-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Profile Image */}
                <div className="relative z-10 mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-neuromatrix-primary to-neuromatrix-secondary rounded-full p-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-neuromatrix-gray rounded-full flex items-center justify-center">
                      <div className="text-center text-neuromatrix-primary">
                        <div className="w-16 h-16 bg-neuromatrix-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <p className="text-xs font-medium">Profile Photo</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neuromatrix-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-neuromatrix-primary font-medium mb-4">
                    {member.position}
                  </p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-neuromatrix-primary/20 text-neuromatrix-primary text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 3 && (
                      <span className="px-3 py-1 bg-neuromatrix-secondary/20 text-neuromatrix-secondary text-xs font-medium rounded-full">
                        +{member.expertise.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.linkedin && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neuromatrix-gray/50 rounded-lg flex items-center justify-center text-neuromatrix-primary hover:bg-neuromatrix-primary hover:text-white transition-all duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    
                    {member.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neuromatrix-gray/50 rounded-lg flex items-center justify-center text-neuromatrix-primary hover:bg-neuromatrix-primary hover:text-white transition-all duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    
                    {member.twitter && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neuromatrix-gray/50 rounded-lg flex items-center justify-center text-neuromatrix-primary hover:bg-neuromatrix-primary hover:text-white transition-all duration-200"
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-neuromatrix-gray/50 rounded-lg flex items-center justify-center text-neuromatrix-primary hover:bg-neuromatrix-primary hover:text-white transition-all duration-200"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-neuromatrix-darker/80 via-transparent to-transparent rounded-2xl flex items-end justify-center pb-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-neuromatrix-primary to-neuromatrix-secondary text-white px-6 py-2 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-neuromatrix-primary/25 transition-all duration-200 flex items-center gap-2 group/btn"
                  >
                    View Profile
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </motion.div>
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
              Join Our Growing Team
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology 
              and innovation. Explore opportunities to be part of our mission.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-neuromatrix-primary to-neuromatrix-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-neuromatrix-primary/25 transition-all duration-200 flex items-center gap-2 mx-auto group"
            >
              View Open Positions
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
