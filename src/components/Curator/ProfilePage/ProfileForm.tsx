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
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'

import useAuth from '../../../hooks/useAuth'
import { Profile } from '../../../utils/types'

const ProfileForm = ({
  profile,
  saveProfile,
  accountId,
}: {
  profile: Profile | null
  saveProfile: (p: object) => void
  accountId: string
}) => {
  const { user } = useAuth()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState({
    addressLine: '',
    zip: '',
    city: '',
    region: '',
    country: '',
  })
  const [birthDate, setBirthDate] = useState<dayjs.Dayjs | null>(null)
  const [gender, setGender] = useState('')
  const [about, setAbout] = useState('')

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName || '')
      setLastName(profile.lastName || '')
      setPhone(profile.phone || '')
      setGender(profile.gender || '')
      if (profile.birthDate) {
        setBirthDate(
          dayjs(new Date(parseInt(profile.birthDate)).toDateString())
        )
      }
      setAddress(
        profile.address || {
          addressLine: '',
          zip: '',
          city: '',
          region: '',
          country: '',
        }
      )
      setAbout(profile.about || '')
    }
  }, [profile])

  const sxCommon = {
    width: '60vw',
  }

  const handleSave = () => {
    const profileInput = {
      firstName,
      lastName,
      phone,
      birthDate,
      gender,
      address: {
        addressLine: address.addressLine,
        city: address.city,
        zip: address.zip,
        region: address.region,
        country: address.country,
      },
      about,
      accountId,
    }
    const profileId = profile?.id || null
    saveProfile({ variables: { profile: profileInput, profileId } })
  }

  return (
    <>
      <Box
        component="form"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{ my: 5 }}
        onSubmit={(e) => {
          e.preventDefault()
          handleSave()
        }}
        autoComplete="off"
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
                required
                fullWidth
                label="First name"
                sx={{ mb: 2.5 }}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                variant="standard"
                autoComplete="no"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                sx={{ mb: 2.5 }}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                label="Last name"
                variant="standard"
                autoComplete="no"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl
                required
                fullWidth
                variant="standard"
                sx={{ mb: 10 }}
              >
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
                      required
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
                required
                fullWidth
                sx={{ mb: 10 }}
                label="Phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
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
            required
            fullWidth
            label="Address line"
            sx={{ mb: 2.5 }}
            value={address.addressLine}
            variant="standard"
            onChange={(e) => {
              setAddress({
                ...address,
                addressLine: e.target.value,
              })
            }}
            autoComplete="no"
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="Zip code"
                value={address.zip}
                sx={{ mb: 2.5 }}
                variant="standard"
                onChange={(e) => {
                  setAddress({
                    ...address,
                    zip: e.target.value,
                  })
                }}
                autoComplete="no"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="City"
                value={address.city}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    city: e.target.value,
                  })
                }}
                sx={{ mb: 2.5 }}
                variant="standard"
                autoComplete="no"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="Region"
                value={address.region}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    region: e.target.value,
                  })
                }}
                sx={{ mb: 10 }}
                variant="standard"
                autoComplete="no"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="Country"
                value={address.country}
                sx={{ mb: 10 }}
                variant="standard"
                onChange={(e) => {
                  setAddress({
                    ...address,
                    country: e.target.value,
                  })
                }}
                autoComplete="no"
              />
            </Grid>
          </Grid>
          <Typography sx={{ mb: 2.5, ...sxCommon }}>
            Tell us about yourself. What kind of art interests you? Why are you
            here?
          </Typography>
          <TextField
            required
            label="About you"
            multiline
            value={about}
            rows={4}
            onChange={(e) => {
              setAbout(e.target.value)
            }}
            sx={{ mb: 5 }}
            variant="filled"
          />
        </Box>
        <Button size="large" variant="contained" type="submit">
          Save
        </Button>
      </Box>
    </>
  )
}

export default ProfileForm
