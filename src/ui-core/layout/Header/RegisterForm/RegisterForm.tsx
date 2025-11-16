import { useForm } from '@tanstack/react-form'

import { formFields, formSchema } from './form-fields'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldError,
  FieldLabel,
  Input,
} from '~/ui-core'
import { Combobox } from '~/ui-core/shadcn/combobox'
import {
  useCreateTopic,
  useTopics,
} from '~/features/speakers/dal/speakers.resource'

export function RegisterForm() {
  const { data } = useTopics()
  const createTopicMutate = useCreateTopic()

  const form = useForm({
    defaultValues: {
      name: '',
      location: '',
      experience: '',
      languages: '',
      linkedin: '',
      topics: [] as string[],
    },
    validators: {
      onSubmit: formSchema,
    },
  })

  if (!data) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register as a lecturer</CardTitle>
        <CardDescription>
          Fill in the following details to register as a lecturer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="register-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
            alert('Form submitted')
          }}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-end">
            {formFields.map((fieldForm) => (
              <form.Field
                key={fieldForm.name}
                name={fieldForm.name}
                children={(field) => {
                  return (
                    <Field key={fieldForm.name}>
                      <FieldLabel htmlFor={fieldForm.name}>
                        {fieldForm.label}
                      </FieldLabel>
                      <Input
                        id={fieldForm.name}
                        name={fieldForm.name}
                        placeholder={fieldForm.placeholder}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  )
                }}
              />
            ))}
          </div>
          <div className="mt-4">
            <form.Field
              name="topics"
              mode="array"
              children={(field) => {
                return (
                  <Field>
                    <FieldLabel htmlFor="topics">Topics</FieldLabel>
                    <Combobox
                      multiple
                      placeholder="Select topics..."
                      selected={field.state.value}
                      options={data.topics.map((t) => ({
                        value: t.label,
                        label: t.label,
                      }))}
                      onSave={async (value) => {
                        const result =
                          await createTopicMutate.mutateAsync(value)
                        return result.topic
                      }}
                      loading={createTopicMutate.isPending}
                      onChange={field.handleChange}
                    />
                  </Field>
                )
              }}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="border-primary px-6 py-2 rounded-lg"
          >
            Reset
          </Button>
          <Button type="submit" form="register-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
