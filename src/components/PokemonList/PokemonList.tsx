import { useEffect, useState } from "react";
import type { Pokemon } from "../../models/pokemon";
import { fetchAllPokemon } from "../../services/pokemon.service";
import PokemonCard from "../PokemonCard/PokemonCard";
import styles from "./PokemonList.module.css";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllPokemon();
      setPokemonList(data);
    };
    fetchData();
  }, []);
  return pokemonList.length === 0 ? (
    <div>No hay pokemon en la lista</div>
  ) : (
    <div className={styles.container}>
      {pokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
