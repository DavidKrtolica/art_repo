import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import useAuth from '../../../hooks/useAuth'
import { Profile } from '../../../utils/types'
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

type GetProfileQueryResult = {
  profile: Profile
}
type GetProfileQueryVariables = {
  accountId: string
}

const ProfilePage = () => {
  const { user } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)

  const { loading, error, data } = useQuery<
    GetProfileQueryResult,
    GetProfileQueryVariables
  >(GET_PROFILE, {
    variables: {
      accountId: user.id,
    },
  })

  useEffect(() => {
    if (!loading && data) {
      setProfile(data.profile)
    }
  }, [loading, data])

  return <>{!loading && <ProfileForm profile={profile} />}</>
}

export default ProfilePage
