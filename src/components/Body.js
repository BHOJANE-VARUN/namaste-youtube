import React from 'react'
import Sidemenu from './Sidemenu'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Heading from './Heading.js'

function Body() {
  const ismenuopen = useSelector(store => store.app.ismenuopen);
  return (
    <div>
      <Heading/>
    <div className='flex w-full'>
        {ismenuopen && <Sidemenu/>}
        <Outlet/>
    </div>
    </div>
  )
}

export default Body