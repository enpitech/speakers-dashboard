import { X } from 'lucide-react'
import { useFormContext } from './form-context'
import { SocialPlatformAliases } from './form-fields'
import type { SocialPlatform } from '@prisma/client'
import {
  Field,
  FieldError,
  FieldLabel,
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from '~/ui-core'

export const SocialLinkField = ({
  socialLink,
  index,
}: {
  socialLink: { platform: SocialPlatform; url: string }
  index: number
}) => {
  const form = useFormContext()

  return (
    <form.Field
      name={`socialLinks[${index + 1}].url`}
      children={(field) => {
        return (
          <Field key={socialLink.platform} className="self-start">
            <FieldLabel htmlFor={socialLink.platform}>
              {SocialPlatformAliases[socialLink.platform]}
            </FieldLabel>
            <InputGroup>
              <InputGroupInput
                id={socialLink.platform}
                placeholder="Enter URL"
                value={socialLink.url}
                onChange={(e) => field.handleChange(e.target.value)}
              />

              <InputGroupButton
                type="button"
                className="cursor-pointer hover:bg-transparent"
                onClick={() => {
                  form.removeFieldValue('socialLinks', index + 1)
                }}
              >
                <X size={16} />
              </InputGroupButton>
            </InputGroup>
            <FieldError errors={field.state.meta.errors} />
          </Field>
        )
      }}
    />
  )
}
