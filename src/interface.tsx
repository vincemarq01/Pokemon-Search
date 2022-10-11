export interface pokemonType {
  index: number;
  name: string;
  order: string;
  sprites: {
    front_shiny: string;
    back_shiny: string;
  };
}
interface pokemon {
  pokemons: pokemonType[];
}
