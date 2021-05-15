export interface IVideoInfo {
  etag: string;
  id: {
    videoId: string;
  };
  kind: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      [keys: string]: { url: string };
    };
  };
}

export const defaultObject = {
  etag: "",
  id: { videoId: "" },
  kind: "",
  snippet: {
    title: "",
    description: "",
    thumbnails: { medium: { url: "" } },
  },
};
