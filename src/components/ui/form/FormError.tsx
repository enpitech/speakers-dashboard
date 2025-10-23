interface FormErrorProps {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null

  return <p className="mt-1 text-xs text-red-500">{message}</p>
}
