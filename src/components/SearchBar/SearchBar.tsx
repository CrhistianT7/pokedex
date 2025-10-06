import { useState } from "react";
import type { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { onSearch } = props;

  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.trim());
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search Pokémon by name"
        value={query}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBar;
