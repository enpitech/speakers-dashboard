import { useFormContext } from './form-context'
import { Field, FieldError, FieldLabel } from '~/ui-core'
import { Combobox } from '~/ui-core/shadcn/combobox'

interface Props {
  topics: { value: string; label: string }[]
  createTopic: (
    title: string,
  ) => Promise<{ topic: { value: string; label: string } }>
  isCreatingTopic: boolean
}

export const SelectTopics = ({
  topics,
  createTopic,
  isCreatingTopic,
}: Props) => {
  const form = useFormContext()

  return (
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
  )
}
