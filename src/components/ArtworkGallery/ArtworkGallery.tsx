import { ImageList, Box, TablePagination } from '@mui/material'
import { useState, useEffect, ChangeEvent } from 'react'

import { Artwork } from '../../utils/types'
import PageHeader from '../PageHeader'
import GalleryItem from './GalleryItem'
import mockArtworks from './mock_artworkData'

const allArtworks = mockArtworks.map((artwork) =>
  Object.fromEntries(Object.entries(artwork).filter(([_, v]) => v != null))
) as Artwork[]

const getPaginatedArtworks = (page: number, pageSize: number) => {
  const startIndex = page * pageSize
  const endIndex = startIndex + pageSize
  return allArtworks.slice(startIndex, endIndex)
}

const ArtworkGallery = () => {
  //Normally with gql we'd only get what we need but to make types work i'll remove null stuff
  const count = allArtworks.length
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  const [artworks, setArtworks] = useState<Artwork[]>(
    getPaginatedArtworks(page, pageSize)
  )

  const handleChangePage = (_, newPage: number) => {
    setPage(newPage)
  }

  const handleChangePageSize = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageSize(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    setArtworks(getPaginatedArtworks(page, pageSize))
  }, [page, pageSize])

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
      <Box display="flex" alignItems="center" justifyContent="center">
        <TablePagination
          sx={{ width: '80vw', display: 'flex' }}
          component="div"
          count={count}
          page={page}
          rowsPerPageOptions={[5, 10, 20]}
          onPageChange={handleChangePage}
          rowsPerPage={pageSize}
          onRowsPerPageChange={handleChangePageSize}
          labelRowsPerPage={'Artworks per page'}
        />
      </Box>
    </>
  )
}

export default ArtworkGallery
