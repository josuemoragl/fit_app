import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-keyword">const</span> map = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>();</br>
<span class="hljs-keyword">const</span> keyObj = {};</br>
</br>
map.<span class="hljs-title function_">set</span>(keyObj, <span class="hljs-string">'value'</span>);</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(map.<span class="hljs-title function_">get</span>(keyObj)); <span class="hljs-comment">// 'value'</span></br>
</br>
map.<span class="hljs-title function_">set</span>(<span class="hljs-string">'a'</span>, <span class="hljs-number">1</span>);</br>
map.<span class="hljs-title function_">set</span>(<span class="hljs-number">2</span>, <span class="hljs-string">'b'</span>);</br>
</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(map.<span class="hljs-property">size</span>); <span class="hljs-comment">// 3</span></br>
</br>
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> [key, value] <span class="hljs-keyword">of</span> map.<span class="hljs-title function_">entries</span>()) {</br>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(key, value);</br>
}</br>
<span class="hljs-comment">// Output:</span></br>
<span class="hljs-comment">// {} 'value'</span></br>
<span class="hljs-comment">// 'a' 1</span></br>
<span class="hljs-comment">// 2 'b'</span>`;

const explanation2 = `<span class="hljs-keyword">const</span> weakMap = <span class="hljs-keyword">new</span> <span class="hljs-title class_">WeakMap</span>();</br>
<span class="hljs-keyword">const</span> keyObj = {};</br>
</br>
weakMap.<span class="hljs-title function_">set</span>(keyObj, <span class="hljs-string">'value'</span>);</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(weakMap.<span class="hljs-title function_">get</span>(keyObj)); <span class="hljs-comment">// 'value'</span></br>
</br>
<span class="hljs-keyword">const</span> anotherKeyObj = {};</br>
weakMap.<span class="hljs-title function_">set</span>(anotherKeyObj, <span class="hljs-number">123</span>);</br>
</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(weakMap.<span class="hljs-title function_">has</span>(anotherKeyObj)); <span class="hljs-comment">// true</span></br>
</br>
<span class="hljs-comment">// If keyObj is no longer referenced elsewhere, it can be garbage collected,</span></br>
<span class="hljs-comment">// and the corresponding key-value pair in weakMap will be removed automatically.</span>`;

export default function JavaScriptWeakMapVsMapScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              WeakMap and ES6 maps
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              In JavaScript, both Map and WeakMap are key-value data structures
              introduced in ES6, but they have different characteristics and use
              cases. Here's a detailed comparison:
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="titleMedium" style={styles.title}>
              Map
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              1. Key Types:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . A Map can have keys of any type, including objects, primitives,
              and functions.
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              2. Garbage Collection:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Keys in a Map are strongly referenced. This means that as long as
              the Map exists, the keys will not be garbage collected, even if
              they are no longer referenced elsewhere in your code.
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              3. Iteration:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Map objects are iterable. You can iterate over keys, values, or
              entries using methods like map.keys(), map.values(), and
              map.entries(), as well as using the for...of loop.
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              4. Methods:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Map has methods such as set, get, delete, has, clear, and
              properties like size.
            </Text>
            <Text variant="titleMedium" style={styles.title}>
              Example of Map
            </Text>
            <CodeView html={explanation1} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleMedium" style={styles.title}>
              WeakMap
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              1. Key Types:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . A WeakMap can only have objects as keys. Primitives (like
              numbers, strings, symbols) cannot be used as keys.
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              2. Garbage Collection:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Keys in a WeakMap are weakly referenced, meaning that if there are
              no other references to the key object, the key-value pair can be
              garbage collected. This is useful for memory management in certain
              cases.
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              3. Iteration:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              WeakMap objects are not iterable. You cannot iterate over the
              keys, values, or entries of a WeakMap. This makes WeakMap suitable
              for cases where you need to manage data in a way that doesn't
              require enumeration.
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              4. Methods:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              WeakMap has methods such as set, get, delete, and has, but no
              clear method and no size property.
            </Text>
            <Text variant="titleMedium" style={styles.title}>
              Example of WeakMap
            </Text>
            <CodeView html={explanation2} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Key Differences
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              1. Key Types:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . Map: Allows keys of any type (objects, primitives, functions).
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . WeakMap: Only allows objects as keys.
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              2. Garbage Collection:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Map: Keys are strongly referenced; the key-value pairs remain in
              the map until explicitly removed.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              WeakMap: Keys are weakly referenced; key-value pairs can be
              garbage collected if there are no other references to the key.
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              3. Iteration:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Map: Iterable; supports methods like keys(), values(), entries(),
              and the for...of loop.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              WeakMap: Not iterable; does not support enumeration of keys,
              values, or entries.
            </Text>
            <Text variant="titleSmall" style={styles.title}>
              4. Use Cases:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Map: Suitable for general-purpose key-value storage where
              iteration and various key types are required.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              WeakMap: Ideal for cases where you need to associate data with
              objects without preventing those objects from being garbage
              collected, such as caching or storing metadata about objects.
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
