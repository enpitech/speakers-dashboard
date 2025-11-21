import { useForm, useStore } from '@tanstack/react-form'

import { X } from 'lucide-react'
import { SocialPlatformAliases, formFields, formSchema } from './form-fields'
import type { FormValues } from './form-fields'

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
import {
  useCreateTopic,
  useTopics,
} from '~/features/speakers/dal/speakers.resource'
import { SocialPlatformEnum } from '~/lib/types'

export function RegisterForm() {
  const { data } = useTopics()
  const createTopicMutate = useCreateTopic()

  const form = useForm({
    defaultValues: {
      name: '',
      location: '',
      experience: '',
      languages: '',
      topics: [] as string[],
      socialLinks: [
        {
          platform: SocialPlatformEnum.LINKEDIN,
          url: '',
        },
      ],
    } as FormValues,
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log({ values })
    },
  })

  const socialLinks = useStore(form.store, (state) => state.values.socialLinks)

  if (!data) {
    return null
  }

  return (
    <ScrollArea className="h-100">
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
                        placeholder="Enter your LinkedIn URL"
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
                                {Object.values(SocialPlatformEnum)
                                  .filter(
                                    (p) => p !== SocialPlatformEnum.LINKEDIN,
                                  )
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
                            placeholder={`Enter your ${SocialPlatformAliases[socialLink.platform]} URL`}
                            value={socialLink.url}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />

                          <InputGroupButton
                            type="button"
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
                      <FieldError errors={field.state.meta.errors} />
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
    </ScrollArea>
  )
}
