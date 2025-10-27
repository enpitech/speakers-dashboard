import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/Dialog'
import { RegisterForm } from './RegisterForm/RegisterForm'

export function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger  className="bg-primary-color hover:bg-secondary-color text-white px-6 py-2 rounded-lg h-full">
          Register as a lecturer
      </DialogTrigger>
      <DialogContent className='w-screen'>
        <DialogHeader>
          <DialogTitle>Register as a lecturer</DialogTitle>
       
        </DialogHeader>
        <DialogDescription  className='max-h-[500px] overflow-y-auto w-full'>
            <RegisterForm />
          </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
