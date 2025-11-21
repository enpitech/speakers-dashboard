import { useRegisterForm } from '../../hooks/useRegisterForm'
import { formFields } from './form-fields'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Field,
  FieldError,
  FieldLabel,
  Input,
} from '~/ui-core'
import { Combobox } from '~/ui-core/shadcn/combobox'

interface Props {
  topics?: { value: string; label: string }[]
  createTopic: (
    title: string,
  ) => Promise<{ topic: { value: string; label: string } }>
  isCreatingTopic: boolean
}

export function RegisterForm({ topics, createTopic, isCreatingTopic }: Props) {
  const form = useRegisterForm()

  return (
    <Card className="shadow-none">
      <CardContent>
        <form
          id="register-form"
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
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
          {topics && (
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
                        options={topics.map((t) => ({
                          value: t.label,
                          label: t.label,
                        }))}
                        onSave={async (value) => {
                          const result = await createTopic(value)
                          return result.topic
                        }}
                        loading={isCreatingTopic}
                        onChange={field.handleChange}
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  )
                }}
              />
            </div>
          )}
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
