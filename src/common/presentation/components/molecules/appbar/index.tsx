import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Appbar} from 'react-native-paper';

interface HeaderProps {
  title?: string;
}

export default function Header(props: HeaderProps): React.ReactElement {
  const navigation = useNavigation();
  return (
    <Appbar.Header dark={false}>
      {navigation.canGoBack() ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
}
