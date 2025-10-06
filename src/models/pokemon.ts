export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  sprites: {
    front_default: string;
  };
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  name: string;
}
