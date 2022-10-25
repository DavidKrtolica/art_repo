import { Typography, Box, Divider } from '@mui/material'
import ImageViewer from './ImageViewer'
const mockArtwork = {
  id: '4',
  title: 'Vehicle',
  creationDate: '2005',
  medium: 'acrylic on paper',
  description:
    'The thing has been painted in acrylic on paper. This is a fake description obviously and I have no idea what to write in it. Colors, lines & stuff, and whatever else the artist or curator might want to say',
  dateSubmitted: '2022-09-01',
  itemWidth: 35.0,
  itemHeight: 22.0,
  itemDepth: 4.0,
  itemDiameter: 0.0,
  note: 'Note is a short sentence from the artist about the artwork, if relevant',
  tags: ['acrylic'],
  images: ['https://images.unsplash.com/photo-1590622974113-66a9160acf20'],
  creator: [
    {
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
    },
  ],
}

const Artwork = () => {
  const sxCommon = {
    width: '60vw',
    // px: '20px'
  }
  const artwork = mockArtwork

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography
        variant="h4"
        color={'text.secondary'}
        sx={{ ...sxCommon, mt: 3 }}
      >
        {artwork.creator[0].citedName}
      </Typography>
      <Typography variant="h3" sx={sxCommon}>
        {artwork.title}
      </Typography>
      <Typography variant="h4" color={'text.secondary'} sx={sxCommon}>
        {artwork.creationDate}
      </Typography>
      <ImageViewer src={artwork.images[0]} alt={artwork.title} />
      <Typography
        variant="h5"
        color={'text.secondary'}
        sx={{ ...sxCommon, mb: 5 }}
      >
        {artwork.note}
      </Typography>
      <Typography variant="h6" sx={sxCommon}>
        {artwork.description}
      </Typography>
    </Box>
  )
}

export default Artwork
