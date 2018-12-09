import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const ProfileCard = ({
  userName, avatar, followers, posts, following, bio,
}) => (
  <div className='profile-card'>
    <div className='profile-avatar' style={{ backgroundImage: `url(${avatar})` }} />
    <div className='profile-details'>
      <div className='posts'>
        <span>
          <b>{posts}</b>
        </span>
        <span>posts</span>
      </div>
      <div className='followers'>
        <span>
          <b>{followers}</b>
        </span>
        <span>followers</span>
      </div>
      <div className='following'>
        <span>
          <b>{following}</b>
        </span>
        <span>following</span>
      </div>
      <div className='follow-btn'>Follow</div>
    </div>
    <div className='profile-name'>{userName}</div>
    <div className='profile-desc'>{bio}</div>
  </div>
)

ProfileCard.propTypes = {
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  posts: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
  bio: PropTypes.string,
}

ProfileCard.defaultProps = {
  posts: 0,
  followers: 0,
  following: 0,
  bio: '',
}

export default ProfileCard
