import { SocialPlatform } from '@prisma/client'
import { prisma } from './client'
import type {
  SocialLink as PrismaSocialLink,
  Speaker as PrismaSpeaker,
  Topic as PrismaTopic,
} from '@prisma/client'

type SpeakerSeedData = Omit<
  PrismaSpeaker,
  'id' | 'createdAt' | 'updatedAt' | 'isActive' | 'topics'
> & {
  socialLinks: Omit<
    PrismaSocialLink,
    'id' | 'speakerId' | 'createdAt' | 'updatedAt'
  >[]
  topics: Omit<PrismaTopic, 'id' | 'speakerId' | 'createdAt' | 'updatedAt'>[]
}

const speakers: SpeakerSeedData[] = [
  {
    name: 'Sarah Chen',
    email: 'sarah.chen@techtalks.com',
    phone: '+1-415-555-0101',
    avatar: 'https://i.pravatar.cc/300?img=1',
    location: 'San Francisco, CA',
    languages: ['English', 'Mandarin'],
    yearsOfExperience: 12,
    sessionsUrl: 'https://youtube.com/@sarahchen',
    bio: 'Tech lead and speaker specializing in modern web development and performance optimization. Conference organizer and open-source contributor.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/sarah-chen-tech',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/sarahcodes',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/sarah-chen-tech',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/sarahcodes',
      },
      { platform: SocialPlatform.GITHUB, url: 'https://github.com/sarahchen' },
    ],
    topics: [
      { title: 'React' },
      { title: 'TypeScript' },
      { title: 'Web Performance' },
      { title: 'Progressive Web Apps' },
    ],
  },
  {
    name: 'Marcus Johnson',
    email: 'marcus.j@devexpert.io',
    phone: '+1-212-555-0234',
    avatar: 'https://i.pravatar.cc/300?img=12',
    location: 'New York, NY',
    topics: [
      { title: 'Node.js' },
      { title: 'Microservices' },
      { title: 'Docker' },
      { title: 'Kubernetes' },
    ],
    languages: ['English'],
    yearsOfExperience: 15,
    sessionsUrl: 'https://youtube.com/@marcustech',
    bio: 'Senior architect with expertise in distributed systems and cloud-native applications. Author of "Scalable Node.js Architecture".',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/marcusjohnson',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/marcus_codes',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/marcusjohnson',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/marcus_codes',
      },
    ],
  },
  {
    name: 'Priya Sharma',
    email: 'priya.sharma@mlconf.org',
    phone: '+44-20-7946-0958',
    avatar: 'https://i.pravatar.cc/300?img=5',
    location: 'London, UK',
    topics: [
      { title: 'Machine Learning' },
      { title: 'Python' },
      { title: 'AI Ethics' },
      { title: 'Data Science' },
    ],
    languages: ['English', 'Hindi', 'French'],
    yearsOfExperience: 8,
    sessionsUrl: 'https://youtube.com/@priyaml',
    bio: 'AI researcher and educator passionate about making machine learning accessible and ethical. TEDx speaker.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/priyasharma',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/priyasharma',
      },
      { platform: SocialPlatform.TWITTER, url: 'https://twitter.com/priya_ml' },
      { platform: SocialPlatform.YOUTUBE, url: 'https://youtube.com/@priyaml' },
    ],
  },
  {
    name: 'Alex Rivera',
    email: 'alex.rivera@securitypro.com',
    phone: '+1-305-555-0876',
    avatar: 'https://i.pravatar.cc/300?img=15',
    location: 'Miami, FL',
    topics: [
      { title: 'Cybersecurity' },
      { title: 'Ethical Hacking' },
      { title: 'DevSecOps' },
      { title: 'Cloud Security' },
    ],
    languages: ['English', 'Spanish'],
    yearsOfExperience: 10,
    sessionsUrl: 'https://youtube.com/@alexsec',
    bio: 'Security consultant and ethical hacker. Regular speaker at Black Hat and DEF CON. CISSP certified.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/alexrivera',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/alex_security',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/alexrivera',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/alex_security',
      },
      { platform: SocialPlatform.GITHUB, url: 'https://github.com/alexsec' },
    ],
  },
  {
    name: 'Emma Lindström',
    email: 'emma.l@uxdesignhub.se',
    phone: '+46-8-555-1234',
    avatar: 'https://i.pravatar.cc/300?img=9',
    location: 'Stockholm, Sweden',
    topics: [
      { title: 'UX Design' },
      { title: 'Design Systems' },
      { title: 'Accessibility' },
      { title: 'User Research' },
    ],
    languages: ['Swedish', 'English', 'German'],
    yearsOfExperience: 9,
    sessionsUrl: 'https://youtube.com/@emmadesigns',
    bio: 'UX designer and accessibility advocate. Lead designer at a major fintech company. Author and workshop facilitator.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/emmalindstrom',
      },
      {
        platform: SocialPlatform.INSTAGRAM,
        url: 'https://instagram.com/emma_ux',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/emma_designs',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/emmalindstrom',
      },
      {
        platform: SocialPlatform.INSTAGRAM,
        url: 'https://instagram.com/emma_ux',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/emma_designs',
      },
    ],
  },
  {
    name: 'Kenji Tanaka',
    email: 'kenji@gamedevpro.jp',
    phone: '+81-3-5555-7890',
    avatar: 'https://i.pravatar.cc/300?img=13',
    location: 'Tokyo, Japan',
    topics: [
      { title: 'Game Development' },
      { title: 'Unity' },
      { title: 'Unreal Engine' },
      { title: '3D Graphics' },
    ],
    languages: ['Japanese', 'English'],
    yearsOfExperience: 14,
    sessionsUrl: 'https://youtube.com/@kenjigamedev',
    bio: 'Veteran game developer and technical director. Worked on AAA titles and indie games. Unity certified expert.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/kenjitanaka',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/kenji_gamedev',
      },
      {
        platform: SocialPlatform.YOUTUBE,
        url: 'https://youtube.com/@kenjigamedev',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/kenjitanaka',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/kenji_gamedev',
      },
      {
        platform: SocialPlatform.YOUTUBE,
        url: 'https://youtube.com/@kenjigamedev',
      },
    ],
  },
  {
    name: 'Olivia Martinez',
    email: 'olivia.m@cloudnative.io',
    phone: '+1-512-555-0445',
    avatar: 'https://i.pravatar.cc/300?img=10',
    location: 'Austin, TX',
    topics: [
      { title: 'AWS' },
      { title: 'Serverless' },
      { title: 'Cloud Architecture' },
      { title: 'Terraform' },
    ],
    languages: ['English', 'Spanish', 'Portuguese'],
    yearsOfExperience: 11,
    sessionsUrl: 'https://youtube.com/@oliviacloud',
    bio: 'Cloud architect and AWS certified solutions architect. Speaker at re:Invent and CloudNativeCon.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/oliviamartinez',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/olivia_cloud',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/oliviamartinez',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/olivia_cloud',
      },
    ],
  },
  {
    name: 'David Kim',
    email: 'david.kim@blockchain360.com',
    phone: '+1-650-555-0923',
    avatar: 'https://i.pravatar.cc/300?img=14',
    location: 'Palo Alto, CA',
    topics: [
      { title: 'Blockchain' },
      { title: 'Web3' },
      { title: 'Smart Contracts' },
      { title: 'Cryptocurrency' },
    ],
    languages: ['English', 'Korean'],
    yearsOfExperience: 7,
    sessionsUrl: 'https://youtube.com/@davidblockchain',
    bio: 'Blockchain engineer and Web3 pioneer. Core contributor to several DeFi protocols. Conference speaker worldwide.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/davidkim',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/david_web3',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/davidkim',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/david_web3',
      },
      { platform: SocialPlatform.GITHUB, url: 'https://github.com/davidkim' },
      { platform: SocialPlatform.DISCORD, url: 'https://discord.com/davidkim' },
    ],
  },
  {
    name: 'Sophie Dubois',
    email: 'sophie@devops-expert.fr',
    phone: '+33-1-4555-6789',
    avatar: 'https://i.pravatar.cc/300?img=16',
    location: 'Paris, France',
    topics: [
      { title: 'DevOps' },
      { title: 'CI/CD' },
      { title: 'Automation' },
      { title: 'Infrastructure as Code' },
    ],
    languages: ['French', 'English'],
    yearsOfExperience: 10,
    sessionsUrl: 'https://youtube.com/@sophiedevops',
    bio: 'DevOps engineer and automation enthusiast. Speaker at DevOps Days and KubeCon. Terraform certified.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/sophiedubois',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/sophie_devops',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/sophiedubois',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/sophiedubois',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/sophie_devops',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/sophiedubois',
      },
    ],
  },
  {
    name: 'Ahmed Hassan',
    email: 'ahmed@mobiledevpro.ae',
    phone: '+971-4-555-3210',
    avatar: 'https://i.pravatar.cc/300?img=11',
    location: 'Dubai, UAE',
    topics: [
      { title: 'iOS Development' },
      { title: 'Swift' },
      { title: 'SwiftUI' },
      { title: 'Mobile Architecture' },
    ],
    languages: ['Arabic', 'English'],
    yearsOfExperience: 9,
    sessionsUrl: 'https://youtube.com/@ahmedios',
    bio: 'iOS developer and mobile architect. Published multiple apps with millions of downloads. Apple WWDC scholar.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/ahmedhassan',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/ahmed_ios',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/ahmedhassan',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/ahmedhassan',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/ahmed_ios',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/ahmedhassan',
      },
    ],
  },
  {
    name: 'Isabella Costa',
    email: 'bella@frontend.masters',
    phone: '+55-11-9555-4321',
    avatar: 'https://i.pravatar.cc/300?img=20',
    location: 'São Paulo, Brazil',
    topics: [
      { title: 'Vue.js' },
      { title: 'Frontend Architecture' },
      { title: 'CSS' },
      { title: 'Animation' },
    ],
    languages: ['Portuguese', 'English', 'Spanish'],
    yearsOfExperience: 8,
    sessionsUrl: 'https://youtube.com/@bellafrontend',
    bio: 'Frontend developer and CSS wizard. Core team member of Vue.js. International conference speaker.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/isabellacosta',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/bella_codes',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/isabellacosta',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/bella_codes',
      },
      { platform: SocialPlatform.GITHUB, url: 'https://github.com/bellacosta' },
    ],
  },
  {
    name: 'Thomas Mueller',
    email: 'thomas@database-expert.de',
    phone: '+49-30-5555-8901',
    avatar: 'https://i.pravatar.cc/300?img=17',
    location: 'Berlin, Germany',
    topics: [
      { title: 'PostgreSQL' },
      { title: 'Database Design' },
      { title: 'Performance Tuning' },
      { title: 'SQL' },
    ],
    languages: ['German', 'English'],
    yearsOfExperience: 16,
    sessionsUrl: 'https://youtube.com/@thomasdb',
    bio: 'Database architect and performance expert. PostgreSQL contributor. Author of database optimization guides.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/thomasmueller',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/thomas_db',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/thomasmueller',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/thomas_db',
      },
    ],
  },
  {
    name: 'Yuki Nakamura',
    email: 'yuki@uxresearch.jp',
    phone: '+81-6-5555-2468',
    avatar: 'https://i.pravatar.cc/300?img=21',
    location: 'Osaka, Japan',
    topics: [
      { title: 'User Research' },
      { title: 'Product Design' },
      { title: 'UX Strategy' },
      { title: 'Design Thinking' },
    ],
    languages: ['Japanese', 'English'],
    yearsOfExperience: 7,
    sessionsUrl: 'https://youtube.com/@yukiux',
    bio: 'Product designer and UX researcher. Specializes in user-centered design methodologies. Workshop facilitator.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/yukinakamura',
      },
      {
        platform: SocialPlatform.INSTAGRAM,
        url: 'https://instagram.com/yuki_ux',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/yuki_design',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/yukinakamura',
      },
      {
        platform: SocialPlatform.INSTAGRAM,
        url: 'https://instagram.com/yuki_ux',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/yuki_design',
      },
    ],
  },
  {
    name: 'Carlos Rodriguez',
    email: 'carlos@flutter.dev',
    phone: '+34-91-555-7531',
    avatar: 'https://i.pravatar.cc/300?img=18',
    location: 'Madrid, Spain',
    topics: [
      { title: 'Flutter' },
      { title: 'Dart' },
      { title: 'Cross-platform Development' },
      { title: 'Mobile UI' },
    ],
    languages: ['Spanish', 'English', 'Catalan'],
    yearsOfExperience: 6,
    sessionsUrl: 'https://youtube.com/@carlosflutter',
    bio: 'Flutter enthusiast and mobile developer. Google Developer Expert for Flutter. Creator of popular Flutter packages.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/carlosrodriguez',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/carlos_flutter',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/carlosrodriguez',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/carlosrodriguez',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/carlos_flutter',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/carlosrodriguez',
      },
    ],
  },
  {
    name: 'Rachel Green',
    email: 'rachel@dataengineering.com',
    phone: '+1-617-555-3698',
    avatar: 'https://i.pravatar.cc/300?img=22',
    location: 'Boston, MA',
    topics: [
      { title: 'Data Engineering' },
      { title: 'Apache Spark' },
      { title: 'Big Data' },
      { title: 'ETL' },
    ],
    languages: ['English'],
    yearsOfExperience: 11,
    sessionsUrl: 'https://youtube.com/@racheldata',
    bio: 'Data engineer specializing in large-scale data pipelines. Speaker at Strata Data Conference. AWS Big Data certified.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/rachelgreen',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/rachel_data',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/rachelgreen',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/rachelgreen',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/rachel_data',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/rachelgreen',
      },
    ],
  },
  {
    name: 'Lars Andersen',
    email: 'lars@agilemaster.no',
    phone: '+47-22-555-8765',
    avatar: 'https://i.pravatar.cc/300?img=19',
    location: 'Oslo, Norway',
    topics: [
      { title: 'Agile Methodologies' },
      { title: 'Scrum' },
      { title: 'Team Leadership' },
      { title: 'Product Management' },
    ],
    languages: ['Norwegian', 'English', 'Danish'],
    yearsOfExperience: 13,
    sessionsUrl: 'https://youtube.com/@larsagile',
    bio: 'Certified Scrum Master and agile coach. Helps organizations transform their development processes. International speaker.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/larsandersen',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/lars_agile',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/larsandersen',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/lars_agile',
      },
    ],
  },
  {
    name: 'Aisha Osman',
    email: 'aisha@cybersecurity.eg',
    phone: '+20-2-555-4567',
    avatar: 'https://i.pravatar.cc/300?img=23',
    location: 'Cairo, Egypt',
    topics: [
      { title: 'Information Security' },
      { title: 'Penetration Testing' },
      { title: 'Security Audits' },
      { title: 'OWASP' },
    ],
    languages: ['Arabic', 'English', 'French'],
    yearsOfExperience: 9,
    sessionsUrl: 'https://youtube.com/@aishaseec',
    bio: 'Security researcher and penetration tester. OSCP certified. Advocates for cybersecurity education in Africa.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/aishaosman',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/aisha_sec',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/aishaosman',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/aisha_sec',
      },
      { platform: SocialPlatform.GITHUB, url: 'https://github.com/aishaosman' },
    ],
  },
  {
    name: 'Nathan Brooks',
    email: 'nathan@rustlang.dev',
    phone: '+1-503-555-7890',
    avatar: 'https://i.pravatar.cc/300?img=24',
    location: 'Portland, OR',
    topics: [
      { title: 'Rust' },
      { title: 'Systems Programming' },
      { title: 'WebAssembly' },
      { title: 'Performance' },
    ],
    languages: ['English'],
    yearsOfExperience: 10,
    sessionsUrl: 'https://youtube.com/@nathanrust',
    bio: 'Systems programmer and Rust evangelist. Core contributor to Rust projects. Speaker at RustConf and FOSDEM.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/nathanbrooks',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/nathan_rust',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/nathanbrooks',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/nathanbrooks',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/nathan_rust',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/nathanbrooks',
      },
    ],
  },
  {
    name: 'Mei Lin Wong',
    email: 'mei@datavisualization.sg',
    phone: '+65-6555-1234',
    avatar: 'https://i.pravatar.cc/300?img=25',
    location: 'Singapore',
    topics: [
      { title: 'Data Visualization' },
      { title: 'D3.js' },
      { title: 'Analytics' },
      { title: 'Business Intelligence' },
    ],
    languages: ['English', 'Mandarin', 'Malay'],
    yearsOfExperience: 8,
    sessionsUrl: 'https://youtube.com/@meidataviz',
    bio: 'Data visualization specialist and designer. Creates compelling visual stories from complex data. Regular keynote speaker.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/meilinwong',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/mei_dataviz',
      },
      {
        platform: SocialPlatform.INSTAGRAM,
        url: 'https://instagram.com/mei_visualizes',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/meilinwong',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/mei_dataviz',
      },
      {
        platform: SocialPlatform.INSTAGRAM,
        url: 'https://instagram.com/mei_visualizes',
      },
    ],
  },
  {
    name: 'Diego Silva',
    email: 'diego@pythonexpert.br',
    phone: '+55-21-9555-6789',
    avatar: 'https://i.pravatar.cc/300?img=26',
    location: 'Rio de Janeiro, Brazil',
    topics: [
      { title: 'Python' },
      { title: 'Django' },
      { title: 'FastAPI' },
      { title: 'Backend Development' },
    ],
    languages: ['Portuguese', 'English', 'Spanish'],
    yearsOfExperience: 12,
    sessionsUrl: 'https://youtube.com/@diegopython',
    bio: 'Python developer and backend specialist. Core contributor to Django. PyCon speaker and organizer.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/diegosilva',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/diego_python',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/diegosilva',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/diego_python',
      },
      { platform: SocialPlatform.GITHUB, url: 'https://github.com/diegosilva' },
    ],
  },
  {
    name: 'Anna Kowalski',
    email: 'anna@qaautomation.pl',
    phone: '+48-22-555-9876',
    avatar: 'https://i.pravatar.cc/300?img=27',
    location: 'Warsaw, Poland',
    topics: [
      { title: 'Test Automation' },
      { title: 'Selenium' },
      { title: 'QA Strategy' },
      { title: 'Continuous Testing' },
    ],
    languages: ['Polish', 'English', 'German'],
    yearsOfExperience: 10,
    sessionsUrl: 'https://youtube.com/@annaqa',
    bio: 'QA automation expert and testing strategist. Helps teams implement effective testing practices. Conference speaker.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/annakowalski',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/annakowalski',
      },
      { platform: SocialPlatform.TWITTER, url: 'https://twitter.com/anna_qa' },
    ],
  },
  {
    name: "Ryan O'Connor",
    email: 'ryan@graphql.expert',
    phone: '+353-1-555-4321',
    avatar: 'https://i.pravatar.cc/300?img=28',
    location: 'Dublin, Ireland',
    topics: [
      { title: 'GraphQL' },
      { title: 'API Design' },
      { title: 'Apollo' },
      { title: 'Backend Architecture' },
    ],
    languages: ['English', 'Irish'],
    yearsOfExperience: 7,
    sessionsUrl: 'https://youtube.com/@ryangraphql',
    bio: 'GraphQL specialist and API architect. Speaker at GraphQL Summit. Creator of educational content for developers.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/ryanoconnor',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/ryan_graphql',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/ryanoconnor',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/ryanoconnor',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/ryan_graphql',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/ryanoconnor',
      },
    ],
  },
  {
    name: 'Fatima Al-Rashid',
    email: 'fatima@airesearch.sa',
    phone: '+966-11-555-7890',
    avatar: 'https://i.pravatar.cc/300?img=29',
    location: 'Riyadh, Saudi Arabia',
    topics: [
      { title: 'Artificial Intelligence' },
      { title: 'Deep Learning' },
      { title: 'Neural Networks' },
      { title: 'Computer Vision' },
    ],
    languages: ['Arabic', 'English'],
    yearsOfExperience: 9,
    sessionsUrl: 'https://youtube.com/@fatimaai',
    bio: 'AI researcher with focus on computer vision and deep learning. PhD in Computer Science. Speaker at NeurIPS.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/fatimaalrashid',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/fatima_ai',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/fatimaalrashid',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/fatimaalrashid',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/fatima_ai',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/fatimaalrashid',
      },
    ],
  },
  {
    name: 'Lucas Fernandes',
    email: 'lucas@iot-solutions.pt',
    phone: '+351-21-555-2468',
    avatar: 'https://i.pravatar.cc/300?img=30',
    location: 'Lisbon, Portugal',
    topics: [
      { title: 'IoT' },
      { title: 'Embedded Systems' },
      { title: 'Arduino' },
      { title: 'Raspberry Pi' },
    ],
    languages: ['Portuguese', 'English', 'Spanish'],
    yearsOfExperience: 11,
    sessionsUrl: 'https://youtube.com/@lucasiot',
    bio: 'IoT engineer and maker. Builds innovative connected devices. Speaker at IoT conferences and Maker Faires.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/lucasfernandes',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/lucas_iot',
      },
      {
        platform: SocialPlatform.YOUTUBE,
        url: 'https://youtube.com/@lucasiot',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/lucasfernandes',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/lucas_iot',
      },
      {
        platform: SocialPlatform.YOUTUBE,
        url: 'https://youtube.com/@lucasiot',
      },
    ],
  },
  {
    name: 'Hannah Schmidt',
    email: 'hannah@frontend.at',
    phone: '+43-1-555-7531',
    avatar: 'https://i.pravatar.cc/300?img=31',
    location: 'Vienna, Austria',
    topics: [
      { title: 'Angular' },
      { title: 'RxJS' },
      { title: 'State Management' },
      { title: 'Testing' },
    ],
    languages: ['German', 'English'],
    yearsOfExperience: 8,
    sessionsUrl: 'https://youtube.com/@hannahangular',
    bio: 'Angular expert and frontend consultant. Google Developer Expert for Angular. Organizes local meetups.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/hannahschmidt',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/hannah_angular',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/hannahschmidt',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/hannahschmidt',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/hannah_angular',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/hannahschmidt',
      },
    ],
  },
  {
    name: 'James Okoye',
    email: 'james@mobileapps.ng',
    phone: '+234-1-555-3698',
    avatar: 'https://i.pravatar.cc/300?img=32',
    location: 'Lagos, Nigeria',
    topics: [
      { title: 'Android Development' },
      { title: 'Kotlin' },
      { title: 'Jetpack Compose' },
      { title: 'Mobile Testing' },
    ],
    languages: ['English', 'Yoruba', 'Igbo'],
    yearsOfExperience: 9,
    sessionsUrl: 'https://youtube.com/@jamesandroid',
    bio: 'Android developer and tech community builder. Google Developer Expert. Advocates for tech education in Africa.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/jamesokoye',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/james_android',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/jamesokoye',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/james_android',
      },
      { platform: SocialPlatform.GITHUB, url: 'https://github.com/jamesokoye' },
    ],
  },
  {
    name: 'Elena Popescu',
    email: 'elena@fullstack.ro',
    phone: '+40-21-555-8765',
    avatar: 'https://i.pravatar.cc/300?img=33',
    location: 'Bucharest, Romania',
    topics: [
      { title: 'Full-stack Development' },
      { title: 'MERN Stack' },
      { title: 'MongoDB' },
      { title: 'Express.js' },
    ],
    languages: ['Romanian', 'English', 'French'],
    yearsOfExperience: 10,
    sessionsUrl: 'https://youtube.com/@elenafullstack',
    bio: 'Full-stack developer and technical educator. Creates tutorials and courses for aspiring developers. Conference speaker.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/elenapopescu',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/elena_fullstack',
      },
      {
        platform: SocialPlatform.YOUTUBE,
        url: 'https://youtube.com/@elenafullstack',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/elenapopescu',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/elena_fullstack',
      },
      {
        platform: SocialPlatform.YOUTUBE,
        url: 'https://youtube.com/@elenafullstack',
      },
    ],
  },
  {
    name: 'Mohammad Reza',
    email: 'mohammad@backend.ir',
    phone: '+98-21-5555-4321',
    avatar: 'https://i.pravatar.cc/300?img=34',
    location: 'Tehran, Iran',
    topics: [
      { title: 'Java' },
      { title: 'Spring Boot' },
      { title: 'Microservices' },
      { title: 'Clean Architecture' },
    ],
    languages: ['Persian', 'English'],
    yearsOfExperience: 14,
    sessionsUrl: 'https://youtube.com/@mohammadjava',
    bio: 'Senior Java developer and software architect. Specializes in enterprise applications and clean code practices.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/mohammadreza',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/mohammad_java',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/mohammadreza',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/mohammadreza',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/mohammad_java',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/mohammadreza',
      },
    ],
  },
  {
    name: 'Victoria Lee',
    email: 'victoria@techleader.au',
    phone: '+61-2-5555-7890',
    avatar: 'https://i.pravatar.cc/300?img=35',
    location: 'Sydney, Australia',
    topics: [
      { title: 'Engineering Leadership' },
      { title: 'Team Building' },
      { title: 'Technical Strategy' },
      { title: 'Mentorship' },
    ],
    languages: ['English'],
    yearsOfExperience: 16,
    sessionsUrl: 'https://youtube.com/@victorialeads',
    bio: 'CTO and engineering leader. Passionate about building high-performing teams and inclusive tech culture. Keynote speaker.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/victorialee',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/victoria_leads',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/victorialee',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/victoria_leads',
      },
    ],
  },
  {
    name: 'Pablo Hernández',
    email: 'pablo@datascience.mx',
    phone: '+52-55-5555-2468',
    avatar: 'https://i.pravatar.cc/300?img=36',
    location: 'Mexico City, Mexico',
    topics: [
      { title: 'Data Science' },
      { title: 'R Programming' },
      { title: 'Statistics' },
      { title: 'Predictive Analytics' },
    ],
    languages: ['Spanish', 'English'],
    yearsOfExperience: 11,
    sessionsUrl: 'https://youtube.com/@pablodata',
    bio: 'Data scientist and statistician. Helps businesses leverage data for decision making. Speaker at data conferences.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/pablohernandez',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/pablo_data',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/pablohernandez',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/pablohernandez',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/pablo_data',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/pablohernandez',
      },
    ],
  },
  {
    name: 'Siti Nurhaliza',
    email: 'siti@cloudtech.my',
    phone: '+60-3-5555-3698',
    avatar: 'https://i.pravatar.cc/300?img=37',
    location: 'Kuala Lumpur, Malaysia',
    topics: [
      { title: 'Google Cloud' },
      { title: 'Cloud Migration' },
      { title: 'Site Reliability' },
      { title: 'Monitoring' },
    ],
    languages: ['Malay', 'English', 'Mandarin'],
    yearsOfExperience: 9,
    sessionsUrl: 'https://youtube.com/@siticloud',
    bio: 'Cloud engineer and SRE specialist. Google Cloud certified. Helps organizations migrate to cloud infrastructure.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/sitinurhaliza',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/siti_cloud',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/sitinurhaliza',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/siti_cloud',
      },
    ],
  },
  {
    name: 'Erik Johansson',
    email: 'erik@opensource.se',
    phone: '+46-31-555-8765',
    avatar: 'https://i.pravatar.cc/300?img=38',
    location: 'Gothenburg, Sweden',
    topics: [
      { title: 'Open Source' },
      { title: 'Linux' },
      { title: 'Git' },
      { title: 'Community Building' },
    ],
    languages: ['Swedish', 'English'],
    yearsOfExperience: 13,
    sessionsUrl: 'https://youtube.com/@erikoss',
    bio: 'Open source advocate and community organizer. Maintainer of several popular projects. FOSDEM and LinuxCon speaker.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/erikjohansson',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/erik_opensource',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/erikjohansson',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/erikjohansson',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/erik_opensource',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/erikjohansson',
      },
    ],
  },
  {
    name: 'Amelia Watson',
    email: 'amelia@contentops.nz',
    phone: '+64-9-555-4321',
    avatar: 'https://i.pravatar.cc/300?img=39',
    location: 'Auckland, New Zealand',
    topics: [
      { title: 'Technical Writing' },
      { title: 'Documentation' },
      { title: 'Content Strategy' },
      { title: 'Developer Experience' },
    ],
    languages: ['English'],
    yearsOfExperience: 8,
    sessionsUrl: 'https://youtube.com/@ameliadocs',
    bio: 'Technical writer and documentation specialist. Advocates for better developer documentation. Speaker at Write the Docs.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/ameliawatson',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/amelia_docs',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/ameliawatson',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/amelia_docs',
      },
    ],
  },
  {
    name: 'Hassan El-Amin',
    email: 'hassan@webdev.tn',
    phone: '+216-71-555-7890',
    avatar: 'https://i.pravatar.cc/300?img=40',
    location: 'Tunis, Tunisia',

    topics: [
      { title: 'Web Development' },
      { title: 'HTML/CSS' },
      { title: 'Responsive Design' },
      { title: 'Web Standards' },
    ],
    languages: ['Arabic', 'French', 'English'],
    yearsOfExperience: 10,
    sessionsUrl: 'https://youtube.com/@hassanweb',
    bio: 'Web developer and standards advocate. Creates accessible and performant websites. Local meetup organizer.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/hassanelamin',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/hassan_web',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/hassanelamin',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/hassanelamin',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/hassan_web',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/hassanelamin',
      },
    ],
  },
  {
    name: 'Sofia Papadopoulos',
    email: 'sofia@techstartup.gr',
    phone: '+30-21-5555-2468',
    avatar: 'https://i.pravatar.cc/300?img=41',
    location: 'Athens, Greece',
    topics: [
      { title: 'Startup Technology' },
      { title: 'Product Development' },
      { title: 'MVP Design' },
      { title: 'Tech Strategy' },
    ],
    languages: ['Greek', 'English'],
    yearsOfExperience: 12,
    sessionsUrl: 'https://youtube.com/@sofiastartup',
    bio: 'Startup CTO and product strategist. Built and scaled multiple tech products. Mentor at startup accelerators.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/sofiapapadopoulos',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/sofia_startup',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/sofiapapadopoulos',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/sofia_startup',
      },
    ],
  },
  {
    name: 'Benjamin Nyamsi',
    email: 'benjamin@mobile.cm',
    phone: '+237-6-5555-3698',
    avatar: 'https://i.pravatar.cc/300?img=42',
    location: 'Douala, Cameroon',
    topics: [
      { title: 'React Native' },
      { title: 'Mobile Development' },
      { title: 'Cross-platform Apps' },
      { title: 'Performance' },
    ],
    languages: ['French', 'English'],
    yearsOfExperience: 7,
    sessionsUrl: 'https://youtube.com/@benjaminreactnative',
    bio: 'React Native developer and mobile consultant. Builds apps that work seamlessly across platforms. Tech educator.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/benjaminnyamsi',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/benjamin_rn',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/benjaminnyamsi',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/benjaminnyamsi',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/benjamin_rn',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/benjaminnyamsi',
      },
    ],
  },
  {
    name: 'Ingrid Hansen',
    email: 'ingrid@saas.dk',
    phone: '+45-33-555-8765',
    avatar: 'https://i.pravatar.cc/300?img=43',
    location: 'Copenhagen, Denmark',
    topics: [
      { title: 'SaaS Architecture' },
      { title: 'Multi-tenancy' },
      { title: 'Subscription Systems' },
      { title: 'B2B Software' },
    ],
    languages: ['Danish', 'English', 'Norwegian'],
    yearsOfExperience: 11,
    sessionsUrl: 'https://youtube.com/@ingridsaas',
    bio: 'SaaS architect and entrepreneur. Built multiple successful subscription-based products. Speaker at SaaStr.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/ingridhansen',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/ingrid_saas',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/ingridhansen',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/ingrid_saas',
      },
    ],
  },
  {
    name: 'Raj Patel',
    email: 'raj@ml-engineering.in',
    phone: '+91-22-5555-4321',
    avatar: 'https://i.pravatar.cc/300?img=44',
    location: 'Mumbai, India',
    topics: [
      { title: 'MLOps' },
      { title: 'TensorFlow' },
      { title: 'Model Deployment' },
      { title: 'AI Infrastructure' },
    ],
    languages: ['Hindi', 'English', 'Gujarati'],
    yearsOfExperience: 9,
    sessionsUrl: 'https://youtube.com/@rajmlops',
    bio: 'ML engineer specializing in production ML systems. Helps teams deploy and scale machine learning models. Conference speaker.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/rajpatel',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/raj_mlops',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/rajpatel',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/raj_mlops',
      },
      { platform: SocialPlatform.GITHUB, url: 'https://github.com/rajpatel' },
    ],
  },
  {
    name: 'Marina Kovač',
    email: 'marina@gameengine.hr',
    phone: '+385-1-555-7890',
    avatar: 'https://i.pravatar.cc/300?img=45',
    location: 'Zagreb, Croatia',
    topics: [
      { title: 'Game Engine Development' },
      { title: 'C++' },
      { title: 'Graphics Programming' },
      { title: 'Physics Simulation' },
    ],
    languages: ['Croatian', 'English'],
    yearsOfExperience: 10,
    sessionsUrl: 'https://youtube.com/@marinagamedev',
    bio: 'Game engine developer and graphics programmer. Works on cutting-edge rendering techniques. Speaker at GDC.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/marinakovac',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/marina_gamedev',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/marinakovac',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/marinakovac',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/marina_gamedev',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/marinakovac',
      },
    ],
  },
  {
    name: 'Samuel Nguyen',
    email: 'samuel@fintech.vn',
    phone: '+84-24-5555-2468',
    avatar: 'https://i.pravatar.cc/300?img=46',
    location: 'Ho Chi Minh City, Vietnam',
    topics: [
      { title: 'Fintech' },
      { title: 'Payment Systems' },
      { title: 'Banking APIs' },
      { title: 'Financial Security' },
    ],
    languages: ['Vietnamese', 'English'],
    yearsOfExperience: 13,
    sessionsUrl: 'https://youtube.com/@samuelfintech',
    bio: 'Fintech engineer with expertise in payment processing and banking systems. Speaker at fintech conferences.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/samuelnguyen',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/samuel_fintech',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/samuelnguyen',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/samuel_fintech',
      },
    ],
  },
  {
    name: 'Leila Moradi',
    email: 'leila@uxui.ae',
    phone: '+971-2-555-3698',
    avatar: 'https://i.pravatar.cc/300?img=47',
    location: 'Abu Dhabi, UAE',
    topics: [
      { title: 'UI Design' },
      { title: 'Figma' },
      { title: 'Design Tokens' },
      { title: 'Component Libraries' },
    ],
    languages: ['Arabic', 'English', 'Persian'],
    yearsOfExperience: 8,
    sessionsUrl: 'https://youtube.com/@leiladesign',
    bio: 'UI designer and design system specialist. Creates scalable design systems for large organizations. Workshop facilitator.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/leilamoradi',
      },
      {
        platform: SocialPlatform.INSTAGRAM,
        url: 'https://instagram.com/leila_design',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/leilamoradi',
      },
      {
        platform: SocialPlatform.INSTAGRAM,
        url: 'https://instagram.com/leila_design',
      },
      { platform: SocialPlatform.TWITTER, url: 'https://twitter.com/leila_ui' },
    ],
  },
  {
    name: 'Oscar Lundgren',
    email: 'oscar@backend-systems.fi',
    phone: '+358-9-555-8765',
    avatar: 'https://i.pravatar.cc/300?img=48',
    location: 'Helsinki, Finland',
    topics: [
      { title: 'Distributed Systems' },
      { title: 'System Design' },
      { title: 'Scalability' },
      { title: 'Architecture' },
    ],
    languages: ['Finnish', 'Swedish', 'English'],
    yearsOfExperience: 15,
    sessionsUrl: 'https://youtube.com/@oscarsystems',
    bio: 'Systems architect specializing in distributed systems. Designs highly scalable architectures. Speaker at QCon and GOTO.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/oscarlundgren',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/oscar_systems',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/oscarlundgren',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/oscarlundgren',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/oscar_systems',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/oscarlundgren',
      },
    ],
  },
  {
    name: 'Zara Khan',
    email: 'zara@techwriter.pk',
    phone: '+92-21-5555-4321',
    avatar: 'https://i.pravatar.cc/300?img=49',
    location: 'Karachi, Pakistan',
    topics: [
      { title: 'API Documentation' },
      { title: 'Technical Communication' },
      { title: 'Developer Portals' },
      { title: 'Information Architecture' },
    ],
    languages: ['Urdu', 'English'],
    yearsOfExperience: 7,
    sessionsUrl: 'https://youtube.com/@zaratech',
    bio: 'Technical writer specializing in API documentation. Makes complex technical concepts accessible. Conference presenter.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/zarakhan',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/zara_techwriter',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/zarakhan',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/zara_techwriter',
      },
    ],
  },
  {
    name: 'Tomás Ibañez',
    email: 'tomas@webperf.cl',
    phone: '+56-2-5555-7890',
    avatar: 'https://i.pravatar.cc/300?img=50',
    location: 'Santiago, Chile',
    topics: [
      { title: 'Web Performance' },
      { title: 'Core Web Vitals' },
      { title: 'Optimization' },
      { title: 'Lighthouse' },
    ],
    languages: ['Spanish', 'English'],
    yearsOfExperience: 9,
    sessionsUrl: 'https://youtube.com/@tomasperf',
    bio: 'Web performance consultant obsessed with speed. Helps companies optimize their web applications. Chrome DevRel contributor.',
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/tomasibanez',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/tomas_webperf',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/tomasibanez',
      },
      {
        platform: SocialPlatform.YOUTUBE,
        url: 'https://youtube.com/@tomasperf',
      },
      {
        platform: SocialPlatform.LINKEDIN,
        url: 'https://linkedin.com/in/tomasibanez',
      },
      {
        platform: SocialPlatform.TWITTER,
        url: 'https://twitter.com/tomas_webperf',
      },
      {
        platform: SocialPlatform.GITHUB,
        url: 'https://github.com/tomasibanez',
      },
      {
        platform: SocialPlatform.YOUTUBE,
        url: 'https://youtube.com/@tomasperf',
      },
    ],
  },
]

const seed = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding speakers...')
  try {
    await prisma.topic.deleteMany()
    await prisma.socialLink.deleteMany()
    await prisma.speaker.deleteMany()

    // eslint-disable-next-line no-console
    console.log('Speakers deleted successfully')

    for (const { socialLinks, topics, ...speakerData } of speakers) {
      await prisma.speaker.create({
        data: {
          ...speakerData,
          socialLinks: {
            create: socialLinks,
          },
          topics: {
            connectOrCreate: topics.map((topic) => ({
              where: { title: topic.title },
              create: topic,
            })),
          },
        },
      })
    }

    // eslint-disable-next-line no-console
    console.log('Speakers seeded successfully')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error seeding speakers:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seed()
