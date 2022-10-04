import { TableRow, TableCell } from '@mui/material'
import { Artist } from '../../utils/types'
import { Link } from 'react-router-dom'

type ArtistItemProps = {
  artist: Artist
}

const ArtistItem = ({ artist }: ArtistItemProps) => {
  const keys = Object.keys(artist)

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={artist.id}
      component={Link}
      sx={{ textDecoration: 'none' }}
      to="/artist"
    >
      {keys.map((key) => (
        <TableCell>{artist[key]}</TableCell>
      ))}
    </TableRow>
  )
}

export default ArtistItem
