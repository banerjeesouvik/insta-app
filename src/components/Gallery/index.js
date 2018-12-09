import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Gallery = ({ images }) => (
  <div className='gallery'>
    {images.map(img => (
      <div className='image'>
        <img src={img.Image} alt='img' />
      </div>
    ))}
  </div>
)

Gallery.propTypes = {
  images: PropTypes.shape([
    {
      Image: PropTypes.string.isRequired,
    },
  ]).isRequired,
}

export default Gallery
