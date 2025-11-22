import { useStore } from '@tanstack/react-form'
import { X } from 'lucide-react'
import { SocialPlatform } from '@prisma/client'
import { useRegisterForm } from '../../hooks/useRegisterForm'
import { SocialPlatformAliases, formFields } from './form-fields'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Field,
  FieldError,
  FieldLabel,
  Input,
  InputGroup,
  InputGroupButton,
  InputGroupInput,
  ScrollArea,
} from '~/ui-core'
import { Combobox } from '~/ui-core/shadcn/combobox'

interface Props {
  topics?: { value: string; label: string }[]
  createTopic: (
    title: string,
  ) => Promise<{ topic: { value: string; label: string } }>
  isCreatingTopic: boolean
  onSuccess: () => void
}

export function RegisterForm({
  topics,
  createTopic,
  isCreatingTopic,
  onSuccess,
}: Props) {
  const form = useRegisterForm(onSuccess)
  const socialLinks = useStore(form.store, (state) => state.values.socialLinks)

  return (
    <ScrollArea className="h-108">
      <Card>
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

              <form.Field
                name="socialLinks[0].url"
                children={(linkedinField) => {
                  return (
                    <Field key={linkedinField.name}>
                      <FieldLabel htmlFor={linkedinField.name}>
                        LinkedIn
                      </FieldLabel>
                      <Input
                        id={linkedinField.name}
                        name={linkedinField.name}
                        placeholder="Enter URL"
                        onChange={(e) =>
                          linkedinField.handleChange(e.target.value)
                        }
                      />
                      <FieldError errors={linkedinField.state.meta.errors} />

                      <form.Field
                        name="socialLinks"
                        mode="array"
                        children={(field) => {
                          return (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <span className="text-xs text-muted-foreground cursor-pointer hover:underline">
                                  + Add more social links
                                </span>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                {Object.values(SocialPlatform)
                                  .filter((p) => p !== SocialPlatform.LINKEDIN)
                                  .map((platform) => (
                                    <DropdownMenuCheckboxItem
                                      key={platform}
                                      checked={field.state.value.some(
                                        (socialLink) =>
                                          socialLink.platform === platform,
                                      )}
                                      onCheckedChange={(checked) => {
                                        if (checked) {
                                          field.pushValue({
                                            platform,
                                            url: '',
                                          })
                                        } else {
                                          field.removeValue(
                                            field.state.value.findIndex(
                                              (socialLink) =>
                                                socialLink.platform ===
                                                platform,
                                            ),
                                          )
                                        }
                                      }}
                                    >
                                      {SocialPlatformAliases[platform]}
                                    </DropdownMenuCheckboxItem>
                                  ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )
                        }}
                      />
                    </Field>
                  )
                }}
              />

              {socialLinks.slice(1).map((socialLink, index) => (
                <form.Field
                  key={socialLink.platform}
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
    </ScrollArea>
  )
}
