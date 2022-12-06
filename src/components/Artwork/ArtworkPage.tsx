import { Typography, Box, Divider } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import { useTheme } from '@mui/material/styles'

import ImageViewer from './ImageViewer'
import { Artist, Artwork } from '../../utils/types'

const GET_ARTWORK = gql`
  query ArtworkPage($artworkId: ID!) {
    artworkPage(artworkId: $artworkId) {
      artist {
        id
        citedName
      }
      artwork {
        id
        title
        creationYear
        medium
        curatorDescription
        itemHeight
        itemWidth
        itemDepth
        itemDiameter
        artistNote
        image
        creatorId
        submittedAt
      }
    }
  }
`

type GetArtworkQueryResult = {
  artworkPage: {
    artist: Artist
    artwork: Artwork
  }
}
type GetArtworkQueryVariables = {
  artworkId?: string
}

const ArtworkPage = () => {
  const theme = useTheme()

  const sxCommon = {
    width: '60vw',
  }

  const { id } = useParams()
  const { loading, error, data } = useQuery<
    GetArtworkQueryResult,
    GetArtworkQueryVariables
  >(GET_ARTWORK, {
    variables: {
      artworkId: id,
    },
  })

  const [artwork, setArtwork] = useState<Artwork>()
  const [artist, setArtist] = useState<Artist>()
  useEffect(() => {
    if (!loading && data) {
      setArtwork(data.artworkPage.artwork)
      setArtist(data.artworkPage.artist)
    }
  }, [loading, data])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{ my: 5 }}
    >
      {artwork && artist && (
        <>
          <Link to={`/artist/${artist.id}`} style={{ textDecoration: 'none' }}>
            <Typography
              variant="h4"
              sx={{
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
                ...sxCommon,
              }}
              color={'text.secondary'}
            >
              {artist.citedName}
            </Typography>
          </Link>
          <Typography variant="h3" sx={sxCommon}>
            {artwork.title}
          </Typography>
          <Typography variant="h4" color={'text.secondary'} sx={sxCommon}>
            {artwork.creationYear}
          </Typography>
          <ImageViewer src={artwork.image} alt={artwork.title} />
          <Typography
            variant="h5"
            color={'text.secondary'}
            sx={{ ...sxCommon, mb: 2.5 }}
          >
            {artwork.artistNote}
          </Typography>
          <Typography variant="h6" sx={{ ...sxCommon, mb: 5 }}>
            {artwork.curatorDescription}
          </Typography>
          <Typography
            variant="h6"
            sx={{ ...sxCommon, mb: 2.5 }}
            color={'text.secondary'}
          >
            Additional information
          </Typography>
          <Typography variant="h6" sx={{ ...sxCommon }}>
            {`Medium: ${artwork.medium}`}
          </Typography>
          <Typography variant="h6" sx={{ ...sxCommon }}>
            {`Width: ${artwork.itemWidth} cm`}
          </Typography>
          <Typography variant="h6" sx={{ ...sxCommon }}>
            {`Height: ${artwork.itemHeight} cm`}
          </Typography>
          <Typography variant="h6" sx={{ ...sxCommon }}>
            {`Depth: ${artwork.itemDepth} cm`}
          </Typography>
          <Typography variant="h6" sx={{ ...sxCommon }}>
            {`Diameter: ${artwork.itemDiameter} cm`}
          </Typography>
          <Typography variant="h6" sx={{ ...sxCommon }}>
            {`Added at: ${new Date(
              parseInt(artwork.submittedAt)
            ).toDateString()}`}
          </Typography>
        </>
      )}
    </Box>
  )
}

export default ArtworkPage
