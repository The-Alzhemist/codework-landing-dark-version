import React from 'react'
import { InputFieldAcceptProps, InputFieldProps } from './interface'

const withInputField = (Component: React.FC<InputFieldProps>) => {
  const Hoc = ({
    type,
    isShowPassword,

    ...props
  }: InputFieldAcceptProps) => {
    const isPasswordType = type === 'password'

    const newProps = {
      type: isPasswordType ? (isShowPassword ? 'text' : 'password') : type,
      ...props,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withInputField }
