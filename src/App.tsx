import { useEffect } from "react";
import { fetchAllPokemon } from "./services/pokemon.service";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      fetchAllPokemon();
    };
    fetchData();
  }, []);
  return (
    <>
      <div>Hola</div>
    </>
  );
}

export default App;
