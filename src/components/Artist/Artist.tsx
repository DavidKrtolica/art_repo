import { Typography, Box } from '@mui/material'

const mockArtist = {
    id: '6',
    partyType: 'Person',
    fullName: 'George Ursachi',
    citedName: 'Sachi',
    role: 'Unknown',
    nationality: 'Romanian',
    birthDate: '2000-03-17',
    deathDate: 'Unknown',
    birthPlace: 'Bacau, Romania',
    deathPlace: 'Unknown'
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
      <Typography
        variant="h4"
        //color={color}
        sx={sxCommon}
      >
        {artist.citedName}
      </Typography>
      <Typography
        variant="h3"
        //color={color}
        sx={sxCommon}
      >
        {artist.fullName}
      </Typography>
      <Typography
        variant="h4"
        //color={color}
        sx={sxCommon}
      >
        {artist.nationality}
      </Typography>
    </Box>
  )
}

export default Artist
