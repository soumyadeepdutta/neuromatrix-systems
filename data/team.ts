export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  expertise: string[]
  image: string
  linkedin?: string
  twitter?: string
  github?: string
  email: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    position: 'Chief Executive Officer & Founder',
    bio: 'Visionary leader with 15+ years of experience in technology and business transformation. Former CTO at Fortune 500 companies, leading digital transformation initiatives.',
    expertise: ['Strategic Leadership', 'Digital Transformation', 'Technology Strategy', 'Business Development'],
    image: '/images/team/rajesh-kumar.jpg',
    linkedin: 'https://linkedin.com/in/rajesh-kumar',
    email: 'rajesh.kumar@neuromatrix-systems.com'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    position: 'Chief Technology Officer',
    bio: 'Technology expert with deep expertise in AI/ML, cloud architecture, and emerging technologies. Led development teams at Google and Microsoft.',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Cloud Architecture', 'System Design'],
    image: '/images/team/priya-sharma.jpg',
    linkedin: 'https://linkedin.com/in/priya-sharma',
    github: 'https://github.com/priyasharma',
    email: 'priya.sharma@neuromatrix-systems.com'
  },
  {
    id: 'amit-patel',
    name: 'Amit Patel',
    position: 'Head of Engineering',
    bio: 'Senior engineering leader with expertise in building scalable systems and leading high-performance development teams. Former Engineering Manager at Amazon.',
    expertise: ['Software Architecture', 'Team Leadership', 'DevOps', 'System Scalability'],
    image: '/images/team/amit-patel.jpg',
    linkedin: 'https://linkedin.com/in/amit-patel',
    github: 'https://github.com/amitpatel',
    email: 'amit.patel@neuromatrix-systems.com'
  },
  {
    id: 'neha-reddy',
    name: 'Neha Reddy',
    position: 'Head of AI & Machine Learning',
    bio: 'AI researcher and practitioner with PhD in Computer Science. Specializes in deep learning, computer vision, and natural language processing.',
    expertise: ['Deep Learning', 'Computer Vision', 'NLP', 'Research & Development'],
    image: '/images/team/neha-reddy.jpg',
    linkedin: 'https://linkedin.com/in/neha-reddy',
    github: 'https://github.com/nehareddy',
    email: 'neha.reddy@neuromatrix-systems.com'
  },
  {
    id: 'vikram-singh',
    name: 'Vikram Singh',
    position: 'Head of Cloud & DevOps',
    bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and GCP. Specializes in building resilient, scalable cloud solutions.',
    expertise: ['Cloud Architecture', 'DevOps', 'Kubernetes', 'Infrastructure as Code'],
    image: '/images/team/vikram-singh.jpg',
    linkedin: 'https://linkedin.com/in/vikram-singh',
    email: 'vikram.singh@neuromatrix-systems.com'
  },
  {
    id: 'ananya-gupta',
    name: 'Ananya Gupta',
    position: 'Head of Cybersecurity',
    bio: 'Cybersecurity specialist with extensive experience in threat intelligence, incident response, and compliance. Former security consultant at Deloitte.',
    expertise: ['Threat Intelligence', 'Incident Response', 'Compliance', 'Security Architecture'],
    image: '/images/team/ananya-gupta.jpg',
    linkedin: 'https://linkedin.com/in/ananya-gupta',
    email: 'ananya.gupta@neuromatrix-systems.com'
  },
  {
    id: 'rohit-verma',
    name: 'Rohit Verma',
    position: 'Head of Data Engineering',
    bio: 'Data engineering expert with experience in building large-scale data platforms. Specializes in real-time analytics and big data processing.',
    expertise: ['Big Data', 'Data Engineering', 'Real-time Analytics', 'Data Architecture'],
    image: '/images/team/rohit-verma.jpg',
    linkedin: 'https://linkedin.com/in/rohit-verma',
    email: 'rohit.verma@neuromatrix-systems.com'
  },
  {
    id: 'meera-krishnan',
    name: 'Meera Krishnan',
    position: 'Head of Product & Design',
    bio: 'Product strategist and UX expert with focus on creating user-centered digital experiences. Former Product Manager at Adobe.',
    expertise: ['Product Strategy', 'User Experience', 'Design Thinking', 'Product Management'],
    image: '/images/team/meera-krishnan.jpg',
    linkedin: 'https://linkedin.com/in/meera-krishnan',
    email: 'meera.krishnan@neuromatrix-systems.com'
  },
  {
    id: 'arjun-malhotra',
    name: 'Arjun Malhotra',
    position: 'Senior Software Engineer',
    bio: 'Full-stack developer with expertise in modern web technologies and mobile development. Passionate about clean code and best practices.',
    expertise: ['Full-stack Development', 'React/Next.js', 'Mobile Development', 'API Design'],
    image: '/images/team/arjun-malhotra.jpg',
    linkedin: 'https://linkedin.com/in/arjun-malhotra',
    github: 'https://github.com/arjunmalhotra',
    email: 'arjun.malhotra@neuromatrix-systems.com'
  },
  {
    id: 'kavya-iyer',
    name: 'Kavya Iyer',
    position: 'Senior Data Scientist',
    bio: 'Data scientist with expertise in statistical modeling, predictive analytics, and business intelligence. PhD in Statistics from IIT.',
    expertise: ['Statistical Modeling', 'Predictive Analytics', 'Business Intelligence', 'Data Visualization'],
    image: '/images/team/kavya-iyer.jpg',
    linkedin: 'https://linkedin.com/in/kavya-iyer',
    github: 'https://github.com/kavyaiyer',
    email: 'kavya.iyer@neuromatrix-systems.com'
  }
]
