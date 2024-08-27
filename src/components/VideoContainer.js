import React, { useEffect, useSyncExternalStore } from 'react'
import { YOUTUBE_API_VIDOES } from '../util/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addvidoes } from '../util/appSlice';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Topmenu from './Topmenu';

export const VideoContainer = () => {
  const dispatch = useDispatch();
  const getdata = async ()=>{
    const raw = await fetch(YOUTUBE_API_VIDOES);
    const data = await raw.json();
    dispatch(addvidoes(data));
  }
  useEffect(()=>{
    getdata();
  },[])
  const viddata = useSelector(store => store.app.vidoes);
  return (
    <div>
      <Topmenu/>
    <div className='flex flex-wrap h-fit mt-5'>  
      {viddata?.items?.map((vid)=><Link to={("/watch?v=" + vid.id)}> <VideoCard key={vid.etag} vidoe={vid}/></Link>)}
    </div>
    </div>
  )
}
