import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IconSocialLinkProps } from './interface'

const IconSocialLink = ({linkName, className, target, iconName }:IconSocialLinkProps) => {
    const style = twMerge(`text-xl`, className)
  return (
    <a href={linkName ? linkName : '#'} rel='nofollow' target={target ? target :'_blank'}><span className={style}>{iconName}</span></a> 
  )
}

export default IconSocialLink
