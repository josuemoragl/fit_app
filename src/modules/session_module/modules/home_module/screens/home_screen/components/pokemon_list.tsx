import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import {Pokemon} from '../../../../../../../common/infrastructure/entities/pokemon_entity';
import {useGetPokemonsInfo} from '../../../../../../../common/infrastructure/hooks/use_pokemon_queries';

import PokemonListItem from './pokemon_list_item';

export default function PokemonList({
  filteredPokemons,
}: {
  filteredPokemons: Pokemon[];
}): React.ReactNode {
  const limit = 20;
  const {loading, data, fetchMore} = useGetPokemonsInfo(limit);

  const loadMorePokemons = () => {
    fetchMore({
      variables: {
        limit: data.length + limit, // Increase the limit to fetch more data
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return Object.assign({}, prev, {
          pokemon_v2_pokemon: [...fetchMoreResult.pokemon_v2_pokemon],
        });
      },
    });
  };

  if (loading) {
    return <ActivityIndicator animating={true} />;
  }

  return (
    <FlatList
      style={styles.flatlistStyle}
      data={filteredPokemons.length > 0 ? filteredPokemons : data}
      renderItem={({item, index}) => (
        <PokemonListItem pokemon={item} index={index} />
      )}
      onEndReached={loadMorePokemons} // Load more data when reaching the end of the list
      onEndReachedThreshold={0.1}
    />
  );
}

const styles = StyleSheet.create({
  flatlistStyle: {
    paddingHorizontal: 10,
  },
});
