import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-keyword">function</span>* <span class="hljs-title function_">simpleGenerator</span>(<span class="hljs-params"></span>) {</br>
  &emsp; <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'Start'</span>);</br>
 &emsp;  <span class="hljs-keyword">yield</span> <span class="hljs-number">1</span>;</br>
  &emsp; <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'Middle'</span>);</br>
  &emsp; <span class="hljs-keyword">yield</span> <span class="hljs-number">2</span>;</br>
  &emsp; <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'End'</span>);</br>
  &emsp; <span class="hljs-keyword">return</span> <span class="hljs-number">3</span>;</br>
}
  </br>
  </br>

<span class="hljs-keyword">const</span> gen = <span class="hljs-title function_">simpleGenerator</span>();</br>

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(gen.<span class="hljs-title function_">next</span>()); <span class="hljs-comment">// { value: 1, done: false }</span></br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(gen.<span class="hljs-title function_">next</span>()); <span class="hljs-comment">// { value: 2, done: false }</span></br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(gen.<span class="hljs-title function_">next</span>()); <span class="hljs-comment">// { value: 3, done: true }</span></br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(gen.<span class="hljs-title function_">next</span>()); <span class="hljs-comment">// { value: undefined, done: true }</span>
`;

const explanation2 = `<span class="hljs-keyword">function</span>* <span class="hljs-title function_">numberGenerator</span>(<span class="hljs-params"></span>) {</br>
  &emsp;<span class="hljs-keyword">yield</span> <span class="hljs-number">1</span>;</br>
  &emsp;<span class="hljs-keyword">yield</span> <span class="hljs-number">2</span>;</br>
  &emsp;<span class="hljs-keyword">yield</span> <span class="hljs-number">3</span>;</br>
}
</br>
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> num <span class="hljs-keyword">of</span> <span class="hljs-title function_">numberGenerator</span>()) {</br>
   &emsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(num); <span class="hljs-comment">// Logs 1, 2, 3</span></br>
}
`;

const explanation3 = `<span class="hljs-keyword">function</span>* <span class="hljs-title function_">asyncGenerator</span>(<span class="hljs-params"></span>) {</br>
  &emsp;<span class="hljs-keyword">const</span> data = <span class="hljs-keyword">yield</span> <span class="hljs-title function_">fetchData</span>();</br>
  &emsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(data);</br>
}</br>

<span class="hljs-keyword">const</span> gen = <span class="hljs-title function_">asyncGenerator</span>();</br>
<span class="hljs-keyword">const</span> promise = gen.<span class="hljs-title function_">next</span>().<span class="hljs-property">value</span>;</br>

promise.<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> gen.<span class="hljs-title function_">next</span>(data));</br>

&emsp;<span class="hljs-keyword">function</span> <span class="hljs-title function_">fetchData</span>(<span class="hljs-params"></span>) {</br>
  &emsp;&emsp;<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {</br>
   &emsp; &emsp;<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {</br>
      &emsp;&emsp;&emsp;&emsp;<span class="hljs-title function_">resolve</span>(<span class="hljs-string">'Async Data'</span>);</br>
    }, <span class="hljs-number">1000</span>);</br>
  });</br>
}
`;

export default function JavaScriptGeneratorsScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Javascript Generators
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Generators in JavaScript are a special type of function that can
              be paused and resumed, allowing you to manage the function's
              execution state. They are useful for handling asynchronous
              programming, iterating over sequences, and creating iterable
              objects.
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Key Characteristics of Generators
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              1. Defined Using function* Syntax: Generators are declared with
              the function* keyword.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              2. Yielding Values: The yield keyword is used within the generator
              function to pause its execution and return a value.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              3. Iterator Protocol: When a generator function is called, it
              returns an iterator object. This object conforms to the iterator
              protocol and can be controlled using the next(), return(), and
              throw() methods.
            </Text>
            <Text variant="titleLarge" style={styles.title}>
              Example
            </Text>
            <CodeView html={explanation1} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Advanced Usage
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              Iterating Over a Generator
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              You can use a generator in a loop to iterate over its yielded
              values.
            </Text>
            <CodeView html={explanation2} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Handling Asynchronous Operations
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Generators can be used to handle asynchronous operations when
              combined with a runner function or a library like co.
            </Text>
            <CodeView html={explanation3} />
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
