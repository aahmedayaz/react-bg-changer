import React from 'react'

const ImageContainer = ({name}) => {
  return (
    <img
        src={`/${name}.jpg`}
        alt='image on screen'
        className='w-[300px] h-[200px] object-cover'
    />
  )
}

export default ImageContainer