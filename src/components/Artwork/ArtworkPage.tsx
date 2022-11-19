import { Typography, Box, Divider } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

import ImageViewer from './ImageViewer'
import { Artwork } from '../../utils/types'

const GET_ARTWORK = gql`
  query getArtwork($id: ID!) {
    artwork(id: $id) {
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
`

type GetArtworkQueryResult = {
  artwork: Artwork
}
type GetArtworkQueryVariables = {
  id?: string
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
      id,
    },
  })

  const [artwork, setArtwork] = useState<Artwork>()

  useEffect(() => {
    if (!loading && data) {
      setArtwork(data.artwork)
    }
  }, [loading, data])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {artwork && (
        <>
          <Typography
            variant="h4"
            color={'text.secondary'}
            sx={{ ...sxCommon, mt: 3 }}
          >
            {artwork.creatorId}
          </Typography>
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
            sx={{ ...sxCommon, mb: 5 }}
          >
            {artwork.artistNote}
          </Typography>
          <Typography variant="h6" sx={sxCommon}>
            {artwork.curatorDescription}
          </Typography>
        </>
      )}
    </Box>
  )
}

export default ArtworkPage
