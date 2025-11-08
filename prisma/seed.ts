
import { SocialPlatform } from '@prisma/client';
import { prisma } from './client'
import type { SocialLink, Speaker  } from '@prisma/client';

type SpeakerSeedData = Omit<Speaker, 'id' | 'createdAt' | 'updatedAt' | 'isActive'> & {
  socialLinks: Omit<SocialLink, 'id' | 'speakerId' | 'createdAt' | 'updatedAt'>[];
}

const speakers: SpeakerSeedData[] = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    avatar: 'https://example.com/avatar.jpg',
    location: 'New York, NY',
    topics: ['React', 'Next.js', 'Tailwind CSS'],
    languages: ['English', 'Spanish'],
    experience: '10 years',
    sessionsUrl: 'https://youtube.com/john-doe',
    bio: 'I am a software engineer with a passion for building web applications.',
    socialLinks: [
      { platform: SocialPlatform.LINKEDIN, url: 'https://linkedin.com/in/john-doe' },
      { platform: SocialPlatform.TWITTER, url: 'https://twitter.com/john-doe' },
    ],
  },
  {
    name: 'Jane 2',
    email: 'jane.doe@example.com',
    phone: '0987654321',
    avatar: 'https://example.com/avatar.jpg',
    location: 'Los Angeles, CA',
    topics: ['React', 'Next.js', 'Tailwind CSS'],
    languages: ['English', 'Spanish'],
    experience: '10 years',
    sessionsUrl: 'https://youtube.com/jane-doe',
    bio: 'I am a software engineer with a passion for building web applications.',
    socialLinks: [
      { platform: SocialPlatform.LINKEDIN, url: 'https://linkedin.com/in/jane-doe' },
      { platform: SocialPlatform.TWITTER, url: 'https://twitter.com/jane-doe' },
    ],
  },
  {
    name: 'Jim 3',
    email: 'jim.doe@example.com',
    phone: '1234567890',
    avatar: 'https://example.com/avatar.jpg',
    location: 'New York, NY',
    topics: ['TypeScript', 'Node.js'],
    languages: ['English'],
    experience: '5 years',
    sessionsUrl: 'https://youtube.com/jim-doe',
    bio: 'Passionate about building scalable backend services.',
    socialLinks: [
      { platform: SocialPlatform.LINKEDIN, url: 'https://linkedin.com/in/jim-doe' },
      { platform: SocialPlatform.TWITTER, url: 'https://twitter.com/jim-doe' },
    ],
  },
]

const seed = async () => {
  // eslint-disable-next-line no-console
  console.log('Seeding speakers...')
  try {
    await prisma.socialLink.deleteMany()
    await prisma.speaker.deleteMany()
    // eslint-disable-next-line no-console
    console.log('Speakers deleted successfully')

    for (const { socialLinks, ...speakerData } of speakers) {
      await prisma.speaker.create({
        data: {
          ...speakerData,
          socialLinks: {
            create: socialLinks,
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
