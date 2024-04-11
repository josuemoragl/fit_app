import React from 'react';
import {StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';
import {Avatar} from 'react-native-paper';

import {pokemonImageUrl} from '../../../../../../../../common/infrastructure/constants/pokemon_graphql_api';
import {useTheme} from '../../../../../../../../common/presentation/theme';

export default function CustomPokemonMarker({
  coordinate,
  pokemon,
  key,
  title,
}: any) {
  const theme = useTheme();
  return (
    <Marker coordinate={coordinate} key={key} title={title}>
      <Avatar.Image
        size={40}
        source={{
          uri: `${pokemonImageUrl}${pokemon!.id}.png`,
        }}
        style={[
          styles.imageStyle,
          {backgroundColor: theme.colorScheme.background.value},
        ]}
      />
    </Marker>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
