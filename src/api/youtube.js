import axios from 'axios';

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: process.env.REACT_APP_KEY_BORN,
    type: "video"
  }
})

/* AIzaSyDaCPeCWbthx5Ph-6-KzSustiF0B2XAp9w */