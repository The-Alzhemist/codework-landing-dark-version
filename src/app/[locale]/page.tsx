import HomePage from '@/features/Homepage/HomePage'
import React from 'react'

export default function Home() {
  return (
    <HomePage/>
  )
}

const locales = ['en', 'th'];
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
} 