import { useForm  } from '@tanstack/react-form'
import * as z from 'zod'

import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '~/components/ui/field'
import { Input } from '~/components/ui/input'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  avatar: z.string().url('Avatar is required'),
  location: z.string().min(1, 'Location is required'),
  experience: z.string().min(1, 'Experience is required'),
  topics: z.array(z.string()).min(1, 'Topics are required'),
  languages: z.array(z.string()).min(1, 'Languages are required'),
  socialLinks: z
    .array(
      z.object({
        platform: z.string(),
        url: z.string().url(),
      }),
    )
    .min(1, 'Social links are required'),
  bio: z.string().min(1, 'Bio is required'),
})

export function RegisterForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      avatar: '',
      location: '',
      experience: '',
      topics: [],
      languages: [],
      socialLinks: [],
    },
    validators: {
      onChange: formSchema,
    },
  })

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Register as a lecturer</CardTitle>
        <CardDescription>
          Fill in the following details to register as a lecturer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="bug-report-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="John Doe"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="avatar"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Avatar</FieldLabel>
                    <FieldDescription>
                      The URL of your avatar image.
                    </FieldDescription>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="https://example.com/avatar.png"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="border-primary-color  px-6 py-2 rounded-lg"
          >
            Reset
          </Button>
          <Button
            type="submit"
            form="bug-report-form"
            className="bg-primary-color hover:bg-secondary-color text-white px-6 py-2 rounded-lg"
          >
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
