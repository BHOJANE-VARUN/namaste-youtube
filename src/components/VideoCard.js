import React from "react";
import { useSelector } from "react-redux";

function VideoCard({vidoe}) {
    function timeDifference(givenDate) {
        const now = new Date();
        const diffInMs = now - new Date(givenDate);
    
        // Calculate differences
        const diffInSeconds = Math.floor(diffInMs / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInMonths = Math.floor(diffInDays / 30); // Approximation for months
        const diffInYears = Math.floor(diffInMonths / 12);
    
        // Determine the appropriate format to return
        if (diffInSeconds < 60) {
            return `${diffInSeconds} seconds ago`;
        } else if (diffInMinutes < 60) {
            return `${diffInMinutes} minutes ago`;
        } else if (diffInHours < 24) {
            return `${diffInHours} hours ago`;
        } else if (diffInDays < 30) {
            return `${diffInDays} days ago`;
        } else if (diffInMonths < 12) {
            return `${diffInMonths} months ago`;
        } else {
            return `${diffInYears} years ago`;
        }
    }
    function formatViews(views) {
        if (views < 1000) {
            return `${views} views`;
        } else if (views >= 1000 && views < 1_000_000) {
            return `${(views / 1000).toFixed(1)}K views`;
        } else if (views >= 1_000_000 && views < 1_000_000_000) {
            return `${(views / 1_000_000).toFixed(1)}M views`;
        } else if (views >= 1_000_000_000) {
            return `${(views / 1_000_000_000).toFixed(1)}B views`;
        }
    }
    const ismenuopen = useSelector(store => store.app.ismenuopen);
  return (
    <div className={(ismenuopen?"m-4 w-96 h-fit shadow-lg border-0":" m-6 w-80 h-fit shadow-lg border-0 border-black")}>
      <img src={vidoe?.snippet?.thumbnails?.medium?.url} alt="thumbnail" className={(ismenuopen?"w-96 h-56 rounded-xl":"w-80 h-40 rounded-xl")}/>
      <div className="px-2">
        <h1>{vidoe?.snippet?.title}</h1>
        <div>
            <span>{formatViews(vidoe?.statistics?.viewCount)+ " • " + timeDifference(vidoe?.snippet?.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
