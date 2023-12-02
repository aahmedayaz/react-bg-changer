import React , { useState } from 'react'
import ImageContainer from './components/ImageContainer'
import Navigation from './components/Navigation'


function App() {
  let [image , setImage] = useState('blue')
  return (
    <div>
      <ImageContainer name={image} />
      <Navigation setImage={setImage} />
    </div>
  )
}

export default App
