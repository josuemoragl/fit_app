import {gql} from '@apollo/client';

export const GET_POKEMON_INFO = gql`
  query GetPokemonInfo($name: String!) {
    pokemon(name: $name) {
      name
      abilities {
        ability {
          name
        }
      }
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($pokemonId: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $pokemonId}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemonabilities {
        name
      }
      pokemon_v2_pokemonmoves {
        move {
          name
        }
      }
      pokemon_v2_pokemontypes {
        type {
          name
        }
      }
      sprites {
        front_default
      }
    }
  }
`;
