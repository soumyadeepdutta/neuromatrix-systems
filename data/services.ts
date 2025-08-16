import { 
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  Database, 
  Zap,
  Globe,
  Smartphone,
  BarChart3,
  Cpu
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: any
  features: string[]
  color: string
}

export const services: Service[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Solutions',
    description: 'Cutting-edge artificial intelligence and machine learning solutions that transform your business operations and decision-making processes.',
    icon: Brain,
    features: [
      'Predictive Analytics & Forecasting',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Recommendation Systems',
      'Automated Decision Making',
      'AI-Powered Chatbots'
    ],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Scalable cloud solutions and streamlined DevOps practices to accelerate your development and deployment cycles.',
    icon: Cloud,
    features: [
      'Multi-Cloud Architecture',
      'Container Orchestration (Kubernetes)',
      'CI/CD Pipeline Automation',
      'Infrastructure as Code (IaC)',
      'Cloud Migration & Optimization',
      'Monitoring & Observability'
    ],
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software Development',
    description: 'Custom enterprise-grade software solutions designed to streamline operations and enhance productivity.',
    icon: Code,
    features: [
      'Custom Web Applications',
      'Mobile App Development',
      'API Development & Integration',
      'Legacy System Modernization',
      'Microservices Architecture',
      'Scalable Backend Systems'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    description: 'Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.',
    icon: Shield,
    features: [
      'Security Audits & Assessments',
      'Penetration Testing',
      'Compliance Management (GDPR, HIPAA)',
      'Incident Response Planning',
      'Security Training & Awareness',
      'Zero Trust Architecture'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Analytics',
    description: 'End-to-end data solutions from collection and processing to advanced analytics and visualization.',
    icon: Database,
    features: [
      'Data Pipeline Development',
      'Big Data Processing',
      'Real-time Analytics',
      'Business Intelligence Dashboards',
      'Data Warehousing',
      'ETL/ELT Processes'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Strategic digital transformation initiatives to modernize your business and stay ahead of the competition.',
    icon: Zap,
    features: [
      'Digital Strategy Consulting',
      'Process Automation',
      'Customer Experience Optimization',
      'Digital Workplace Solutions',
      'Change Management',
      'Technology Roadmapping'
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'web-development',
    title: 'Web Development & E-commerce',
    description: 'Modern, responsive web applications and e-commerce solutions that drive engagement and conversions.',
    icon: Globe,
    features: [
      'Progressive Web Apps (PWA)',
      'E-commerce Platforms',
      'Content Management Systems',
      'SEO Optimization',
      'Performance Optimization',
      'Cross-platform Compatibility'
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    icon: Smartphone,
    features: [
      'iOS & Android Development',
      'React Native & Flutter Apps',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Performance Monitoring'
    ],
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Analytics',
    description: 'Data-driven insights and analytics solutions to support strategic decision-making and business growth.',
    icon: BarChart3,
    features: [
      'Interactive Dashboards',
      'KPI Tracking & Reporting',
      'Data Visualization',
      'Predictive Modeling',
      'Performance Metrics',
      'Custom Analytics Solutions'
    ],
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 'iot-solutions',
    title: 'IoT & Edge Computing',
    description: 'Internet of Things solutions and edge computing infrastructure for connected devices and smart systems.',
    icon: Cpu,
    features: [
      'IoT Device Development',
      'Edge Computing Infrastructure',
      'Sensor Data Processing',
      'Real-time Monitoring',
      'Device Management',
      'Security & Privacy'
    ],
    color: 'from-violet-500 to-purple-500'
  }
]
