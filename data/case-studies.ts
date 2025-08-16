export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  description: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  image: string
  category: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-powered-analytics',
    title: 'AI-Powered Predictive Analytics Platform',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    description: 'Developed an advanced AI platform that predicts equipment failures and optimizes maintenance schedules, reducing downtime by 40%.',
    challenge: 'The client faced frequent equipment breakdowns causing significant production delays and high maintenance costs.',
    solution: 'Implemented a machine learning system that analyzes sensor data, historical maintenance records, and operational patterns to predict potential failures.',
    results: [
      '40% reduction in unplanned downtime',
      '25% decrease in maintenance costs',
      'Improved equipment lifespan by 30%',
      'Real-time monitoring and alerts'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'React', 'Node.js', 'MongoDB'],
    image: '/images/case-studies/ai-analytics.jpg',
    category: 'AI & Machine Learning'
  },
  {
    id: 'cloud-migration',
    title: 'Enterprise Cloud Migration & DevOps Transformation',
    client: 'Financial Services Ltd',
    industry: 'Financial Services',
    description: 'Successfully migrated legacy systems to cloud infrastructure and implemented modern DevOps practices, improving deployment speed by 300%.',
    challenge: 'Legacy on-premise systems were slow, expensive to maintain, and couldn\'t scale with business growth.',
    solution: 'Designed and executed a comprehensive cloud migration strategy with containerization, CI/CD pipelines, and infrastructure automation.',
    results: [
      '300% faster deployment cycles',
      '60% reduction in infrastructure costs',
      '99.9% uptime achieved',
      'Automated scaling and monitoring'
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'Prometheus'],
    image: '/images/case-studies/cloud-migration.jpg',
    category: 'Cloud & DevOps'
  },
  {
    id: 'cybersecurity-audit',
    title: 'Comprehensive Cybersecurity Audit & Implementation',
    client: 'Healthcare Network',
    industry: 'Healthcare',
    description: 'Conducted thorough security assessment and implemented robust cybersecurity measures to ensure HIPAA compliance and data protection.',
    challenge: 'Healthcare organization needed to strengthen security posture and achieve HIPAA compliance while protecting sensitive patient data.',
    solution: 'Performed comprehensive security audit, implemented zero-trust architecture, and established security policies and training programs.',
    results: [
      '100% HIPAA compliance achieved',
      'Zero security breaches since implementation',
      'Enhanced employee security awareness',
      'Robust incident response plan'
    ],
    technologies: ['Zero Trust Architecture', 'SIEM', 'Penetration Testing', 'Security Training', 'Compliance Management'],
    image: '/images/case-studies/cybersecurity.jpg',
    category: 'Cybersecurity'
  },
  {
    id: 'data-warehouse',
    title: 'Enterprise Data Warehouse & BI Platform',
    client: 'Retail Chain',
    industry: 'Retail',
    description: 'Built a comprehensive data warehouse and business intelligence platform that provides real-time insights across 500+ store locations.',
    challenge: 'Retail chain struggled with fragmented data across multiple systems and couldn\'t get unified insights for decision-making.',
    solution: 'Designed and implemented a centralized data warehouse with real-time ETL processes and interactive BI dashboards.',
    results: [
      'Unified view of 500+ store locations',
      'Real-time inventory and sales analytics',
      '30% improvement in decision-making speed',
      'Automated reporting and alerts'
    ],
    technologies: ['Snowflake', 'Apache Airflow', 'Tableau', 'Python', 'SQL', 'AWS S3'],
    image: '/images/case-studies/data-warehouse.jpg',
    category: 'Data Engineering'
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile Banking App',
    client: 'Digital Bank',
    industry: 'Fintech',
    description: 'Developed a feature-rich mobile banking application with advanced security features and seamless user experience.',
    challenge: 'Traditional bank needed a modern mobile app to compete with fintech startups and improve customer engagement.',
    solution: 'Built a React Native app with biometric authentication, real-time notifications, and comprehensive banking features.',
    results: [
      '4.8/5 app store rating',
      '200% increase in mobile transactions',
      'Enhanced customer satisfaction',
      'Reduced support tickets by 40%'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Biometric Auth', 'Push Notifications'],
    image: '/images/case-studies/mobile-banking.jpg',
    category: 'Mobile Development'
  },
  {
    id: 'ecommerce-platform',
    title: 'Scalable E-commerce Platform',
    client: 'Fashion Retailer',
    industry: 'E-commerce',
    description: 'Built a high-performance e-commerce platform that handles 10,000+ concurrent users and processes millions of transactions.',
    challenge: 'Fashion retailer needed a scalable platform to handle seasonal traffic spikes and provide seamless shopping experience.',
    solution: 'Developed a microservices-based architecture with CDN integration, caching strategies, and automated scaling.',
    results: [
      '99.9% uptime during peak seasons',
      '50% faster page load times',
      'Improved conversion rates by 25%',
      'Seamless handling of traffic spikes'
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'CDN'],
    image: '/images/case-studies/ecommerce.jpg',
    category: 'Web Development'
  }
]
