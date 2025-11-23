import { FormField } from './FormField'
import { useFormContext } from './form-context'
import { baseFormFields } from './form-fields'

export const BaseFields = () => {
  const form = useFormContext()

  return (
    <>
      {baseFormFields.map((fieldForm) => (
        <form.Field
          key={fieldForm.name}
          name={fieldForm.name}
          children={(field) => {
            return (
              <FormField
                variant="input"
                {...field}
                {...fieldForm}
                onChange={(e) =>
                  field.handleChange(
                    fieldForm.type === 'number'
                      ? +e.target.value
                      : e.target.value,
                  )
                }
                errors={field.state.meta.errors}
              />
            )
          }}
        />
      ))}
    </>
  )
}
