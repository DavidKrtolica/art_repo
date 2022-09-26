import { ImageList, ImageListItem, ImageListItemBar, Box } from '@mui/material'

import PageHeader from '../PageHeader'
import artworks from './mock_artworkData'

const ArtworkGallery = () => {
  return (
    <>
      <PageHeader title="Gallery" color="primary" />
      <Box display="flex" alignItems="center" justifyContent="center">
        <ImageList sx={{ width: '75vw' }} cols={2} gap={100} variant="masonry">
          {artworks.map((artwork) => (
            <ImageListItem key={artwork.images[0]}>
              <img
                src={`${artwork.images[0]}?w=800&fit=crop&auto=format`}
                srcSet={`${artwork.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={artwork.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  )
}

export default ArtworkGallery
