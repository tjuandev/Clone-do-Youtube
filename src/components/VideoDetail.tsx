import { IVideoInfo } from "../types/VideoInfo";

interface VideoDetailProps {
  video: IVideoInfo;
}

const VideoDetail = ({ video }: VideoDetailProps) => {
  if (video.id.videoId === "") {
    return <p>Um projeto de Thiago Juan. IG - @tjuan.dev</p>;
  }

  return (
    <div id="newVideo">
      <iframe
        width="650"
        height="365"
        key={video.id.videoId}
        title="Video-Shown"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
      <hr />
    </div>
  );
};

export default VideoDetail;
