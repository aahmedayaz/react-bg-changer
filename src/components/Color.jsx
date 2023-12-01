import React, { useState } from 'react'

function Color({name}) {
    return (
        <button 
            onClick={() => {
                document.body.className = `bg-${name}-300`
            }}
            className={`
                px-[20px] py-[5px] rounded h-auto shadow-lg
                ${name === 'yellow' && 'bg-yellow-400'}
                ${name === 'blue' && 'bg-blue-400'}
                ${name === 'green' && 'bg-green-400'}
                ${name === 'red' && 'bg-red-400'}
                ${name === 'orange' && 'bg-orange-400'}
                active:scale-95
            `}
        >
            {name}
        </button>
    )
}

export default Color