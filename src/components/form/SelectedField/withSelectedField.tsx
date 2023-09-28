import React from 'react'
import { SelectedFieldProps } from './interface'


const withSelectedField = (Component: React.FC<SelectedFieldProps>) => {
  const Hoc = ({
    ...props
  }: SelectedFieldProps) => {
    const newProps = {
      ...props,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withSelectedField }
