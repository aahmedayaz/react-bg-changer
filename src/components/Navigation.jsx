import React from 'react'
import ImageButton from './ImageButton'

const Navigation = ({setImage}) => {
  return (
    <div>
        <ImageButton text={'Blue'} onClick={() => setImage('blue')} />
        <ImageButton text={'Green'} onClick={() => setImage('green')} />
        <ImageButton text={'Orange'} onClick={() => setImage('orange')} />
        <ImageButton text={'Red'} onClick={() => setImage('red')} />
        <ImageButton text={'Yellow'} onClick={() => setImage('yellow')} />
    </div>
  )
}

export default Navigation