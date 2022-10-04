import { Box, TablePagination, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import { useState, useEffect, ChangeEvent } from 'react'

import { Artist } from '../../utils/types'
import PageHeader from '../PageHeader'
import ArtistItem from './ArtistItem'
import mockArtists from './mock_artistData'

interface Column {
  id: 'id' | 'partyType' | 'fullName' | 'citedName' | 'role' | 'nationality' | 'birthDate' | 'deathDate' | 'birthPlace' | 'deathPlace';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: Column[] = [
  { id: 'id', label: 'ID' },
  { id: 'partyType', label: 'Party Type' },
  { id: 'fullName', label: 'Full Name' },
  { id: 'citedName', label: 'Cited Name' },
  { id: 'role', label: 'Role' },
  { id: 'nationality', label: 'Nationality' },
  { id: 'birthDate', label: 'Birth Date' },
  { id: 'deathDate', label: 'Death Date' },
  { id: 'birthPlace', label: 'Birth Place' },
  { id: 'deathPlace', label: 'Death Place' },
];

const allArtists = mockArtists.map((artist) =>
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
  }, [page, pageSize])

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
      </Box>
    </>
  )
}

export default ArtistHall
