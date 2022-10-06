import { Typography, Box } from '@mui/material'
import { useLocation } from 'react-router-dom'



const ArtistComponent = () => {
  const sxCommon = { width: '80vw', px: '20px' }
  const artistData = useLocation().state

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h4" sx={sxCommon}>
        {artistData ? (artistData.citedName) : ('Nothing')}
      </Typography>
      <Typography variant="h3" sx={sxCommon}>
        {artistData ? (artistData.fullName) : ('Nothing')}
      </Typography>
      <Typography variant="h4" sx={sxCommon}>
        {artistData ? (artistData.nationality) : ('Nothing')}
      </Typography>
    </Box>
  )
}

export default ArtistComponent