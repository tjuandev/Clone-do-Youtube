import { useEffect, useState } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [id, setId] = useState([]);

  useEffect(() => { getData(defaultSearchTerm) }, [defaultSearchTerm]);

  const getData = async (term) => { // Putting as a async function, it helps you to receive the data correctly
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    setId(response.data.items);
  };

  return [id, getData];
};

export default useVideos;