import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import { Artist, GalleryArtwork } from '../../utils/types'
import ArtworkGallery from '../ArtworkGallery/ArtworkGallery'

const GET_ARTIST = gql`
  query Query($artistId: ID!) {
    artistPage(artistId: $artistId) {
      artist {
        id
        fullName
        citedName
        nationality
        birthDate
        birthPlace
        deathPlace
        artworksCount
      }
      artworks {
        id
        image
        title
      }
    }
  }
`
type GetArtistQueryResult = {
  artistPage: {
    artist: Artist
    artworks: GalleryArtwork[]
  }
}
type GetArtistQueryVariables = {
  artistId?: string
}

const ArtistComponent = () => {
  const sxCommon = { width: '60vw' }

  const { id } = useParams()
  const { loading, error, data } = useQuery<
    GetArtistQueryResult,
    GetArtistQueryVariables
  >(GET_ARTIST, {
    variables: {
      artistId: id,
    },
  })

  const [artist, setArtist] = useState<Artist>()
  const [artworks, setArtworks] = useState<GalleryArtwork[]>()

  useEffect(() => {
    if (!loading && data) {
      setArtist(data.artistPage.artist)
      setArtworks(data.artistPage.artworks)
    }
  }, [loading, data])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{ mb: 5 }}
    >
      {artist && artworks && (
        <>
          <Typography variant="h4" sx={sxCommon}>
            {artist.fullName}
          </Typography>
          <Typography
            variant="h3"
            color={'text.secondary'}
            sx={{ ...sxCommon, mb: 5 }}
          >
            {artist.citedName}
          </Typography>
          <Typography variant="h6" sx={sxCommon}>
            {artist.nationality}
          </Typography>
          <Typography variant="h6" sx={sxCommon}>
            {artist.birthDate
              ? new Date(parseInt(artist.birthDate)).toDateString()
              : ''}
          </Typography>
          <Typography variant="h6" sx={{ ...sxCommon, mb: 5 }}>
            {artist.birthPlace}
          </Typography>
          <Typography variant="h6" sx={sxCommon} color={'text.secondary'}>
            Artworks
          </Typography>
          <Typography variant="h6" sx={sxCommon}>
            {artist.artworksCount}
          </Typography>
          <ImageList
            sx={{ height: 500, ...sxCommon }}
            gap={50}
            cols={3}
            rowHeight={100}
          >
            {artworks.map((artwork) => (
              <ArtworkListItem artwork={artwork} />
            ))}
          </ImageList>
        </>
      )}
    </Box>
  )
}

const ArtworkListItem = ({ artwork }: { artwork: GalleryArtwork }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Link to={`/artwork/${artwork.id}`}>
      <ImageListItem
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        key={artwork.image}
        //sx={{ '&:hover': { boxShadow: `0px 0px 25px 5px ${red.darker}` } }}
      >
        <img
          src={`${artwork.image}?w=328&h=328&fit=crop&auto=format`}
          srcSet={`${artwork.image}?w=328&h=328&fit=crop&auto=format&dpr=2 2x`}
          alt={artwork.title}
          loading="lazy"
        />
        {isHovering && (
          <ImageListItemBar
            title={artwork.title}
            subtitle={artwork.artistNote}
            position="top"
          />
        )}
      </ImageListItem>
    </Link>
  )
}
export default ArtistComponent
