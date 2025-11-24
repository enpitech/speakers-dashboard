import type { Topic } from '@prisma/client'

export function mapTopicToValueLabel(
  topic: Omit<Topic, 'createdAt' | 'updatedAt'>,
) {
  return {
    value: topic.id,
    label: topic.title,
  }
}

export function mapTopicsToValueLabel(
  topics: Omit<Topic, 'createdAt' | 'updatedAt'>[],
) {
  return topics.map(mapTopicToValueLabel)
}
