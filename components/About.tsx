'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Award, Globe, Zap, TrendingUp } from 'lucide-react'

const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'NeuroMatrix Systems was established with a vision to revolutionize IT solutions through AI and innovation.',
    icon: Target,
    color: 'from-nm-primary to-nm-secondary'
  },
  {
    year: '2019',
    title: 'First AI Project',
    description: 'Successfully delivered our first AI-powered predictive analytics solution for a manufacturing client.',
    icon: Zap,
    color: 'from-nm-secondary to-nm-accent'
  },
  {
    year: '2020',
    title: 'Cloud Migration Success',
    description: 'Completed major cloud infrastructure migration projects, establishing our cloud expertise.',
    icon: Globe,
    color: 'from-nm-accent to-nm-primary'
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to 50+ experts across AI, Cloud, Security, and Data Engineering domains.',
    icon: Users,
    color: 'from-nm-primary to-nm-secondary'
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description: 'Received multiple awards for innovation in AI and digital transformation solutions.',
    icon: Award,
    color: 'from-nm-secondary to-nm-accent'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded operations to serve clients across 15+ countries with cutting-edge solutions.',
    icon: TrendingUp,
    color: 'from-nm-accent to-nm-primary'
  }
]

const stats = [
  { number: '200+', label: 'Projects Completed', icon: Target },
  { number: '50+', label: 'Expert Team Members', icon: Users },
  { number: '15+', label: 'Countries Served', icon: Globe },
  { number: '99.9%', label: 'Client Satisfaction', icon: Award },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-nm-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-nm-primary via-transparent to-nm-secondary" />
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
            About <span className="text-nm-primary">NeuroMatrix</span>
          </h2>
          <p className="text-xl text-nm-text/80 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company that believes in the power of innovation 
            to transform businesses and create lasting impact in the digital world.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-nm-text mb-4">
              Our <span className="text-nm-primary">Vision</span>
            </h3>
            <p className="text-nm-text/80 text-lg leading-relaxed">
              To be the leading force in digital transformation, empowering organizations worldwide 
              with cutting-edge AI solutions and innovative technology that drives growth, efficiency, 
              and competitive advantage.
            </p>
            <p className="text-nm-text/80 text-lg leading-relaxed">
              We envision a future where technology seamlessly integrates with human potential, 
              creating unprecedented opportunities for innovation and progress.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-nm-text mb-4">
              Our <span className="text-nm-secondary">Mission</span>
            </h3>
            <p className="text-nm-text/80 text-lg leading-relaxed">
              To deliver exceptional technology solutions that transform businesses, enhance human 
              capabilities, and create sustainable value for our clients and society.
            </p>
            <p className="text-nm-text/80 text-lg leading-relaxed">
              We achieve this through deep expertise, innovative thinking, and unwavering commitment 
              to excellence in everything we do.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-[#1C1C1C] rounded-2xl flex items-center justify-center group-hover:bg-[#2a2a2a] transition-all duration-200 border border-nm-primary/20">
                <stat.icon className="w-10 h-10 text-nm-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-nm-text mb-2">{stat.number}</div>
              <div className="text-nm-text/70 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <h3 className="text-3xl font-bold text-nm-text text-center mb-16">
            Our <span className="text-nm-primary">Journey</span>
          </h3>

          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-nm-primary to-nm-secondary opacity-30" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-nm rounded-full border-4 border-nm-bg z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-[#1C1C1C] backdrop-blur-sm rounded-2xl p-6 border border-nm-primary/20 hover:border-nm-accent/60 hover:shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-nm-primary font-bold text-lg">{milestone.year}</div>
                        <h4 className="text-xl font-bold text-nm-text">{milestone.title}</h4>
                      </div>
                    </div>
                    <p className="text-nm-text/80 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-nm-text text-center mb-16">
            Our <span className="text-nm-primary">Values</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
                color: 'from-nm-primary to-nm-secondary'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards of quality in every project and interaction.',
                color: 'from-nm-secondary to-nm-accent'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and building strong partnerships with our clients.',
                color: 'from-nm-accent to-nm-primary'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl" />
                </div>
                <h4 className="text-xl font-bold text-nm-text mb-3">{value.title}</h4>
                <p className="text-nm-text/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
