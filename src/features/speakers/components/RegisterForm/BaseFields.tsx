import { useFormContext } from './form-context'
import { baseFormFields } from './form-fields'
import { Field, FieldError, FieldLabel, Input } from '~/ui-core'

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
              <Field key={fieldForm.name} className="self-start">
                <FieldLabel htmlFor={fieldForm.name}>
                  {fieldForm.label}
                </FieldLabel>
                <Input
                  id={fieldForm.name}
                  type={fieldForm.type}
                  name={fieldForm.name}
                  placeholder={fieldForm.placeholder}
                  onChange={(e) =>
                    field.handleChange(
                      fieldForm.type === 'number'
                        ? +e.target.value
                        : e.target.value,
                    )
                  }
                />
                <FieldError errors={field.state.meta.errors} />
              </Field>
            )
          }}
        />
      ))}
    </>
  )
}
