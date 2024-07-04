import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {List, Searchbar} from 'react-native-paper';
import {debounce} from 'lodash';

import {useNavigation} from '@react-navigation/native';

import {homeRoutes} from '../../../../navigation/home_routes';

import {navigationItems} from './navigation_items';

export default function JavaScriptMainScreen() {
  const navigation = useNavigation<any>();
  const [filteredItems, setFilteredItems] = useState([]);
  return (
    <FlatList
      data={filteredItems.length > 0 ? filteredItems : navigationItems}
      ListHeaderComponent={
        <JavaScriptQuestionsSearch
          items={navigationItems}
          setFilteredItems={setFilteredItems}
        />
      }
      renderItem={({item, index}) => (
        <List.Item
          title={item.label}
          key={`javascript-navigation-item-${index}`}
          onPress={() =>
            navigation.navigate(homeRoutes.javascriptExplanations, {
              screen: item.navigate,
            })
          }
        />
      )}
    />
  );
}

function JavaScriptQuestionsSearch({
  items,
  setFilteredItems,
}: {
  items: any[];
  setFilteredItems: any;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const {searchQuestion} = useSearchJavaScriptQuestion(items);
  const delayedSearch = debounce(query => {
    const result = searchQuestion({searchTerm: query});
    setFilteredItems(result);
  }, 1500);

  const handleSearch = (query: string) => {
    console.log({query});
    setSearchQuery(query);
    delayedSearch(query);
  };
  return (
    <View style={styles.searchWrapper}>
      <Searchbar
        placeholder="Search question by name"
        onChangeText={handleSearch}
        value={searchQuery}
        icon={'abacus'}
      />
    </View>
  );
}

function useSearchJavaScriptQuestion(items: any[]) {
  function normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  const searchQuestion = ({searchTerm = ''}: {searchTerm: string}) => {
    const normalizedSearch = normalizeString(searchTerm.toLowerCase());
    console.log({normalizedSearch});
    return items.filter(item =>
      normalizeString(item.label.toLowerCase()).includes(normalizedSearch),
    );
  };

  return {
    searchQuestion,
  };
}

const styles = StyleSheet.create({
  searchWrapper: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
