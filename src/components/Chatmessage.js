import React from 'react'

function Chatmessage({id,mess}) {
  return (
    <div className='m-2 border-b-2'>
        <h1>{id}</h1>
        <span>{mess}</span>
    </div>
  )
}

export default Chatmessage