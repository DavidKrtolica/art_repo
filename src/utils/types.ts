import { ReactNode } from 'react'
import { AlertColor } from '@mui/material'
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
  authRequired?: boolean
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
  fullName: string
  citedName: string
  nationality: string
  birthDate: string
  birthPlace: string
  deathPlace: string
  artworksCount: number
}

export type Profile = {
  id: string
  firstName?: string
  lastName?: string
  phone?: string
  birthDate?: string
  gender: string
  address?: {
    addressLine: string
    zip: string
    city: string
    region: string
    country: string
  }
  about?: string
}

//For use on the artist hall
export type HallArtist = {
  id: string
  fullName: string
  citedName: string
  nationality: string
  artworksCount: number
}

export type SnackbarAlert = {
  severity: AlertColor
  message: string
}
