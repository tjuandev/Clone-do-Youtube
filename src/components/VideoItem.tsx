interface IVideoItem {
  onVideoSelect: (video: any) => void;
  video: any;
}

const VideoItem = ({ onVideoSelect, video }: IVideoItem) => {
  return (
    <div>
      <div id="video-container" onClick={() => onVideoSelect(video)}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <h4>{video.snippet.title}</h4>
      </div>
      <hr />
    </div>
  );
};

export default VideoItem;
