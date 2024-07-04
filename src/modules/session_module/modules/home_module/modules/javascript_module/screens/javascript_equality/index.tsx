import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-number">1</span> == <span class="hljs-string">'1'</span>; <span class="hljs-comment">// true</br></span>
  <span class="hljs-number">0</span> == <span class="hljs-literal">false</span>; <span class="hljs-comment">// true</br></span>
  <span class="hljs-literal">null</span> == <span class="hljs-literal">undefined</span>; <span class="hljs-comment">// true</span>`;

const explanation2 = `<span class="hljs-number">1</span> === <span class="hljs-string">'1'</span>; <span class="hljs-comment">// false</br></span>
<span class="hljs-number">0</span> === <span class="hljs-literal">false</span>; <span class="hljs-comment">// false</br></span>
<span class="hljs-literal">null</span> === <span class="hljs-literal">undefined</span>; <span class="hljs-comment">// false</span>`;

export default function JavaScriptEqualityScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Equality Operator ==
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              The == operator compares two values ​​to check if they are equal.
              Before doing the comparison, JavaScript tries to convert both
              values ​​to a common type. This is called loose equality. Due to
              this conversion, unexpected results may occur. For example:
            </Text>
            <CodeView html={explanation1} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Strict Equality Operator ===
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              The === operator compares both the value and the type of the two
              operands. This is called strict equality and does not perform any
              type conversion. Both values ​​must be of the same type and have
              the same value for the comparison to be true. For example:
            </Text>
            <CodeView html={explanation2} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Key Differences
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Type Conversion: == converts data types to attempt a comparison
              while === does not.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Precision: === is more precise because it does not perform
              conversions, which helps avoid unexpected errors.
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
