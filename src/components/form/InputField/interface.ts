import { Control, RegisterOptions } from 'react-hook-form'
import { ReactElement } from 'react'

export interface InputFieldAcceptProps extends InputFieldProps {
  isShowPassword?: boolean
}

export interface InputFieldProps  {
  name: string
  control: Control
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >

  label?: string | ReactElement
  inputClassName?: string
  disabled?: boolean
  placeholder?: string
  className?: string

  type?: string
  required?: boolean
  maxLength?: number
  suffixIcon?: React.ReactNode
}
