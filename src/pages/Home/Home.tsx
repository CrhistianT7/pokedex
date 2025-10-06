import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonList from "../../components/PokemonList/PokemonList";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { fetchAllPokemon } from "../../services/pokemon.service";
import type { Pokemon } from "../../models/pokemon";

const Home = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchQuery) {
        setFilteredPokemons(pokemonList);
        return;
      }
      const filtered = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, pokemonList]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllPokemon();
      setPokemonList(data);
      setFilteredPokemons(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.actions}>
        <SearchBar onSearch={handleSearch} />
        <button onClick={() => alert("This should be a dropdown")}>
          Dropdown by type
        </button>
      </div>
      <PokemonList pokemonList={filteredPokemons} />
    </div>
  );
};

export default Home;
