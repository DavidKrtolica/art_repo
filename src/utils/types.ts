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
  creator: Artist[]
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

export type Artist = {
  id: string
  partyType: string
  fullName: string
  citedName: string
  role: string
  nationality: string
  birthDate: string
  deathDate: string
  birthPlace: string
  deathPlace: string
}