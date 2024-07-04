import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-keyword">const</span> person = {</br>
  &ensp;&ensp;<span class="hljs-attr">name</span>: <span class="hljs-string">'John'</span>,</br>
 &ensp; <span class="hljs-attr">greet</span>: <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {</br>
    &ensp; <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'Hello, '</span> + <span class="hljs-variable language_">this</span>.<span class="hljs-property">name</span>);</br>
  &ensp;&ensp;}</br>
};</br>
</br>
<span class="hljs-keyword">const</span> greet = person.<span class="hljs-property">greet</span>;</br>
<span class="hljs-title function_">greet</span>(); <span class="hljs-comment">// Hello, undefined (or error in strict mode)</span></br>
</br>
<span class="hljs-keyword">const</span> boundGreet = person.<span class="hljs-property">greet</span>.<span class="hljs-title function_">bind</span>(person);
<span class="hljs-title function_">boundGreet</span>(); <span class="hljs-comment">// Hello, John</span>
`;

const explanation2 = `<span class="hljs-keyword">function</span> <span class="hljs-title function_">Button</span>(<span class="hljs-params">label</span>) {</br>
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">label</span> = label;</br>
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">onClick</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {</br>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">label</span>);</br>
  }.<span class="hljs-title function_">bind</span>(<span class="hljs-variable language_">this</span>); <span class="hljs-comment">// Ensure 'this' refers to the Button instance</span></br>
}
</br>
</br>
<span class="hljs-keyword">const</span> button = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Button</span>(<span class="hljs-string">'Submit'</span>);
<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">'button'</span>).<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">'click'</span>, button.<span class="hljs-property">onClick</span>); <span class="hljs-comment">// Outputs: Submit</span>`;

export default function JavaScriptBindMethodcreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              JavaScript, bind() Method
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              In JavaScript, the bind() method is used to create a new function
              that, when called, has its this keyword set to a specified value,
              with a given sequence of arguments preceding any provided when the
              new function is called. This is especially useful for ensuring
              that a function has a specific context (this value) when executed,
              regardless of how or where it is called.
            </Text>
            <CodeView html={explanation1} />
            <View style={styles.explanation}>
              <Text variant="bodyMedium" style={styles.text}>
                In this example, greet loses its context when assigned to a new
                variable and executed independently. Using bind(), we create
                boundGreet which retains the context of person.
              </Text>
            </View>

            <Text variant="titleMedium" style={styles.title}>
              Use with Event Listeners
            </Text>
            <CodeView html={explanation2} />
            <Text variant="bodyMedium" style={styles.text}>
              In this example, using .bind(this) ensures that this.label inside
              onClick refers to the Button instance, regardless of how or where
              onClick is invoked.
            </Text>
            <View style={styles.explanation}>
              <Text variant="bodyMedium" style={styles.text}>
                The bind() method is a powerful tool in JavaScript for
                controlling the context (this) of functions and enabling partial
                function application. It helps avoid common pitfalls with the
                this keyword, especially in callback functions and event
                handlers.
              </Text>
            </View>
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
