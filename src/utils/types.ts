import { ReactNode } from 'react'

//For use on the artwork page
export type Artwork = {
  id: string
  title: string
  creationYear: number
  medium: string
  submittedAt: string
  curatorDescription: string
  artistNote?: string
  itemWidth?: number
  itemHeight?: number
  itemDepth?: number
  itemDiameter?: number
  image: string
  creatorId: string
}

//For use on the artwork gallery
export type GalleryArtwork = {
  id: string
  title: string
  image: string
  artistNote?: string
}

export type NavSection = {
  name: string
  href: string
  icon: ReactNode
  textColor?: string
  noText?: boolean
  topDivider?: boolean
  props?: object
}

export type HomepageItem = {
  text: string
  href: string
  mainColor: string
  darkColor: string
  props?: object
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
