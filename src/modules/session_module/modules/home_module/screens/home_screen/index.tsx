import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {debounce} from 'lodash';

import {useSearchPokemons} from '../../../../../../common/infrastructure/hooks/use_pokemon_queries';

import PokemonList from './components/pokemon_list';

function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const {searchPokemon, data} = useSearchPokemons();

  const delayedSearch = debounce(query => {
    searchPokemon({variables: {searchTerm: query, limit: 10}});
  }, 1500);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    delayedSearch(query);
  };

  return (
    <SafeAreaView style={styles.flexible}>
      <View style={styles.spacer} />
      <View style={styles.searchbarWrapper}>
        <Searchbar
          placeholder="Search pokemon by name"
          onChangeText={handleSearch}
          value={searchQuery}
          icon={'abacus'}
        />
      </View>
      <View style={styles.spacer} />
      <PokemonList filteredPokemons={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexible: {
    flex: 1,
  },
  spacer: {
    height: 20,
  },
  searchbarWrapper: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
