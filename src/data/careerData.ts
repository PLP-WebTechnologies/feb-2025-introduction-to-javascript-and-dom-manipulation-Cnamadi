export interface CareerType {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  responsibilities: string[];
  qualifications: string[];
}

export const filterOptions = [
  { value: 'all', label: 'All Opportunities' },
  { value: 'academic', label: 'Academic' },
  { value: 'administrative', label: 'Administrative' },
  { value: 'research', label: 'Research' }
];

export const careers: CareerType[] = [
  {
    id: 1,
    title: 'Professor of International Relations',
    category: 'academic',
    shortDescription: 'Lead courses and research in international relations and global politics at our prestigious faculty.',
    responsibilities: [
      'Teach undergraduate and graduate courses in international relations',
      'Conduct and publish original research in peer-reviewed journals',
      'Supervise graduate students and their research',
      'Participate in faculty governance and committees',
      'Develop and update curriculum'
    ],
    qualifications: [
      'PhD in International Relations or related field',
      'Minimum 5 years teaching experience at university level',
      'Strong publication record in high-impact journals',
      'Experience supervising graduate students',
      'Excellence in teaching and curriculum development'
    ]
  },
  {
    id: 2,
    title: 'Dean of Business School',
    category: 'administrative',
    shortDescription: 'Provide strategic leadership and oversee operations for our internationally recognized business school.',
    responsibilities: [
      'Develop and implement strategic vision for the business school',
      'Oversee faculty recruitment, development, and evaluation',
      'Manage school budget and resources',
      'Build relationships with business community and alumni',
      'Ensure accreditation standards are maintained'
    ],
    qualifications: [
      'PhD in Business or related field',
      'Minimum 10 years of academic leadership experience',
      'Proven track record in fundraising and resource development',
      'Experience with AACSB or similar accreditation processes',
      'Strong network in international business education'
    ]
  },
  {
    id: 3,
    title: 'Research Scientist - AI Ethics',
    category: 'research',
    shortDescription: 'Lead cutting-edge research on ethical implications of artificial intelligence in a global context.',
    responsibilities: [
      'Conduct original research on AI ethics and policy',
      'Lead a team of junior researchers and graduate students',
      'Secure external funding through grants and partnerships',
      'Publish findings in high-impact journals and conferences',
      'Collaborate with international partners on multi-site projects'
    ],
    qualifications: [
      'PhD in Computer Science, Philosophy, or related field',
      'Strong publication record in AI ethics',
      'Proven success in grant acquisition',
      'Experience leading interdisciplinary research teams',
      'Familiarity with international AI policy frameworks'
    ]
  },
  {
    id: 4,
    title: 'Director of International Student Affairs',
    category: 'administrative',
    shortDescription: 'Oversee programs and services that support international students and promote global engagement.',
    responsibilities: [
      'Develop and implement programs for international student success',
      'Ensure compliance with visa regulations and reporting requirements',
      'Manage a team of advisors and program coordinators',
      'Collaborate with campus partners on international initiatives',
      'Advocate for international student needs across the university'
    ],
    qualifications: [
      'Master\'s degree in International Education, Higher Education Administration, or related field',
      'Minimum 7 years experience in international education',
      'Knowledge of immigration regulations and compliance requirements',
      'Experience managing budgets and staff',
      'Cultural competency and experience living/working abroad'
    ]
  },
  {
    id: 5,
    title: 'Associate Professor of Sustainable Development',
    category: 'academic',
    shortDescription: 'Teach and research in the field of sustainable development with a focus on global environmental challenges.',
    responsibilities: [
      'Teach courses on sustainable development at undergraduate and graduate levels',
      'Conduct research on climate change mitigation and adaptation strategies',
      'Mentor students on research projects and theses',
      'Participate in departmental and university committees',
      'Collaborate with international partners on sustainability initiatives'
    ],
    qualifications: [
      'PhD in Environmental Science, Sustainability, or related field',
      'Minimum 3 years teaching experience at university level',
      'Strong publication record in sustainability research',
      'Experience with interdisciplinary research and teaching',
      'Track record of securing research funding'
    ]
  },
  {
    id: 6,
    title: 'Postdoctoral Researcher - Quantum Computing',
    category: 'research',
    shortDescription: 'Join our international team developing next-generation quantum computing technologies and applications.',
    responsibilities: [
      'Conduct advanced research in quantum computing algorithms',
      'Collaborate with senior faculty on funded research projects',
      'Publish findings in top-tier journals and conferences',
      'Assist with grant writing and research proposals',
      'Mentor graduate and undergraduate students'
    ],
    qualifications: [
      'PhD in Physics, Computer Science, or related field',
      'Strong background in quantum mechanics and computer science',
      'Programming experience in quantum computing frameworks',
      'Excellent publication record for career stage',
      'Ability to work in a collaborative, international environment'
    ]
  },
  {
    id: 7,
    title: 'Chief Diversity Officer',
    category: 'administrative',
    shortDescription: 'Lead university-wide efforts to promote diversity, equity, and inclusion in an international context.',
    responsibilities: [
      'Develop and implement strategic diversity and inclusion plans',
      'Advise university leadership on DEI best practices',
      'Design and deliver training programs for faculty and staff',
      'Monitor and report on diversity metrics and progress',
      'Build partnerships with diverse communities globally'
    ],
    qualifications: [
      'Master\'s or Doctoral degree in relevant field',
      'Minimum 8 years experience in diversity leadership roles',
      'Knowledge of international perspectives on DEI',
      'Experience developing and implementing DEI initiatives',
      'Strong facilitation and conflict resolution skills'
    ]
  },
  {
    id: 8,
    title: 'Assistant Professor of Digital Media Studies',
    category: 'academic',
    shortDescription: 'Join our innovative faculty teaching and researching the global impact of digital media technologies.',
    responsibilities: [
      'Teach undergraduate and graduate courses in digital media studies',
      'Conduct research on emerging digital technologies and their social impact',
      'Develop new courses that reflect current digital trends',
      'Advise student projects and theses',
      'Participate in department governance and university service'
    ],
    qualifications: [
      'PhD in Media Studies, Communication, or related field',
      'Teaching experience at university level',
      'Research focus on digital media in global context',
      'Demonstrated potential for scholarly achievement',
      'Practical experience with digital media production a plus'
    ]
  },
  {
    id: 9,
    title: 'Principal Investigator - Global Health',
    category: 'research',
    shortDescription: 'Lead impactful research addressing critical global health challenges across different populations and regions.',
    responsibilities: [
      'Design and lead major research initiatives in global health',
      'Secure substantial external funding from international sources',
      'Manage large, multi-site research teams',
      'Publish findings in high-impact medical and public health journals',
      'Translate research into policy recommendations and interventions'
    ],
    qualifications: [
      'MD/PhD or PhD in Public Health, Epidemiology, or related field',
      'Minimum 10 years research experience with increasing responsibility',
      'Strong track record of external funding acquisition',
      'Extensive publication history in leading journals',
      'Experience conducting research in multiple international settings'
    ]
  }
];