import { useForm } from '@tanstack/react-form'

import { SocialPlatformAliases, formFields, formSchema } from './form-fields'
import type { FormValues } from './form-fields'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Field,
  FieldError,
  FieldLabel,
  Input,
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
  })

  if (!data) {
    return null
  }

  return (
    <ScrollArea className="h-128">
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

              <form.Field
                name="socialLinks[0]"
                children={(field) => {
                  return (
                    <Field key={field.name}>
                      <FieldLabel htmlFor={field.name}>LinkedIn</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="Enter your LinkedIn URL"
                        onChange={(e) =>
                          field.handleChange({
                            url: e.target.value,
                            platform: SocialPlatformEnum.LINKEDIN,
                          })
                        }
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  )
                }}
              />

              <form.Field
                name="socialLinks"
                mode="array"
                children={(fieldForm) => {
                  return (
                    <>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button type="button" variant="outline">
                            + Add more social links
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {Object.values(SocialPlatformEnum)
                            .filter((p) => p !== SocialPlatformEnum.LINKEDIN)
                            .map((platform) => (
                              <DropdownMenuCheckboxItem
                                key={platform}
                                checked={fieldForm.state.value.some(
                                  (socialLink) =>
                                    socialLink.platform === platform,
                                )}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    fieldForm.pushValue({
                                      platform,
                                      url: '',
                                    })
                                  } else {
                                    fieldForm.removeValue(
                                      fieldForm.state.value.findIndex(
                                        (socialLink) =>
                                          socialLink.platform === platform,
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

                      {fieldForm.state.value
                        .slice(1)
                        .map((socialLink, index) => (
                          <Field key={socialLink.platform}>
                            <FieldLabel htmlFor={socialLink.platform}>
                              {SocialPlatformAliases[socialLink.platform]}
                            </FieldLabel>
                            <Input
                              id={socialLink.platform}
                              placeholder={`Enter your ${SocialPlatformAliases[socialLink.platform]} URL`}
                              value={socialLink.url}
                              onChange={(e) =>
                                fieldForm.handleChange((prev) => {
                                  return prev.map((sl) => {
                                    if (sl.platform === socialLink.platform) {
                                      return {
                                        ...sl,
                                        url: e.target.value,
                                      }
                                    } else {
                                      return sl
                                    }
                                  })
                                })
                              }
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => {
                                const updated = [...fieldForm.state.value]
                                updated.splice(index + 1, 1)
                                fieldForm.setValue(updated)
                              }}
                            >
                              Remove
                            </Button>
                            <FieldError errors={fieldForm.state.meta.errors} />
                          </Field>
                        ))}
                    </>
                  )
                }}
              />
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
    </ScrollArea>
  )
}
