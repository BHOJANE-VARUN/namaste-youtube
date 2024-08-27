import React from 'react'

function Sidemenu() {
  return (
        <div className='w-[4000px] relative'>
          <div className='fixed w-[15%] h-full border-2'>
            <div className='flex flex-col border-b-2'>
            <button className='my-2 font-bold text-lg'>Home</button>
            <button className='my-2 font-bold text-lg'>Shorts</button>
            <button className='my-2 font-bold text-lg'>Subscriptions</button>
            </div>
            <div className='flex flex-col border-b-2'>
            <span className='text-2xl my-2'>You {">"}</span>
            <button className='my-2 font-bold text-lg'>Your channel</button>
            <button className='my-2 font-bold text-lg'>History</button>
            <button className='my-2 font-bold text-lg'>Playlists</button>
            <button className='my-2 font-bold text-lg'>Your videos</button>
            <button className='my-2 font-bold text-lg'>Watch Later</button>
            <button className='my-2 font-bold text-lg'>Liked videos</button>
            </div>
            <div className='flex flex-col border-b-2'>
            <button className='my-2 font-bold text-lg'>Settings</button>
            <button className='my-2 font-bold text-lg'>Report history</button>
            <button className='my-2 font-bold text-lg'>Help</button>
            <button className='my-2 font-bold text-lg'>Send feedback</button>
            </div>
        </div>
  </div>
  )
}

export default Sidemenu