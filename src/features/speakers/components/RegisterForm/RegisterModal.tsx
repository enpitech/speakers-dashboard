import { useState } from 'react'
import { useTopics } from '../../api/get-topics'
import { useCreateTopic } from '../../api/create-topic'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  RegisterForm,
} from '~/ui-core/'

export function RegisterModal() {
  const topicsQuery = useTopics()
  const createTopicMutate = useCreateTopic()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Register as a lecturer</Button>
      </DialogTrigger>
      <DialogContent className="w-screen">
        <DialogHeader>
          <DialogTitle>Register as a lecturer</DialogTitle>
          <DialogDescription>
            Fill in the following details to register as a lecturer.
          </DialogDescription>
        </DialogHeader>
        <RegisterForm
          topics={topicsQuery.data?.topics}
          createTopic={createTopicMutate.mutateAsync}
          isCreatingTopic={createTopicMutate.isPending}
          onSuccess={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
