import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // eslint-disable-next-line no-console
  console.log('🚀 Starting manual topics migration...')

  const speakers = await prisma.speaker.findMany({
    select: { id: true, topics: true },
  })

  for (const speaker of speakers) {
    for (const topicTitle of speaker.topics) {
      // Find or create topic
      const topic = await prisma.topic.upsert({
        where: { title: topicTitle },
        update: {},
        create: { title: topicTitle },
      })

      // Connect this speaker to the topic
      await prisma.speaker.update({
        where: { id: speaker.id },
        data: {
          topicsField: { connect: { id: topic.id } },
        },
      })
    }
  }

  // eslint-disable-next-line no-console
  console.log('✅ Manual topics migration complete!')
}

main()
  // eslint-disable-next-line no-console
  .catch(console.error)
  .finally(() => prisma.$disconnect())
