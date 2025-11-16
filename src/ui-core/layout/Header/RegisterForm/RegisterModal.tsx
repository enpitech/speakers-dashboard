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
          <DialogDescription className="hidden">
            Register as a lecturer
          </DialogDescription>
        </DialogHeader>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  )
}
