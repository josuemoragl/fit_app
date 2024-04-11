import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {useAtom} from 'jotai';

import {useNavigation} from '@react-navigation/native';

import {Pokemon} from '../../../../../../../common/infrastructure/entities/pokemon_entity';
import selectedPokemonAtom from '../../../../../../../common/infrastructure/state/atoms/pokedex_atom';
import {
  capitalize,
  getPokemonOrder,
} from '../../../../../../../common/infrastructure/utils/string';
import {homeRoutes} from '../../../navigation/home_routes';

interface PokemonListItemProps {
  pokemon: Pokemon;
  index: number;
}

export default function PokemonListItem(
  props: PokemonListItemProps,
): React.ReactElement {
  const [_, setSelectedPokemon] = useAtom(selectedPokemonAtom);
  const navigation = useNavigation<any>();
  const {pokemon} = props;

  return (
    <Card
      style={styles.cardMain}
      onPress={() => {
        setSelectedPokemon(pokemon);
        navigation.navigate(homeRoutes.pokemonDetailScreen);
      }}>
      <Card.Content>
        <View style={styles.cardContentMain}>
          <View style={styles.flexible}>
            <Text>Nº{getPokemonOrder(pokemon.order)}</Text>
            <Text variant="headlineLarge">{capitalize(pokemon.name)}</Text>
          </View>
          <View>
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              }}
              style={styles.imageStyle}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardMain: {
    marginBottom: 20,
  },
  cardContentMain: {
    flexDirection: 'row',
  },
  flexible: {
    flex: 1,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
