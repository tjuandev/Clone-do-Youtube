import React, { useState } from 'react';
import '../styles/searchbar.css'

const SearchBar = ({ Search }) => {
  const [term, setTerm] = useState('');

  const onSubmitRechange = (event) => { // On form Submit
    event.preventDefault();
    Search(term);
  };

  const updateValue = (event) => { setTerm(event.target.value) };

  return (
    <form onSubmit={onSubmitRechange} >
      <input type="text" id="searchVideos" placeholder="Procure por um vídeo" value={term} onChange={updateValue} />
    </form>
  )

};

export default SearchBar 