import { useTopics } from '../../api/get-topics'
import { useCreateTopic } from '../../api/create-topic'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  RegisterForm,
} from '~/ui-core/'
import { Button } from '~/ui-core/shadcn/Button'

export function RegisterModal() {
  const topicsQuery = useTopics()
  const createTopicMutate = useCreateTopic()

  return (
    <Dialog>
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
        />
      </DialogContent>
    </Dialog>
  )
}
