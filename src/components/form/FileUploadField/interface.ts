import { Control, RegisterOptions } from 'react-hook-form'
import { ReactElement } from 'react'


export interface FileUploadFieldProps  {
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
}
