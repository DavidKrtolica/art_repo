import { Typography, Box, Divider } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

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

  console.log(artist)
  console.log(artwork)
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {artwork && artist && (
        <>
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
          <Typography variant="h6" sx={{ ...sxCommon, mb: 2.5 }}>
            {artwork.curatorDescription}
          </Typography>
          <Typography
            variant="h4"
            color={'text.secondary'}
            sx={{ ...sxCommon, mb: 4 }}
          >
            <Link to={`/artist/${artwork.creatorId}`}>
              Find out more about the Artist behind this painting!
            </Link>
          </Typography>
        </>
      )}
    </Box>
  )
}

export default ArtworkPage
