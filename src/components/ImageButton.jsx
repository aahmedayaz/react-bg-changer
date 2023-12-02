import React from 'react'

const ImageButton = ({text, onClick}) => {
  return (
    <button 
        onClick={onClick}
        className={`
            px-[20px] py-[5px] rounded h-auto shadow-lg
            ${text === 'Yellow' && 'bg-yellow-400'}
            ${text === 'Blue' && 'bg-blue-400'}
            ${text === 'Green' && 'bg-green-400'}
            ${text === 'Red' && 'bg-red-400'}
            ${text === 'Orange' && 'bg-orange-400'}
            active:scale-95
        `}
    >{text}</button>
  )
}

export default ImageButton