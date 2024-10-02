import React, { useState } from 'react';
import '../cssfiles/VideoPlaylist.css';
import videos from '../asserts/video.js';

const VideoPlaylist = () => {

  const [currentVideo,setCurrentVideo] = useState(0);
  const handleVideoSelect = (index) =>{
    setCurrentVideo(index);
  };

  return (
    <div className='video-playlist-container'>
      <div className="video-player">
        <video src={videos[currentVideo].url}  width="700" controls></video>
        <h3>{videos[currentVideo].title}</h3>
      </div>
      <div className="video-playlist">
        <h4>Playlist</h4>
        <ul>{videos.map((video,index)=>(
          <li key={video.id} onClick={()=>handleVideoSelect(index)} className='active'>
            <video src={video.url} width="200"></video>
            <p>{video.title}</p>
          </li>
        ))}</ul>
      </div>
    </div>
  )
}

export default VideoPlaylist

