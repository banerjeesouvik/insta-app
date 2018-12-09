import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Header = ({ userName }) => (
  <header>
    <span className='logo'>Insta</span>
    <span className='profile-name'>{userName}</span>
  </header>
)

Header.propTypes = {
  userName: PropTypes.string,
}

Header.defaultProps = {
  userName: '',
}

export default Header
