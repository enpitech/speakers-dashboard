import type { Topic } from '@prisma/client'

export function mapTopicsToValueLabel(
  topics: Omit<Topic, 'createdAt' | 'updatedAt'>[],
) {
  return topics.map((topic) => ({
    value: topic.id,
    label: topic.title,
  }))
}

export function mapTopicToValueLabel(topic: Topic) {
  return {
    value: topic.id,
    label: topic.title,
  }
}
