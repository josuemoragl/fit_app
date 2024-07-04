import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `{</br>
  &emsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x); <span class="hljs-comment">// ReferenceError: Cannot access 'x' before initialization</span></br>
 &emsp; <span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;</br>
 &emsp; <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x); <span class="hljs-comment">// 5</span></br>
}
`;

export default function JavaScriptTemporaryDeadZoneScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Javascript Temporary Dead Zone (TDZ)
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              The Temporary Dead Zone (TDZ) is a behavior in ES6 (ECMAScript
              2015) that affects variables declared with let and const. The TDZ
              refers to the period of time during which these variables exist
              but are not yet initialized, making any attempt to access them
              before their declaration result in a ReferenceError.
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Understanding the TDZ
            </Text>
            <Text variant="titleMedium" style={styles.title}>
              When JavaScript code is executed, it is processed in two phases:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              1. Creation Phase: The JavaScript engine creates the scope, hoists
              declarations, and sets up memory for variables and functions.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              2. Execution Phase: The actual execution of the code happens.
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              During the creation phase, variables declared with let and const
              are hoisted to the top of their scope but are not initialized.
              They remain in the TDZ until the execution phase reaches the line
              where they are declared.
            </Text>
            <Text variant="titleLarge" style={styles.title}>
              Example of TDZ
            </Text>
            <CodeView html={explanation1} />
            <Text variant="titleLarge" style={styles.title}>
              Why TDZ Exists
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              The TDZ helps catch common errors and encourages better coding
              practices by ensuring variables are not accessed before they are
              explicitly declared and initialized.
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
