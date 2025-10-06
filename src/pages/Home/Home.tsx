import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonList from "../../components/PokemonList/PokemonList";

const Home = () => {
  return (
    <div>
      <div className="actions">
        <SearchBar />
        <button>Dropdown by type</button>
      </div>
      <PokemonList />
    </div>
  );
};

export default Home;
