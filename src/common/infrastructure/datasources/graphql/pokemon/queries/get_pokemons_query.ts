import {gql} from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetPokemons($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      height
      weight
      order
      pokemon_species_id
    }
  }
`;

export const SEARCH_POKEMONS = gql`
  query GetPokemons($limit: Int!, $searchTerm: String) {
    pokemon_v2_pokemon(limit: $limit, where: {name: {_ilike: $searchTerm}}) {
      id
      name
      height
      weight
      order
      pokemon_species_id
    }
  }
`;
