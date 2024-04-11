export class Pokemon {
  id: number;
  height: number;
  name: string;
  order: number;
  pokemonSpeciesId: number;

  constructor({
    id,
    height,
    name,
    order,
    pokemonSpeciesId,
  }: {
    id: number;
    height: number;
    name: string;
    order: number;
    pokemonSpeciesId: number;
  }) {
    this.id = id;
    this.height = height;
    this.name = name;
    this.order = order;
    this.pokemonSpeciesId = pokemonSpeciesId;
  }
}

interface PokemonResponse {
  __typename: string;
  height: number;
  id: number;
  name: string;
  order: 95;
  pokemon_species_id: number;
}

interface PokemonDataResponse {
  pokemon_v2_pokemon: PokemonResponse[];
}

export class PokemonAdapter {
  static toPokemonEntity = (response: PokemonResponse) =>
    new Pokemon({
      id: response.id,
      height: response.height,
      name: response.name,
      order: response.order,
      pokemonSpeciesId: response.pokemon_species_id,
    });

  static toPokemonEntities = (response?: PokemonDataResponse): Pokemon[] => {
    if (
      response &&
      response.pokemon_v2_pokemon &&
      Array.isArray(response.pokemon_v2_pokemon)
    ) {
      return response.pokemon_v2_pokemon.map(pokemon => {
        return PokemonAdapter.toPokemonEntity(pokemon);
      });
    }
    return [];
  };
}
