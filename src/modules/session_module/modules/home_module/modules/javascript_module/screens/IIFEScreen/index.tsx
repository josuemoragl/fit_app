import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `(<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {</br>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'This function runs immediately!'</span>);
})();`;

export default function JavaScriptIIFEScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              IIFE (Immediately Invoked Function Expression)
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              An IIFE (Immediately Invoked Function Expression) is a function in
              JavaScript that is executed immediately after it is defined. The
              primary purpose of an IIFE is to create a new scope for variables
              and functions, thus avoiding polluting the global scope. Here is
              the basic syntax of an IIFE:
            </Text>
            <CodeView html={explanation1} />
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
