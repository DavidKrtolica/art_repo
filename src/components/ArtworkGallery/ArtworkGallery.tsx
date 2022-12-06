import {
  ImageList,
  Box,
  TablePagination,
  Paper,
  TextField,
  FormControl,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState, useEffect, ChangeEvent } from 'react'
import { useQuery, gql } from '@apollo/client'

import { GalleryArtwork } from '../../utils/types'
import PageHeader from '../PageHeader'
import GalleryItem from './GalleryItem'

const GET_ARTWORKS = gql`
  query getArtworks {
    artworks {
      id
      title
      artistNote
      image
    }
  }
`
type GetArtworksQueryResult = {
  artworks: GalleryArtwork[]
}

const ArtworkGallery = () => {
  const { loading, error, data } =
    useQuery<GetArtworksQueryResult>(GET_ARTWORKS)

  const [artworks, setArtworks] = useState<GalleryArtwork[]>([])
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  const [columns, setColumns] = useState(3)
  const [search, setSearch] = useState('')

  const getPaginatedArtworks = (
    artworks: GalleryArtwork[],
    page: number,
    pageSize: number
  ) => {
    const startIndex = page * pageSize
    const endIndex = startIndex + pageSize
    return artworks.slice(startIndex, endIndex)
  }

  useEffect(() => {
    if (!loading && data) {
      setCount(data.artworks.length)
      setArtworks(getPaginatedArtworks(data.artworks, page, pageSize))
    }
  }, [loading, data])

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
    if (data) {
      setArtworks(getPaginatedArtworks(data.artworks, page, pageSize))
    }
  }, [page, pageSize])

  return (
    <>
      <PageHeader title="Gallery" color="primary" />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Paper
          sx={{
            position: 'fixed',
            zIndex: '100',
            width: '80vw',
            display: 'flex',
            opacity: 0.3,
            '&:hover': { opacity: 1 },
          }}
        >
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              sx={{ p: 1 }}
            />
          </FormControl>
          <IconButton sx={{ mr: 20 }} color="primary">
            <SearchIcon />
          </IconButton>
          <FormControl sx={{ width: 200, p: 1 }}>
            <InputLabel sx={{ p: 1 }} id="columns-label">
              Columns
            </InputLabel>
            <Select
              value={columns}
              label="Columns"
              labelId="columns-label"
              onChange={(e) => {
                const numberValue = Number(e.target.value)
                setColumns(numberValue)
              }}
              size="small"
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <TablePagination
            sx={{ width: '80vw' }}
            component="div"
            count={count}
            page={page}
            rowsPerPageOptions={[5, 10, 20]}
            onPageChange={handleChangePage}
            rowsPerPage={pageSize}
            onRowsPerPageChange={handleChangePageSize}
            labelRowsPerPage={'Artworks per page'}
          />
        </Paper>
      </Box>
      <Box
        sx={{ mt: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ImageList
          sx={{ width: '80vw', padding: '20px' }}
          cols={columns}
          gap={50}
          //variant="masonry"
        >
          {artworks?.map((artwork) => (
            <GalleryItem artwork={artwork} />
          ))}
        </ImageList>
      </Box>
    </>
  )
}

export default ArtworkGallery
