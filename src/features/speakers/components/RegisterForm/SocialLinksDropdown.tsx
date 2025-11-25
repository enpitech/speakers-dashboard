import { useFormContext } from './form-context'
import { SocialPlatformAliases } from './form-fields'
import { SocialPlatformEnum } from '~/lib/types'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '~/ui-core'

export const SocialLinksDropdown = () => {
  const form = useFormContext()

  return (
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
                .filter((p) => p !== SocialPlatformEnum.LINKEDIN)
                .map((platform) => (
                  <DropdownMenuCheckboxItem
                    key={platform}
                    checked={field.state.value.some(
                      (socialLink) => socialLink.platform === platform,
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
                            (socialLink) => socialLink.platform === platform,
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
  )
}
