import { Field, FieldError, FieldLabel, Input, Textarea } from '~/ui-core'

type BaseProps = {
  name: string
  label: string
  placeholder?: string
  type?: string
  fieldClassName?: string
  className?: string
  errors?: (
    | {
        message?: string | undefined
      }
    | undefined
  )[]
}

type InputProps = BaseProps & {
  variant: 'input'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: React.InputHTMLAttributes<HTMLInputElement>['type']
}

type TextareaProps = BaseProps & {
  variant: 'textarea'
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  maxLength?: number
}

type DynamicFieldProps = InputProps | TextareaProps

export const FormField = (props: DynamicFieldProps) => {
  const { name, label, placeholder, type, fieldClassName, className, errors } =
    props

  return (
    <Field className={fieldClassName}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>

      {props.variant === 'input' && (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={props.onChange}
          className={className}
        />
      )}

      {props.variant === 'textarea' && (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={props.onChange}
          className={className}
          maxLength={props.maxLength}
        />
      )}

      <FieldError errors={errors} />
    </Field>
  )
}
