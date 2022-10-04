import { Typography, Box } from '@mui/material'

const mockArtwork = {
  id: '10',
  title: 'Sometimes I feel like this',
  creationDate: '2021',
  medium: 'print',
  description: '',
  dateSubmitted: '2022-09-27',
  itemWidth: 40.0,
  itemHeight: 40.0,
  itemDepth: 2.0,
  itemDiameter: 0.0,
  note: 'Have YOU ever felt like this?',
  tags: ['fractal', 'print', 'maths'],
  images: ['https://i.ibb.co/SPcpbmC/sometimes-i-feel-like-going-here.jpg'],
  creator: [
    {
      id: '6',
      partyType: 'Person',
      fullName: 'George Ursachi',
      citedName: 'Sachi',
      role: null,
      nationality: 'Romanian',
      birthDate: '2000-03-17',
      deathDate: null,
      birthPlace: 'Bacau, Romania',
      deathPlace: null,
    },
  ],
}

const Artwork = () => {
  const sxCommon = { width: '80vw', px: '20px' }
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
        //color={color}
        sx={sxCommon}
      >
        {artwork.creator[0].citedName}
      </Typography>
      <Typography
        variant="h3"
        //color={color}
        sx={sxCommon}
      >
        {artwork.title}
      </Typography>
      <Typography
        variant="h4"
        //color={color}
        sx={sxCommon}
      >
        {artwork.creationDate}
      </Typography>
    </Box>
  )
}

export default Artwork
