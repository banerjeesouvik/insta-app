import React from 'react'
import PropTypes from 'prop-types'
import ProfileCard from './ProfileCard'
import Gallery from '../Gallery'

import './style.css'

const Profile = ({ profileObj }) => {
  const { images } = profileObj
  return (
    <div className='profile'>
      <ProfileCard {...profileObj} />
      <Gallery images={images} />
    </div>
  )
}

Profile.propTypes = {
  profileObj: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
}

export default Profile
