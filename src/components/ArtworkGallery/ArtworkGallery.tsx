import { ImageList, ImageListItem, ImageListItemBar, Box } from '@mui/material'
import { useState } from 'react'

import { Artwork } from '../../types'
import PageHeader from '../PageHeader'
import GalleryItem from './GalleryItem'
import mockArtworks from './mock_artworkData'

const ArtworkGallery = () => {
  const artworks = mockArtworks.map((artwork) =>
    Object.fromEntries(Object.entries(artwork).filter(([_, v]) => v != null))
  ) as Artwork[]

  return (
    <>
      <PageHeader title="Gallery" color="primary" />
      <Box display="flex" alignItems="center" justifyContent="center">
        <ImageList
          sx={{ width: '80vw', padding: '20px' }}
          cols={2}
          gap={100}
          variant="masonry"
        >
          {artworks.map((artwork) => (
            <GalleryItem artwork={artwork} />
          ))}
        </ImageList>
      </Box>
    </>
  )
}

export default ArtworkGallery
