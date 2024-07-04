import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-keyword">const</span> a = <span class="hljs-number">10</span>;</br>
a = <span class="hljs-number">20</span>; <span class="hljs-comment">// Error: Assignment to constant variable.</span></br>

<span class="hljs-keyword">const</span> person = { <span class="hljs-attr">name</span>: <span class="hljs-string">'John'</span> };</br>
person.<span class="hljs-property">name</span> = <span class="hljs-string">'Doe'</span>; <span class="hljs-comment">// This is allowed</span></br>
person = { <span class="hljs-attr">name</span>: <span class="hljs-string">'Jane'</span> }; <span class="hljs-comment">// Error: Assignment to constant variable.</span>
`;

const explanation2 = `<span class="hljs-keyword">const</span> person = { <span class="hljs-attr">name</span>: <span class="hljs-string">'John'</span> };</br>
<span class="hljs-title class_">Object</span>.<span class="hljs-title function_">freeze</span>(person);</br>

person.<span class="hljs-property">name</span> = <span class="hljs-string">'Doe'</span>; <span class="hljs-comment">// No error, but the change will not take effect</span></br>
person.<span class="hljs-property">age</span> = <span class="hljs-number">30</span>; <span class="hljs-comment">// No error, but the new property will not be added</span></br>

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(person); <span class="hljs-comment">// { name: 'John' }</span>`;

const explanation3 = `<span class="hljs-keyword">const</span> person = {</br>
  &emsp;<span class="hljs-attr">name</span>: <span class="hljs-string">'John'</span>,</br>
  &emsp;<span class="hljs-attr">address</span>: {</br>
   &emsp; <span class="hljs-attr">city</span>: <span class="hljs-string">'New York'</span></br>
  &emsp;}</br>
};</br>
</br>
<span class="hljs-title class_">Object</span>.<span class="hljs-title function_">freeze</span>(person);</br>

person.<span class="hljs-property">address</span>.<span class="hljs-property">city</span> = <span class="hljs-string">'Los Angeles'</span>; <span class="hljs-comment">// This change is allowed</span></br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(person.<span class="hljs-property">address</span>.<span class="hljs-property">city</span>); <span class="hljs-comment">// 'Los Angeles'</span>`;

export default function JavaScriptConstVsObjectFreezeScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              const vs Object.freeze()
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              In JavaScript, both const and Object.freeze() are used to create
              immutable variables or objects, but they work in different ways
              and serve different purposes.
            </Text>

            <Text variant="titleMedium" style={styles.title}>
              `const`
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              const is used to declare variables that are block-scoped and
              cannot be reassigned. However, if the variable is an object or an
              array, the properties of the object or the elements of the array
              can still be changed.
            </Text>

            <Text variant="titleMedium" style={styles.title}>
              Example with const
            </Text>
            <CodeView html={explanation1} />

            <Text variant="bodyMedium" style={styles.text}>
              Variables: A const variable cannot be reassigned.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Objects/Arrays: The properties or elements can still be modified.
            </Text>
          </View>
          <Text variant="titleMedium" style={styles.title}>
            `Object.freeze()`
          </Text>
          <Text variant="bodyMedium" style={styles.text}>
            Object.freeze() is used to make an object immutable. Once an object
            is frozen, you cannot add, delete, or modify any of its properties.
          </Text>

          <Text variant="titleMedium" style={styles.title}>
            Example with Object.freeze()
          </Text>
          <CodeView html={explanation2} />
          <Text variant="titleMedium" style={styles.title}>
            Shallow Freeze
          </Text>
          <Text variant="bodyMedium" style={styles.text}>
            Shallow Freeze: Object.freeze() performs a shallow freeze, meaning
            it only affects the immediate properties of the object. Nested
            objects are not frozen.
          </Text>
          <Text variant="titleMedium" style={styles.title}>
            Example with Nested Objects
          </Text>
          <CodeView html={explanation3} />
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
