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

import useAuth from '../../hooks/useAuth'

const ProfilePage = () => {
  const { user } = useAuth()

  /*const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')*/
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null)
  const [gender, setGender] = useState('')

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
          Your personal information
        </Typography>
        {user && !user.isLive && (
          <Typography
            color={'text.secondary'}
            variant="h6"
            sx={{ mb: 10, ...sxCommon }}
          >
            {`Your registration is not yet complete. Please fill out the required
          information below to become a curator and start showcasing artworks.`}
          </Typography>
        )}
        <Box
          display="flex"
          alignItems="left"
          justifyContent="left"
          flexDirection="column"
          sx={{ width: '60vw' }}
        >
          <Typography sx={{ mb: 2.5, ...sxCommon }}>
            First, we need to know a little bit more about you.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First name"
                sx={{ mb: 2.5 }}
                variant="standard"
                autoComplete="no"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                sx={{ mb: 2.5 }}
                label="Last name"
                variant="standard"
                autoComplete="no"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl fullWidth variant="standard" sx={{ mb: 10 }}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  value={gender}
                  label="Gender"
                  labelId="gender-label"
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                  size="small"
                >
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'other'}>Other</MenuItem>
                  <MenuItem value={'prefer not to say'}>
                    Prefer not to say
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Birth date"
                  value={birthDate}
                  onChange={(value) => {
                    setBirthDate(value)
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
            <Grid item xs={4}>
              <TextField
                fullWidth
                sx={{ mb: 10 }}
                label="Phone number"
                type="tel"
                variant="standard"
                autoComplete="no"
              />
            </Grid>
          </Grid>
          <Typography sx={{ mb: 2.5, ...sxCommon }}>
            Where can we find you?
          </Typography>
          <TextField
            fullWidth
            label="Address line"
            sx={{ mb: 2.5 }}
            variant="standard"
            autoComplete="no"
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Zip code"
                sx={{ mb: 2.5 }}
                variant="standard"
                autoComplete="no"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                sx={{ mb: 2.5 }}
                variant="standard"
                autoComplete="no"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Region"
                sx={{ mb: 10 }}
                variant="standard"
                autoComplete="no"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Country"
                sx={{ mb: 10 }}
                variant="standard"
                autoComplete="no"
              />
            </Grid>
          </Grid>
          <Typography sx={{ mb: 2.5, ...sxCommon }}>
            Tell us about yourself. What kind of art interests you? Why are you
            here?
          </Typography>
          <TextField
            label="About you"
            multiline
            rows={4}
            sx={{ mb: 5 }}
            variant="filled"
          />
        </Box>
        <Button size="large" variant="contained">
          Save
        </Button>
      </Box>
    </>
  )
}

export default ProfilePage
