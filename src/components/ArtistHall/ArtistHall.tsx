import { Box, TablePagination, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import { useState, useEffect, ChangeEvent } from 'react'
import { useQuery, gql } from '@apollo/client'

import { HallArtist } from '../../utils/types'
import PageHeader from '../PageHeader'
import ArtistItem from './ArtistItem'

const GET_ARTISTS = gql`
query getArtists {
  artists {
    id
    fullName
    citedName
    nationality
    birthDate
  }
}
`;

interface Column {
  id: 'fullName' | 'citedName' | 'nationality' | 'birthDate';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: Column[] = [
  { id: 'fullName', label: 'Full Name' },
  { id: 'citedName', label: 'Cited Name' },
  { id: 'nationality', label: 'Nationality' },
  { id: 'birthDate', label: 'Birth Date' },
];

type GetArtistsQueryResult = {
  artists: HallArtist[]
}

const ArtistHall = () => {
  const { loading, error, data } =
    useQuery<GetArtistsQueryResult>(GET_ARTISTS)

  const [artists, setArtists] = useState<HallArtist[]>([])

  useEffect(() => {
    if (!loading && data) {
      setArtists(data.artists)
    }
  }, [loading, data])


/*const allArtists = mockArtists.map((artist) =>
  Object.fromEntries(Object.entries(artist).filter(([_, v]) => v != null))
) as Artist[]

const getPaginatedArtists = (page: number, pageSize: number) => {
  const startIndex = page * pageSize
  const endIndex = startIndex + pageSize
  return allArtists.slice(startIndex, endIndex)
}

const ArtistHall = () => {
  const count = allArtists.length
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  const [artists, setArtists] = useState<Artist[]>(
    getPaginatedArtists(page, pageSize)
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
    setArtists(getPaginatedArtists(page, pageSize))
  }, [page, pageSize])*/

  return (
    <>
      <PageHeader title="Artist Hall" color="secondary" />
      <Box display="flex" alignItems="center" justifyContent="center" padding="100px">
        <Paper sx={{ width: '100%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" padding='normal'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ fontSize: "large", fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {artists.map((artist) => (
              <ArtistItem artist={artist}></ArtistItem>
            ))}
          </TableBody>
        </Table>
        </Paper>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        {/*
          <TablePagination
            sx={{ width: '80vw', display: 'flex' }}
            component="div"
            count={count}
            page={page}
            rowsPerPageOptions={[5, 10, 20]}
            onPageChange={handleChangePage}
            rowsPerPage={pageSize}
            onRowsPerPageChange={handleChangePageSize}
            labelRowsPerPage={'Artists per page'}
          />
          */}
      </Box>
    </>
  )
}

export default ArtistHall
