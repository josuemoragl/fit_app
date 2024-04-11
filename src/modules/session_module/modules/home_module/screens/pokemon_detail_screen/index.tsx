import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {SegmentedButtons} from 'react-native-paper';

import Header from '../../../../../../common/presentation/components/molecules/appbar';

import {PokemonDetailsView} from './views/pokemon_details_view';
import RandomMapView from './views/pokemon_map_view';

function PokemonDetailScreen() {
  const [value, setValue] = React.useState('');
  const pagerViewRef = useRef<any>();
  return (
    <>
      <Header title="Pokemon Details" />
      <SafeAreaView style={styles.pagerView}>
        <SegmentedButtons
          value={value}
          onValueChange={(val: string) => {
            pagerViewRef?.current?.setPageWithoutAnimation(
              val === 'details' ? 0 : 1,
            );
            setValue(val);
          }}
          buttons={[
            {
              value: 'details',
              label: 'Details',
            },
            {
              value: 'map',
              label: 'Map',
            },
          ]}
        />
        <PagerView ref={pagerViewRef} style={styles.pagerView} initialPage={0}>
          <View key="1">
            <PokemonDetailsView />
          </View>
          <View key="2">
            <RandomMapView />
          </View>
        </PagerView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default PokemonDetailScreen;
