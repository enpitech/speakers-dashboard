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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Register as a lecturer</Button>
      </DialogTrigger>
      <DialogContent className="w-screen">
        <DialogHeader>
          <DialogTitle>Register as a lecturer</DialogTitle>
        </DialogHeader>
        <DialogDescription className="max-h-[500px] overflow-y-auto w-full">
          <RegisterForm />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
