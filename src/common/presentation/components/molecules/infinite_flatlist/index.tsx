import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

interface InfiniteFlatListProps {
  data: any;
  renderItem: ListRenderItem<any>;
  onEndReached?: (info: {distanceFromEnd: number}) => void;
}

function InfiniteFlatList(props: InfiniteFlatListProps): React.ReactNode {
  const {data, renderItem, onEndReached} = props;
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReached={onEndReached} // Load more data when reaching the end of the list
      onEndReachedThreshold={0.1} // Load more data when 90% of the list has been scrolled
    />
  );
}

export default InfiniteFlatList;
