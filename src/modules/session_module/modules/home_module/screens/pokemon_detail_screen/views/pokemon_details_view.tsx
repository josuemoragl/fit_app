import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useAtomValue} from 'jotai';

import {pokemonImageUrl} from '../../../../../../../common/infrastructure/constants/pokemon_graphql_api';
import selectedPokemonAtom from '../../../../../../../common/infrastructure/state/atoms/pokedex_atom';
import {getPokemonOrder} from '../../../../../../../common/infrastructure/utils/string';

export function PokemonDetailsView() {
  const pokemon = useAtomValue(selectedPokemonAtom);
  return (
    <ScrollView style={styles.content}>
      <View>
        <Image
          source={{
            uri: `${pokemonImageUrl}${pokemon!.id}.png`,
          }}
          style={styles.imageStyle}
        />
        <Text variant="headlineLarge">{pokemon?.name}</Text>
        <Text>Nº{getPokemonOrder(pokemon!.order)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
