import * as React from 'react'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import type { Option } from '~/lib/types'
import { cn } from '~/lib/utils'
import {
  Badge,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
} from '~/ui-core'
import { useWindowSize } from '~/hooks/useWindowSize'

const MAX_BADGES = 2
const WINDOW_SMALL_WIDTH_BREAKPOINT = 400

interface BaseComboboxProps {
  options: Option[]
  placeholder?: string
  loading?: boolean
  onSave?: (value: string) => Promise<unknown>
}

interface SingleComboboxProps extends BaseComboboxProps {
  multiple: false
  selected: string
  onChange: (value: string) => void
}

interface MultipleComboboxProps extends BaseComboboxProps {
  multiple: true
  selected: string[]
  onChange: (values: string[]) => void
}

type ComboboxProps = SingleComboboxProps | MultipleComboboxProps

export function Combobox(props: ComboboxProps) {
  const { options, placeholder = 'Select options...', loading, onSave } = props

  const { width } = useWindowSize()
  const [open, setOpen] = React.useState(false)

  const isMultiple = props.multiple === true

  const visibleBadges = isMultiple
    ? props.selected.slice(0, MAX_BADGES).map((item) => {
        const option = options.find((o) => o.value === item)
        return option?.label
      })
    : []

  const hiddenCount = props.selected.length - visibleBadges.length

  function handleSelect(value: string) {
    if (!isMultiple) {
      props.onChange(value)
      setOpen(false)
      return
    }

    const exists = props.selected.includes(value)
    if (exists) {
      props.onChange(props.selected.filter((item) => item !== value))
    } else {
      props.onChange([...props.selected, value])
    }
  }

  function removeItem(value: string) {
    if (!isMultiple) return
    props.onChange(props.selected.filter((item) => item !== value))
  }

  async function handleCreateIfNeeded(input: string) {
    const exists = options.some(
      (o) => o.value.toLowerCase() === input.toLowerCase(),
    )
    if (exists || !input.trim() || !onSave || loading) return

    try {
      const newOption = await onSave(input.trim())
      if (newOption) handleSelect(input.trim())
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'Enter') return
    handleCreateIfNeeded((event.target as HTMLInputElement).value)
  }

  function renderMultipleSelection() {
    if (!isMultiple) return null

    if (width < WINDOW_SMALL_WIDTH_BREAKPOINT) {
      return `${props.selected.length} Selected`
    }

    return (
      <>
        {(visibleBadges as string[]).map((badge) => (
          <Badge
            key={badge}
            variant="secondary"
            className="max-w-[140px] gap-0"
            onClick={(e) => {
              e.stopPropagation()
              removeItem(badge)
            }}
          >
            <span className="truncate">{badge}</span>
            <X size={10} className="ml-2" />
          </Badge>
        ))}
        {width > WINDOW_SMALL_WIDTH_BREAKPOINT && hiddenCount > 0 && (
          <Badge variant="secondary" className="mr-1 whitespace-nowrap">
            +{hiddenCount} more
          </Badge>
        )}
      </>
    )
  }

  return (
    <Popover modal open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between items-center"
        >
          {props.selected.length === 0 ? (
            <span className="text-muted-foreground">{placeholder}</span>
          ) : null}

          <div className="flex gap-1.5">
            {isMultiple
              ? renderMultipleSelection()
              : options.find((o) => o.value === props.selected)?.label}
          </div>

          <ChevronsUpDown className="shrink-0 w-2 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            className="h-9"
            placeholder="Search..."
            onKeyDown={handleKeyDown}
          />
          <CommandList>
            <CommandEmpty>
              <div className="flex flex-col items-center justify-center">
                {loading ? (
                  <>
                    <span className="sr-only">Loading...</span>
                    <Spinner size="sm" />
                  </>
                ) : (
                  <>
                    <span>No items found.</span>
                    <span className="text-xs text-muted-foreground">
                      Press Enter to create new.
                    </span>
                  </>
                )}
              </div>
            </CommandEmpty>
            <CommandGroup>
              {loading && <Spinner size="sm" />}
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleSelect}
                >
                  <span className="truncate">{option.label}</span>
                  <Check
                    className={cn(
                      'ml-auto',
                      props.selected.includes(option.value)
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
