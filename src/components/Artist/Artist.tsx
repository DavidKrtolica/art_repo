import { Typography, Box } from '@mui/material'

const mockArtist = {
  id: '3',
  partyType: 'Person',
  fullName: 'Tim Mossholder',
  citedName: 'Mossholder',
  role: null,
  nationality: 'American',
  birthDate: '1983-02-14',
  deathDate: null,
  birthPlace: 'Providence, Rhode Island',
  deathPlace: null,
}

const Artist = () => {
  const sxCommon = { width: '80vw', px: '20px' }
  const artist = mockArtist

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h4" sx={sxCommon}>
        {artist.citedName}
      </Typography>
      <Typography variant="h3" sx={sxCommon}>
        {artist.fullName}
      </Typography>
      <Typography variant="h4" sx={sxCommon}>
        {artist.nationality}
      </Typography>
    </Box>
  )
}

export default Artist
