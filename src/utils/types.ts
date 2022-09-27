import { ReactNode } from 'react'

export type Artwork = {
  id: string
  title: string
  creationDate: string
  medium: string
  dateSubmitted: string
  note?: string
  itemWidth?: number
  itemHeight?: number
  itemDepth?: number
  itemDiameter?: number
  tags?: string[]
  images: string[]
  creator: any[]
}

export type NavSection = {
  name: string
  href: string
  icon: ReactNode
  textColor?: string
  noText?: boolean
  topDivider?: boolean
}

export type HomepageItem = {
  text: string
  href: string
  mainColor: string
  darkColor: string
}
