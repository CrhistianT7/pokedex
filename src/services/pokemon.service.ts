import axiosClient from "../config/axios";

export const fetchAllPokemon = async () => {
  try {
    const response = await axiosClient.get("/pokemon?limit=151");
    return response.data.results;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error fetching all Pokémon: " + error.message);
    }
    throw new Error("Error fetching all Pokémon: Unknown error");
  }
};

export const fetchPokemonDetailById = async (id: number) => {
  try {
    const response = await axiosClient.get(`/pokemon/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error fetching Pokémon detail: " + error.message);
    }
  }
};

export const fetchPokemonTypeDetails = async (typeId: number) => {
  try {
    const response = await axiosClient.get(`/type/${typeId}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error fetching Pokémon detail: " + error.message);
    }
  }
};
