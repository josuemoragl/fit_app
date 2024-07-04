import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-keyword">function</span> <span class="hljs-title function_">outerFunction</span>(<span class="hljs-params"></span>) {</br>
   &emsp;<span class="hljs-keyword">let</span> outerVariable = <span class="hljs-string">'I am outside!'</span>;</br>
</br>
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">innerFunction</span>(<span class="hljs-params"></span>) {</br>
     &emsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(outerVariable); <span class="hljs-comment">// Accessing the outer function's variable</span></br>
  }</br>
</br>
  <span class="hljs-keyword">return</span> innerFunction;
}

<span class="hljs-keyword">const</span> closure = <span class="hljs-title function_">outerFunction</span>();
<span class="hljs-title function_">closure</span>(); <span class="hljs-comment">// Logs: 'I am outside!'</span>
</code>;`;

const explanation2 = `<span class="hljs-keyword">function</span> <span class="hljs-title function_">createCounter</span>(<span class="hljs-params"></span>) {</br>
 &emsp; <span class="hljs-keyword">let</span> count = <span class="hljs-number">0</span>;</br>
</br>
  &emsp;&emsp;<span class="hljs-keyword">return</span> {</br>
    &emsp;&emsp;&emsp;<span class="hljs-attr">increment</span>: <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {</br>
      &emsp;&emsp;&emsp;&emsp;count++;</br>
      &emsp;&emsp;&emsp;&emsp;<span class="hljs-keyword">return</span> count;</br>
   &emsp;&emsp; },</br>
    </br>
   &emsp;&emsp; <span class="hljs-attr">decrement</span>: <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {</br>
      &emsp;&emsp;&emsp;&emsp;count--;</br>
     &emsp; &emsp;&emsp;&emsp;<span class="hljs-keyword">return</span> count;</br>
   &emsp; &emsp;&emsp;}</br>
  &emsp;&emsp;};</br>
}</br>
</br>
<span class="hljs-keyword">const</span> counter = <span class="hljs-title function_">createCounter</span>();</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(counter.<span class="hljs-title function_">increment</span>()); <span class="hljs-comment">// 1</span></br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(counter.<span class="hljs-title function_">increment</span>()); <span class="hljs-comment">// 2</span></br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(counter.<span class="hljs-title function_">decrement</span>()); <span class="hljs-comment">// 1</span>`;

const explanation3 = `<span class="hljs-keyword">function</span> <span class="hljs-title function_">createAdder</span>(<span class="hljs-params">x</span>) {</br>
  &emsp;<span class="hljs-keyword">return</span> <span class="hljs-keyword">function</span>(<span class="hljs-params">y</span>) {</br>
    &emsp;&emsp;<span class="hljs-keyword">return</span> x + y;</br>
  &emsp;};</br>
}</br>
</br>
<span class="hljs-keyword">const</span> add5 = <span class="hljs-title function_">createAdder</span>(<span class="hljs-number">5</span>);</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">add5</span>(<span class="hljs-number">2</span>)); <span class="hljs-comment">// 7</span></br>
</br>
<span class="hljs-keyword">const</span> add10 = <span class="hljs-title function_">createAdder</span>(<span class="hljs-number">10</span>);</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">add10</span>(<span class="hljs-number">2</span>)); <span class="hljs-comment">// 12</span>
`;

export default function JavaScriptClosuresScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              JavaScript Closures
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Closures are a fundamental concept in JavaScript that allow
              functions to have "private" variables and maintain access to these
              variables even after the outer function has completed execution.
              Closures are created when a function is defined within another
              function, and the inner function maintains access to the outer
              function's variables.
            </Text>

            <Text variant="titleLarge" style={styles.title}>
              How Closures Work
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              When a function is defined within another function, it forms a
              closure. The inner function has access to:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              1. Its own local variables.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              2. The outer function's variables.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              3. Global variables.
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              Even after the outer function has finished executing, the inner
              function can still access and modify the outer function's
              variables.
            </Text>
            <CodeView html={explanation1} />
            <Text variant="titleMedium" style={styles.title}>
              In this example:
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              . outerFunction defines a local variable outerVariable and an
              inner function innerFunction.
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              . innerFunction has access to outerVariable.
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              . When outerFunction is called, it returns innerFunction.
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              . The returned function (closure) still has access to
              outerVariable, even though outerFunction has finished executing.
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Practical Uses of Closures
            </Text>
            <Text variant="titleMedium" style={styles.title}>
              Data Privacy
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              Closures can be used to create private variables that cannot be
              accessed directly from outside the function.
            </Text>
            <CodeView html={explanation2} />
            <Text variant="bodyMedium" style={styles.title}>
              In this example, count is a private variable. It cannot be
              accessed directly from outside the createCounter function, but can
              be manipulated through the returned object's methods.
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Function Factories
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              Closures can be used to create functions with preset parameters.
            </Text>
            <CodeView html={explanation3} />
            <Text variant="bodyMedium" style={styles.title}>
              Here, createAdder returns a function that adds a specific number
              (x) to its argument (y). The x value is preserved in the closure.
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Key Points
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              . Scope Chain: A closure keeps references to its outer function's
              scope chain, allowing access to outer variables even after the
              outer function has returned.
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              . JavaScript's garbage collector knows about closures and will
              retain the variables used by the closure as long as the closure is
              accessible.
            </Text>
            <Text variant="bodyMedium" style={styles.title}>
              Use Cases: Closures are commonly used for data privacy, function
              factories, maintaining state in asynchronous functions, and
              creating callback functions with specific context.
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
