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
