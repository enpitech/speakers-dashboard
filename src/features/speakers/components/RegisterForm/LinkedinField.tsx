import { useFormContext } from './form-context'
import { SocialLinksDropdown } from './SocialLinksDropdown'
import { Field, FieldError, FieldLabel, Input } from '~/ui-core'

export const LinkedinField = () => {
  const form = useFormContext()

  return (
    <form.Field name="socialLinks[0].url">
      {(field) => (
        <Field>
          <FieldLabel htmlFor="linkedin">Linkedin</FieldLabel>
          <Input
            id={field.name}
            name={field.name}
            onChange={(e) => field.handleChange(e.target.value)}
            placeholder="Enter URL"
          />
          <FieldError errors={field.state.meta.errors} />
          <SocialLinksDropdown />
        </Field>
      )}
    </form.Field>
  )
}
