import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

export default function JavaScriptValueOrReferenceScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              JavaScript is a pass-by-value or pass-by-reference language?
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              JavaScript's handling of function arguments can be a bit confusing
              because it behaves differently for primitive values and objects.
              The key points are:
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="bodyMedium" style={styles.text}>
              1. Primitive Types: JavaScript passes primitive types (like
              numbers, strings, booleans, null, undefined, and symbols) by
              value. This means that when you pass a primitive value to a
              function, a copy of that value is made, and changes to the
              parameter inside the function do not affect the original value.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              2. Objects (including arrays and functions): JavaScript passes
              objects by reference, but this is often described more accurately
              as passing a copy of the reference. This means that when you pass
              an object to a function, a copy of the reference to that object is
              made, and changes to the object's properties inside the function
              do affect the original object. However, if you change the
              reference itself (assign a new object to the parameter), it will
              not affect the original reference outside the function.
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
