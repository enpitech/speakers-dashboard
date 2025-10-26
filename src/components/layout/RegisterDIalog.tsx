import { Button } from '../index'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/Dialog'
import { RegisterForm } from './RegisterForm'

export function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-primary-color hover:bg-secondary-color text-white px-6 py-2 rounded-lg">
          Register as a lecturer
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <RegisterForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
