import { pokeApi } from '../api';
import { Pokemon, PokemonData } from '../interfaces';

export const getPokemonInfo = async (
  nameOrId: string
): Promise<PokemonData> => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
