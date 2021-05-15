import { useEffect, useState } from "react";
import youtube from "../api/youtube";
import { IVideoInfo, defaultObject } from "../types/VideoInfo";

type getData = (term: string) => void;

const useVideos = (
  defaultSearchTerm: string
): [id: IVideoInfo[], getData: getData] => {
  const [id, setId] = useState<IVideoInfo[]>([defaultObject]);

  useEffect(() => {
    getData(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const getData = async (term: string) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setId(response.data.items);
  };

  return [id, getData];
};

export default useVideos;
