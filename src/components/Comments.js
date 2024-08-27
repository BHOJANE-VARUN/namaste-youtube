import React from 'react'
import { PROFILE_LOGO_URL } from '../util/Constants'

function Comments({data}) {
    console.log(data);
    
  return (
    <div className='ml-5'>
    <div className="flex w-full my-3 h-fit ml-3 bg-gray-300">
      <img src={PROFILE_LOGO_URL} alt="profile pic" className="w-10 h-10 mt-1 ml-1"/>
      <div className='ml-3'>
        <h1>{data?.user}</h1>
        <span>{data?.main}</span>
      </div>
     
    </div>
    {data.replies && <Comments data={data?.replies} />}
    </div>
  )
}

export default Comments