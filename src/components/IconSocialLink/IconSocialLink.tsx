import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IconSocialLinkProps } from './interface'

const IconSocialLink = ({linkName, className, target, iconName, ariaLabel }:IconSocialLinkProps) => {
    const style = twMerge(`text-xl`, className)
    const label = ariaLabel ? ariaLabel : 'Social link'
  return (
    <a href={linkName ? linkName : '#'} rel='nofollow' target={target ? target :'_blank'} aria-label={label}><span className={style} aria-label="">{iconName}</span></a> 
  )
}

export default IconSocialLink
