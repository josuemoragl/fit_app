import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

export default function JavaScriptMapVsForEachScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Javascript Map vs ForEach
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Both map() and forEach() are array methods in JavaScript that
              allow you to iterate over the elements of an array and apply a
              function to each element. However, they have different purposes
              and behaviors.
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Main Differences
            </Text>
            <Text variant="titleMedium" style={styles.title}>
              1. Return Value:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . map(): Returns a new array containing the results of applying
              the provided function to each element of the original array.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . forEach(): Returns undefined. It is used for executing a
              function on each element of an array but does not create a new
              array.
            </Text>
            <Text variant="titleMedium" style={styles.title}>
              2. Usage
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . map(): Use map() when you need to transform elements in an array
              and get a new array with the transformed values.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . forEach(): Use forEach() when you want to execute a function for
              its side effects (e.g., logging, modifying elements in place,
              etc.) and do not need a new array.
            </Text>
          </View>
        </View>
      </ScrollView>
    </PageScaffold>
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
  title: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
  },
  explanation: {
    marginVertical: 10,
  },
});
