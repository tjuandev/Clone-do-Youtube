import React, { useState, useEffect } from 'react';

import '../styles/_default.css';
import '../styles/videos.css';

import SearchBar from './SearchBar';
import List from './VideoList';
import VideoDetail from './VideoDetail';

/* Hooks */

import useVideo from '../hooks/useVideo';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [id, getData] = useVideo('Programação');

  useEffect(() => {
    setSelectedVideo(id[0]);
  }, [id]);

  return (
    <div id="component-container">
      <SearchBar Search={getData} />
      <VideoDetail video={selectedVideo} />
      <List idList={id} onVideoSelect={(video) => { setSelectedVideo(video); window.scrollTo(0, 0) }} />
    </div>
  )
}

export default App