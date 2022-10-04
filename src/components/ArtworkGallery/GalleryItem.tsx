import { useState } from 'react'
import { ImageListItem, ImageListItemBar } from '@mui/material'
import { Link } from 'react-router-dom'
import { Artwork } from '../../utils/types'
import { red } from '../../utils/colors'

type GalleryItemProps = {
  artwork: Artwork
}

const GalleryItem = ({ artwork }: GalleryItemProps) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Link to="/artwork">
      <ImageListItem
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        key={artwork.images[0]}
        sx={{ '&:hover': { boxShadow: `0px 0px 25px 5px ${red.dark}` } }}
      >
        <img
          src={`${artwork.images[0]}?w=800&fit=crop&auto=format`}
          srcSet={`${artwork.images[0]}?w=800&fit=crop&auto=format&dpr=2 2x`}
          alt={artwork.title}
          loading="lazy"
        />
        {isHovering && (
          <ImageListItemBar
            title={artwork.title}
            subtitle={artwork.note}
            position="top"
          />
        )}
      </ImageListItem>
    </Link>
  )
}

export default GalleryItem
