import { IVideoInfo } from "../types/VideoInfo";
import VideoItem from "./VideoItem";

interface IListProps {
  idList: IVideoInfo[];
  onVideoSelect: (video: any) => void;
}

const List = ({ idList, onVideoSelect }: IListProps) => {
  const videos = idList.map((video: any) => {
    return (
      <VideoItem
        video={video}
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
      />
    );
  });

  return <ul>{videos}</ul>;
};

export default List;
