import {
  ApolloError,
  ApolloQueryResult,
  FetchMoreQueryOptions,
  OperationVariables,
  useLazyQuery,
  useQuery,
} from '@apollo/client';

import {
  GET_POKEMONS,
  SEARCH_POKEMONS,
} from '../datasources/graphql/pokemon/queries/get_pokemons_query';
import {
  GET_POKEMON_DETAILS,
  GET_POKEMON_INFO,
} from '../datasources/graphql/pokemon/queries/pokemon_info_query';
import {Pokemon, PokemonAdapter} from '../entities/pokemon_entity';

export function useGetPokemonInfo(pokemonName: string) {
  const {loading, error, data} = useQuery(GET_POKEMON_INFO, {
    variables: {pokemonName},
  });

  return {
    loading,
    error,
    data,
  };
}

interface UseGetPokemonsInfoReturn {
  loading: boolean;
  error: ApolloError | undefined;
  data: Pokemon[];
  fetchMore: <TFetchData = any, TFetchVars extends OperationVariables = any>(
    fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
      updateQuery?: (
        previousQueryResult: any,
        options: {
          fetchMoreResult: TFetchData;
          variables: TFetchVars;
        },
      ) => any;
    },
  ) => Promise<ApolloQueryResult<TFetchData>>;
  updateQuery: any;
}

export function useGetPokemonsInfo(limit: number): UseGetPokemonsInfoReturn {
  const {loading, error, data, fetchMore, updateQuery} = useQuery(
    GET_POKEMONS,
    {
      variables: {limit: limit, offset: 0},
    },
  );

  return {
    loading,
    error,
    data: PokemonAdapter.toPokemonEntities(data),
    fetchMore,
    updateQuery,
  };
}

/*interface UseGetPokemonDetailsReturn {
  data: PokemonDetails;
}*/

export function useGetPokemonDetails(pokemonId: number) {
  const {loading, error, data} = useQuery(GET_POKEMON_DETAILS, {
    variables: {pokemonId},
  });

  return {
    error,
    loading,
    data,
  };
}

interface UseSearchPokemonsReturn {
  loading: boolean;
  error: ApolloError | undefined;
  data: Pokemon[];
  searchPokemon: any;
}

export function useSearchPokemons(): UseSearchPokemonsReturn {
  const [searchPokemon, {loading, error, data}] = useLazyQuery(SEARCH_POKEMONS);

  return {
    loading,
    error,
    data: PokemonAdapter.toPokemonEntities(data),
    searchPokemon,
  };
}
