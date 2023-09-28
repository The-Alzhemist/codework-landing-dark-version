import { Control, RegisterOptions } from 'react-hook-form'

export interface CheckBoxFieldProps {
  control: Control
  name: string
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >

  className?: string
  label: string
  labelClassName?: string
  checked?: boolean
  disabled?:boolean,
  inputClassName?:string,
}
