import PokemonCard from "../PokemonCard/PokemonCard";
import styles from "./PokemonList.module.css";
import type { PokemonListProps } from "./PokemonList.types";

const PokemonList: React.FC<PokemonListProps> = (props) => {
  const { pokemonList } = props;

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
