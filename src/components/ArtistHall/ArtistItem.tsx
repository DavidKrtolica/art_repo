import { TableRow, TableCell } from '@mui/material'
import { HallArtist } from '../../utils/types'
import { Link } from 'react-router-dom'

type ArtistItemProps = {
  artist: HallArtist
}

const ArtistItem = ({ artist }: ArtistItemProps) => {

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={artist.id}
      sx={{ textDecoration: 'none' }}
      component={Link}
      to={`/artist/${artist.id}`}
    >
      <TableCell>{ artist.fullName }</TableCell>
      <TableCell>{ artist.citedName }</TableCell>
      <TableCell>{ artist.nationality }</TableCell>
      <TableCell>{ artist.birthDate ? new Date(parseInt(artist.birthDate)).toDateString() : '' }</TableCell>
    </TableRow>
  )
}

export default ArtistItem
