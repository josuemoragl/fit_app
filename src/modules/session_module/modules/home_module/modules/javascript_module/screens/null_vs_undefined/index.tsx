import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-keyword">let</span> a;</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(a); <span class="hljs-comment">// undefined</span></br>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">example</span>(<span class="hljs-params">x</span>) {</br>
  &emsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x); <span class="hljs-comment">// undefined if no argument is passed</span></br>
&emsp;}
</br><span class="hljs-title function_">example</span>();</br>
</br>
<span class="hljs-keyword">const</span> obj = {};</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj.<span class="hljs-property">nonExistentProperty</span>); <span class="hljs-comment">// undefined</span>
`;

const explanation2 = `<span class="hljs-keyword">let</span> b = <span class="hljs-literal">null</span>;</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(b); <span class="hljs-comment">// null</span></br>
</br>
<span class="hljs-keyword">let</span> c = <span class="hljs-literal">null</span>;</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(c === <span class="hljs-literal">null</span>); <span class="hljs-comment">// true</span></br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(c == <span class="hljs-literal">undefined</span>); <span class="hljs-comment">// true</span></br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(c === <span class="hljs-literal">undefined</span>); <span class="hljs-comment">// false</span>`;

export default function JavaScriptNullVsUndefinedScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Javascript null vs undefined
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              In JavaScript, null and undefined are two distinct types
              representing the absence of a value or a non-initialized state.
              Despite their similarities, they have different meanings and uses.
              Here's a detailed comparison:
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="titleMedium" style={styles.title}>
              undefined
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              1. Type: undefined is a primitive type.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              2. Default Value: A variable that has been declared but not
              assigned a value is undefined.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              3. Function Parameters: If a function is called with fewer
              arguments than declared parameters, the missing parameters are
              undefined.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              4. Object Properties: If you try to access a non-existing property
              of an object, the result is undefined.
            </Text>
            <Text variant="titleMedium" style={styles.title}>
              Example
            </Text>
            <CodeView html={explanation1} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleMedium" style={styles.title}>
              null
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              1. Type: null is also a primitive type, but it is an intentional
              absence of any object value.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              2. Explicit Assignment: null is explicitly assigned to a variable
              to indicate that it has no value.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              3. Type Coercion: null is loosely equal to undefined (i.e., null
              == undefined is true), but they are not strictly equal (null ===
              undefined is false).
            </Text>
            <Text variant="titleMedium" style={styles.title}>
              Example
            </Text>
            <CodeView html={explanation2} />
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
