import { useState } from 'react'
import {
  useCreateTopic,
  useTopics,
} from '~/features/speakers/dal/topics.resource'
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
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  return (
    <Dialog open={isRegisterModalOpen} onOpenChange={setIsRegisterModalOpen}>
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
          onSuccess={() => setIsRegisterModalOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
