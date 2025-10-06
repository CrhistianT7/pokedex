import type { PokemonCardProps } from "./PokemonCard.types";
import styles from "./PokemonCard.module.css";
import { getIdFromUrl } from "../utils/getIdFromUrl";
import { useEffect, useState } from "react";
import { fetchPokemonDetailById } from "../../services/pokemon.service";
import type { PokemonDetail } from "../../models/pokemon";
import { useNavigate } from "react-router-dom";

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const { pokemon } = props;
  const { name, url } = pokemon;

  const [podekemonDetails, setPokemonDetails] = useState<PokemonDetail>(
    {} as PokemonDetail
  );
  const [loading, setLoading] = useState<boolean>(false);

  const id = getIdFromUrl(url);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchPokemonDetailById(id);
      setPokemonDetails(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate(`/pokemon/${id}`);
      }}
    >
      <p className={styles.name}>
        #{id} {name}
      </p>
      {loading ? (
        "loading..."
      ) : (
        <img src={podekemonDetails?.sprites?.front_default} alt={name} />
      )}
    </div>
  );
};

export default PokemonCard;
