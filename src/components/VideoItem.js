import React from 'react';

const VideoItem = ({ onVideoSelect, video }) => {

  return (
    <div>
      <div id="video-container" onClick={() => onVideoSelect(video)}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <h4>{video.snippet.title}</h4>
      </div>
      <hr />
    </div>

  )
}

export default VideoItem