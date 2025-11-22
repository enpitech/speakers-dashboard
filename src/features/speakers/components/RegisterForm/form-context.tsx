import { createContext, useContext } from 'react'
import type { PropsWithChildren} from 'react';
import type { useRegisterForm } from '../../hooks/useRegisterForm'

type UseFormType = ReturnType<typeof useRegisterForm>

const FormContext = createContext<UseFormType | null>(null)

export const FormProvider: React.FC<
  PropsWithChildren<{ form: UseFormType }>
> = ({ children, form }) => {
  return <FormContext.Provider value={form}>{children}</FormContext.Provider>
}

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}
