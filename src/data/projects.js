export const projectsData = [
  {
    id: 'satellite-tracker',
    title: 'REAL-TIME SATELLITE TRACKER',
    subtitle: 'Orbital Telemetry & Space Mission Platform',
    featured: true,
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL', 'REST API'],
    description: 'A real-time satellite tracking platform that monitors satellite locations, orbital data, missions, and space-related information through a Spring Boot backend.',
    highlights: [
      'Built REST APIs to manage satellites, orbits, missions, and tracking data',
      'Used Spring Data JPA with MySQL for scalable relational data persistence',
      'Integrated NASA APOD API using RestTemplate for daily space imagery',
      'Implemented Spring Security with BCrypt password hashing',
      'ADMIN / USER role-based access control with robust service-layer validation'
    ],
    github: 'https://github.com/khushii3319/satellitetracker',
    category: 'Backend / Systems',
    visualType: 'satellite'
  },
  {
    id: 'pixelforge',
    title: 'PIXELFORGE',
    subtitle: 'Cross-Platform Mobile Image Editor',
    featured: false,
    tech: ['Flutter', 'Dart', 'UI/UX', 'Mobile Dev'],
    description: 'A feature-rich image editing application providing essential editing tools and AI-powered retouching in a single intuitive workflow.',
    highlights: [
      'Precision Crop, Rotate, and Mirror transformations',
      'Custom aesthetic Filters & Color Adjustment Presets',
      'AI Retouch engine integration for visual enhancements',
      'Multi-state Undo / Redo stack management'
    ],
    github: 'https://github.com/khushii3319/flutter-project',
    category: 'Mobile App',
    visualType: 'pixelforge'
  },
  {
    id: 'classify',
    title: 'CLASSIFY',
    subtitle: 'Online Live Classroom Management System',
    featured: false,
    tech: ['Python', 'Django', 'HTML5', 'CSS3', 'SQLite/PostgreSQL'],
    description: 'Online Live Classroom Management System built with Python & Django. Enables course management, live class scheduling, attendance tracking, and learning material sharing with secure role-based access for students and teachers.',
    highlights: [
      'Interactive Course & Curriculum Management portal',
      'Real-time Live Class Scheduling & Attendance Tracking',
      'Centralized Learning Material & Assignment Sharing',
      'Secure Student & Instructor Role-based Access Control'
    ],
    github: 'https://github.com/pritikashah/Classify.git',
    category: 'Full-Stack Web',
    visualType: 'classify'
  },
  {
    id: 'rewear',
    title: 'REWEAR',
    subtitle: 'Sustainable Apparel Marketplace',
    featured: false,
    tech: ['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
    description: 'A full-stack peer-to-peer web application facilitating the purchase, sale, and trade of pre-owned sustainable clothing.',
    highlights: [
      'MySQL database architecture for user credentials, item inventory, and transactions',
      'Dynamic client-side JavaScript filtering by size, apparel category, and condition',
      'Secure PHP session authentication & sanitized user input',
      'Optimized multi-image upload & asset processing pipeline'
    ],
    github: 'https://github.com/yugpatel2907/Bit-benders-',
    category: 'Full-Stack Web',
    visualType: 'rewear'
  },
  {
    id: 'physiocare',
    title: 'PHYSIOCARE',
    subtitle: 'Healthcare & Rehabilitation Portal',
    featured: false,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    description: 'A personalized physiotherapy-focused web interface designed to provide users with an accessible and engaging experience for exploring physiotherapy-related information and services.',
    highlights: [
      'Clean, accessible UI designed for optimal patient navigation',
      'Structured therapy category breakdown & routine guides',
      'Interactive session planning & contact points',
      'Fully responsive mobile-first visual layout'
    ],
    github: 'https://github.com/khushii3319/physiocare',
    category: 'Frontend UI/UX',
    visualType: 'physiocare'
  }
];
