import { useState, ChangeEvent, FormEvent } from "react";
import "../styles/searchbar.css";

interface SearchBarProps {
  Search: (term: string) => void;
}

const SearchBar = ({ Search }: SearchBarProps) => {
  const [term, setTerm] = useState("");

  const onSubmitRechange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Search(term);
  };

  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <form onSubmit={(e) => onSubmitRechange(e)}>
      <input
        type="text"
        id="searchVideos"
        placeholder="Procure por um vídeo"
        value={term}
        onChange={updateValue}
      />
    </form>
  );
};

export default SearchBar;
