import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closesidemenu } from "../util/appSlice";
import Commentcontainer from "./Commentcontainer";
import Livechat from "./Livechat";
const data = [
  { 
      user: "user1",
      main: "hi first comment",
      replies: null 
  },
  { 
      user: "user2",
      main: "hi second comment",
      replies: null
  },
  { 
      user: "user3",
      main: "hi third comment",
      replies: 
        { 
          user: "varun",
          main: "hi third nested first comment",
          replies: 
            { 
              user: "random",
              main: "hi third nested second comment",
              replies: null
          },
          
      },
      
  },
  { 
      user: "user4",
      main: "hi fourth comment",
      replies: null
  },

];
function Watchpage() {
  const dispatch = useDispatch();
  const [videoid] = useSearchParams();
  useEffect(()=>{
    dispatch(closesidemenu());
  },[]);
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full border-2">
      <iframe
        className="ml-20 mt-5"
        width="950"
        height="600"
        src={"https://www.youtube.com/embed/" + videoid.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <Livechat/>
      </div>
      <Commentcontainer data={data}/>
    </div>
  );
}

export default Watchpage;
