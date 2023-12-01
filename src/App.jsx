import { useState } from 'react'
import Color from './components/Color'

function App() {
  return (
    <div className='py-[40px] w-full h-screen flex flex-row items-end justify-evenly'>
      <Color name="yellow"/>
      <Color name="blue"/>
      <Color name="green"/>
      <Color name="red"/>
      <Color name="orange"/>
    </div>
  )
}

export default App
