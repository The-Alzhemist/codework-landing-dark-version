import React from 'react'
import { TextAreaFieldProps } from './interface'

const withTextAreaField = (Component: React.FC<TextAreaFieldProps>) => {
  const Hoc = ({
    ...props
  }: TextAreaFieldProps) => {
    const newProps = {
      ...props,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withTextAreaField }
