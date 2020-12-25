import React from 'react';
import VideoItem from './VideoItem'

const List = ({ idList, onVideoSelect }) => {
  const videos = idList.map((video) => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />
  });

  return <ul>{videos}</ul>
}

export default List
