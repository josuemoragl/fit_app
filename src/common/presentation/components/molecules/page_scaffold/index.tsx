import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {useTheme} from '../../../theme';

interface PageScaffoldProps {
  children: React.ReactNode;
}

export default function PageScaffold({children}: PageScaffoldProps) {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {backgroundColor: theme.colorScheme.background.value},
      ]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  safeArea: {
    backgroundColor: '#212121',
    flex: 1,
  },
});
