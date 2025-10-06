import { useEffect, useState } from "react";
import { fetchPokemonDetailById } from "../../services/pokemon.service";
import { useParams } from "react-router-dom";
import type { PokemonDetail } from "../../models/pokemon";
import styles from "./PokemonDetails.module.css";

const PokemonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [podekemonDetails, setPokemonDetails] = useState<PokemonDetail>(
    {} as PokemonDetail
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonDetailById(Number(id));
      console.log(data);
      setPokemonDetails(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.container}>
      <div>
        <div>
          {podekemonDetails?.name} #{id}
          <img
            src={podekemonDetails?.sprites?.front_default}
            alt={podekemonDetails.name}
          />
        </div>
        <h3>Habilities</h3>
        {podekemonDetails?.abilities?.map((ability) => (
          <div key={ability.ability.name}>{ability.ability.name}</div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetails;
