import {
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Button,
} from '@mui/material'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

//import useAuth from '../../hooks/useAuth'

const ArtworkForm = () => {
    //const { user } = useAuth()
  
    /*const [title, setTitle] = useState('')
    const [creationYear, setCreationYear] = useState('')
    const [medium, setMedium] = useState('')
    const [curatorDesc, setCuratorDesc] = useState('')
    const [width, setWidth] = useState(0.0)
    const [height, setHeight] = useState(0.0)
    const [depth, setDepth] = useState(0.0)
    const [diameter, setDiameter] = useState(0.0)
    const [artistNote, setArtistNote] = useState('')
    images, creator?*/
    const [submittedAt, setSubmittedAt] = useState<Dayjs | null>(null)
    const [tag, setTag] = useState('');
  
    const sxCommon = {
      width: '60vw',
    }
  
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{ my: 5 }}
        >
          <Typography sx={sxCommon} variant="h3">
            {/*HERE ADD CONDITION IF ARTWORK EXISTS THEN "update", OTHERWISE "add"*/}
            Add or update an Artwork
          </Typography>
        <Typography
            color={'text.secondary'}
            variant="h6"
            sx={{ mb: 10, ...sxCommon }}
        >
            {/*HERE ADD CONDITION IF ARTWORK EXISTS THEN "update", OTHERWISE "add"*/}
            To be able to add or update an Artwork as a Curator, please fill out the required information below.
        </Typography>
          <Box
            display="flex"
            alignItems="left"
            justifyContent="left"
            flexDirection="column"
            sx={{ width: '60vw' }}
          >
            <TextField
                  fullWidth
                  label="Title"
                  sx={{ mb: 2.5 }}
                  variant="standard"
                  autoComplete="no"
                />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                    fullWidth
                    multiline 
                    label="Medium"
                    sx={{ mb: 8 }}
                    variant="standard"
                    autoComplete="no"
                />  
              </Grid> 
              <Grid item xs={3}>
                <TextField
                    fullWidth
                    sx={{ mb: 8 }}
                    label="Creation Year"
                    variant="standard"
                    autoComplete="no"
                />
              </Grid>
              <Grid item xs={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Submission Date"
                  value={submittedAt}
                  onChange={(value) => {
                    setSubmittedAt(value)
                  }}
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      sx={{ mb: 10 }}
                      variant="standard"
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            </Grid>
            <Typography sx={{ mb: 2.5, ...sxCommon }}>
                Tell us more about the painting...
            </Typography>
            <TextField
              label="Curator Description"
              multiline
              rows={4}
              sx={{ mb: 2.5, mt: 2.5 }}
              variant="filled"
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <TextField
                  type="number"
                  fullWidth
                  label="Width"
                  sx={{ mb: 2.5 }}
                  variant="standard"
                  autoComplete="no"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="number"
                  fullWidth
                  label="Height"
                  sx={{ mb: 2.5 }}
                  variant="standard"
                  autoComplete="no"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  type="number"
                  fullWidth
                  label="Depth"
                  sx={{ mb: 5 }}
                  variant="standard"
                  autoComplete="no"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="number"
                  fullWidth
                  label="Diameter"
                  sx={{ mb: 5 }}
                  variant="standard"
                  autoComplete="no"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        label="Artist note"
                        sx={{ mb: 4 }}
                        variant="standard"
                        autoComplete="no"
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth variant="standard" sx={{ mb: 10 }}>
                        <InputLabel id="tags-label">Tags</InputLabel>
                        <Select
                        value={tag}
                        label="Tag"
                        labelId="tag-label"
                        onChange={(e) => {
                            setTag(e.target.value)
                        }}
                        size="small"
                        >
                            <MenuItem value={'acrylic'}>Acrylic</MenuItem>
                            <MenuItem value={'canvas'}>Canvas</MenuItem>
                            <MenuItem value={'oil paintings'}>Oil Paintings</MenuItem>
                            <MenuItem value={'collage'}>Collage</MenuItem>
                            <MenuItem value={'print'}>Print</MenuItem>
                            <MenuItem value={'trash'}>Trash</MenuItem>
                            <MenuItem value={'fractal'}>Fractal</MenuItem>
                            <MenuItem value={'maths'}>Maths</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
          </Box>
          <Button size="large" variant="contained">
            Save
          </Button>
        </Box>
      </>
    )
  }
  
  export default ArtworkForm