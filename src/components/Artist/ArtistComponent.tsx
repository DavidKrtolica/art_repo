import { Typography, Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import { Artist } from '../../utils/types'

const GET_ARTIST = gql`
  query getArtist($id: ID!) {
    artist(id: $id) {
      id
      fullName
      citedName
      nationality
      birthDate
      birthPlace
      deathPlace
    }
  }
`
type GetArtistQueryResult = {
  artist: Artist
}
type GetArtistQueryVariables = {
  id?: string
}

const ArtistComponent = () => {
  const sxCommon = { width: '80vw', px: '20px' }
  
  const { id } = useParams()
  const { loading, error, data } = useQuery<
    GetArtistQueryResult,
    GetArtistQueryVariables
  >(GET_ARTIST, {
    variables: {
      id,
    },
  })

  const [artist, setArtist] = useState<Artist>()

  useEffect(() => {
    if (!loading && data) {
      setArtist(data.artist)
    }
  }, [loading, data])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {artist && (
        <>
          <Typography variant="h3" sx={sxCommon}>
            {artist.fullName}
          </Typography>
          <Typography variant="h4" color={'text.secondary'} sx={sxCommon}>
            {artist.citedName}
          </Typography>
          <Typography
            variant="h5"
            color={'text.secondary'}
            sx={{ ...sxCommon, mb: 5 }}
          >
            {artist.nationality}
          </Typography>
          <Typography variant="h6" sx={sxCommon}>
            { artist.birthDate ? new Date(parseInt(artist.birthDate)).toDateString() : '' }
          </Typography>
          <Typography variant="h6" sx={sxCommon}>
            {artist.birthPlace}
          </Typography>
          <Typography variant="h6" sx={sxCommon}>
            {artist.deathPlace}
          </Typography>
        </>
      )}
    </Box>
  )
}

export default ArtistComponent
