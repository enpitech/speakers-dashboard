import { useStore } from '@tanstack/react-form'
import { useRegisterForm } from '../../hooks/useRegisterForm'
import { FormProvider } from './form-context'
import { SelectTopics } from './SelectTopics'
import { SocialLinkField } from './SocialLinkField'
import { LinkedinField } from './LinkedinField'
import { BaseFields } from './BaseFields'
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
  const form = useRegisterForm(onSuccess)
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
                form.handleSubmit()
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
