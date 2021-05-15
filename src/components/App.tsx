import { useState, useEffect } from "react";

import "../styles/_default.css";
import "../styles/videos.css";

import SearchBar from "./SearchBar";
import List from "./VideoList";
import VideoDetail from "./VideoDetail";

/* Hooks */

import useVideo from "../hooks/useVideo";
import { IVideoInfo, defaultObject } from "../types/VideoInfo";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState<IVideoInfo>(defaultObject);
  const [id, getData] = useVideo("Javascript");

  useEffect(() => {
    setSelectedVideo(id[0]); //NOTE Antes era id[0]
  }, [id]);

  return (
    <div id="component-container">
      <SearchBar Search={getData} />
      <VideoDetail video={selectedVideo} />
      <List
        idList={id}
        onVideoSelect={(video: IVideoInfo) => {
          console.log("From video select:", video);

          setSelectedVideo(video);
          window.scrollTo(0, 0);
        }}
      />
    </div>
  );
};

export default App;
