import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {useAtomValue} from 'jotai';
import {capitalize} from 'lodash';

import selectedPokemonAtom from '../../../../../../../common/infrastructure/state/atoms/pokedex_atom';
import CustomPokemonMarker from '../components/custom_pokemon_marker';

const RandomMapView = () => {
  const pokemon = useAtomValue(selectedPokemonAtom);
  const generateRandomCoordinates = (region: any) => {
    const {latitude, longitude, latitudeDelta, longitudeDelta} = region;
    const lat = latitude + (Math.random() - 0.5) * latitudeDelta;
    const lng = longitude + (Math.random() - 0.5) * longitudeDelta;
    return {latitude: lat, longitude: lng};
  };

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const randomMarkers = Array.from({length: 10}, (_, index) => {
    const coordinates = generateRandomCoordinates(initialRegion);
    return (
      <CustomPokemonMarker
        key={index}
        coordinate={coordinates}
        title={`Hi! I am ${capitalize(pokemon?.name)}`}
        pokemon={pokemon}
      />
    );
  });

  return (
    <View style={styles.flexible}>
      <MapView style={styles.flexible} initialRegion={initialRegion}>
        {randomMarkers}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexible: {
    flex: 1,
  },
});

export default RandomMapView;
