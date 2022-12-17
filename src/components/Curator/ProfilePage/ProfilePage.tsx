import { Box, Alert } from '@mui/material'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'

import useAuth from '../../../hooks/useAuth'
import { Profile, SnackbarAlert } from '../../../utils/types'
import ProfileForm from './ProfileForm'

const GET_PROFILE = gql`
  query Profile($accountId: ID!) {
    profile(accountId: $accountId) {
      id
      firstName
      lastName
      phone
      birthDate
      gender
      address {
        addressLine
        zip
        city
        region
        country
      }
      about
    }
  }
`
const SAVE_PROFILE = gql`
  mutation SaveProfile($profile: ProfileInput!, $profileId: ID) {
    saveProfile(profile: $profile, profileId: $profileId)
  }
`

type GetProfileQueryResult = {
  profile: Profile
}
type GetProfileQueryVariables = {
  accountId: string
}

const ProfilePage = () => {
  const { user, setUser } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [alert, setAlert] = useState<SnackbarAlert>()

  const { loading, error, data } = useQuery<
    GetProfileQueryResult,
    GetProfileQueryVariables
  >(GET_PROFILE, {
    variables: {
      accountId: user.id,
    },
  })

  const [
    saveProfile,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(SAVE_PROFILE)

  useEffect(() => {
    if (!loading && data) {
      setProfile(data.profile)
    }
  }, [loading, data])

  useEffect(() => {
    if (mutationData?.saveProfile === true) {
      setAlert({
        severity: 'success',
        message: 'Your personal information has successfully been saved',
      })
      setUser({ ...user, isLive: true })
    }
    if (mutationError) {
      setAlert({
        severity: 'error',
        message: 'Something went wrong when saving your personal information',
      })
    }
  }, [mutationData, mutationError])

  return (
    <>
      {alert && (
        <Box justifyContent="center" display="flex">
          <Alert
            sx={{
              width: '80vw',
              mt: 2,
              position: 'fixed',
              zIndex: '100',
              display: 'flex',
              opacity: 0.5,
              '&:hover': { opacity: 1 },
            }}
            variant="outlined"
            severity={alert.severity}
          >
            {alert.message}
          </Alert>
        </Box>
      )}
      {!loading && (
        <ProfileForm
          profile={profile}
          accountId={user.id}
          saveProfile={saveProfile}
        />
      )}
    </>
  )
}

export default ProfilePage
