import { useStore } from '@tanstack/react-form'
import { useRegisterForm } from '../../hooks/useRegisterForm'
import { useCreateSpeaker } from '../../api/create-speaker'
import { FormProvider } from './form-context'
import { SelectTopics } from './SelectTopics'
import { SocialLinkField } from './SocialLinkField'
import { LinkedinField } from './LinkedinField'
import { BaseFields } from './BaseFields'
import { FormField } from './FormField'
import type { FormValues } from './form-fields'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Field,
  ScrollArea,
} from '~/ui-core'

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
  const createSpeaker = useCreateSpeaker({ onSuccess })
  const form = useRegisterForm()
  const socialLinks = useStore(form.store, (state) => state.values.socialLinks)

  return (
    <ScrollArea className="h-108">
      <Card>
        <CardContent>
          <FormProvider form={form}>
            <form
              id="register-form"
              onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit({
                  submit: (value: FormValues) => {
                    const speakerData = {
                      ...value,
                      sessionsUrl: '',
                      isActive: false,
                    }

                    createSpeaker.mutateAsync(speakerData)
                  },
                })
              }}
            >
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-end">
                <BaseFields />

                <LinkedinField />
                {socialLinks.slice(1).map((socialLink, index) => (
                  <SocialLinkField
                    key={socialLink.platform}
                    socialLink={socialLink}
                    index={index}
                  />
                ))}

                <form.Field name="bio">
                  {(field) => (
                    <FormField
                      {...field}
                      variant="textarea"
                      onChange={(e) => field.handleChange(e.target.value)}
                      label="Bio"
                      fieldClassName="md:col-span-2"
                      className="resize-none max-h-3"
                      maxLength={1000}
                      errors={field.state.meta.errors}
                    />
                  )}
                </form.Field>
              </div>
              {topics && (
                <SelectTopics
                  topics={topics}
                  createTopic={createTopic}
                  isCreatingTopic={isCreatingTopic}
                />
              )}
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              className="border-primary px-6 py-2 rounded-lg"
              disabled={createSpeaker.isPending}
            >
              Reset
            </Button>
            <Button
              type="submit"
              form="register-form"
              disabled={createSpeaker.isPending}
            >
              Submit
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </ScrollArea>
  )
}
