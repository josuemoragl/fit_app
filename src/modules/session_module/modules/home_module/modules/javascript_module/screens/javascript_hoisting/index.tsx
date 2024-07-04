import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x); <span class="hljs-comment">// undefined</span></br>
<span class="hljs-keyword">var</span> x = <span class="hljs-number">5</span>;</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x); <span class="hljs-comment">// 5</span>

`;

const explanation2 = `<span class="hljs-keyword">var</span> x;</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x); <span class="hljs-comment">// undefined</span></br>
x = <span class="hljs-number">5</span>;</br>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(x); <span class="hljs-comment">// 5</span>
`;

const explanation3 = `<span class="hljs-title function_">sayHello</span>();</br>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">sayHello</span>(<span class="hljs-params"></span>) {</br>
  &emsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'Hello!'</span>);</br>
}
`;

const explanation4 = `<span class="hljs-keyword">function</span> <span class="hljs-title function_">sayHello</span>(<span class="hljs-params"></span>) {</br>
  &emsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'Hello!'</span>);</br>
}</br>
</br>
<span class="hljs-title function_">sayHello</span>();
`;

const explanation5 = `<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(y); <span class="hljs-comment">// ReferenceError: Cannot access 'y' before initialization</span></br>
<span class="hljs-keyword">let</span> y = <span class="hljs-number">10</span>;
`;

const explanation6 = `<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(z); <span class="hljs-comment">// ReferenceError: Cannot access 'z' before initialization</span></br>
<span class="hljs-keyword">const</span> z = <span class="hljs-number">20</span>;
`;

const explanation7 = `<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(foo); <span class="hljs-comment">// undefined</span></br>
<span class="hljs-title function_">foo</span>(); <span class="hljs-comment">// TypeError: foo is not a function</span></br>
</br>
<span class="hljs-keyword">var</span> foo = <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {</br>
  &emsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'Hello from foo'</span>);</br>
};`;

export default function JavaScriptHoistingScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Javascript Hoisting
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Hoisting is a JavaScript mechanism where variables and function
              declarations are moved to the top of their containing scope
              (global or function) during the compile phase. This means that you
              can use variables and functions before you declare them in your
              code. However, only the declarations are hoisted, not the
              initializations. objects.
            </Text>
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Variable Hoisting
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Variables declared with var are hoisted to the top of their
              function or global scope. However, their initializations are not
              hoisted. This can lead to unexpected behavior if not well
              understood.
            </Text>

            <Text variant="titleMedium" style={styles.title}>
              Example with var
            </Text>
            <CodeView html={explanation1} />
            <Text variant="titleMedium" style={styles.text}>
              This is interpreted as:
            </Text>
            <CodeView html={explanation2} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Function Hoisting
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Function declarations are hoisted completely, including their
              definitions. This allows you to call a function before it is
              declared in the code.
            </Text>

            <Text variant="titleMedium" style={styles.title}>
              Example with Function Declarations
            </Text>
            <CodeView html={explanation3} />
            <Text variant="bodyMedium" style={styles.text}>
              This works because the function declaration is hoisted to the top:
            </Text>
            <CodeView html={explanation4} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Variables with let and const
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Variables declared with let and const are also hoisted, but they
              are not initialized. Accessing them before their declaration
              results in a ReferenceError because they are in a "temporal dead
              zone" from the start of the block until the declaration is
              encountered.
            </Text>

            <Text variant="titleMedium" style={styles.title}>
              Example with let and const
            </Text>
            <CodeView html={explanation5} />
            <CodeView html={explanation6} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Function Expressions
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Function expressions are not hoisted. This includes arrow
              functions and anonymous functions assigned to variables. The
              variable itself is hoisted (if declared with var), but the
              assignment happens where it is defined in the code.
            </Text>

            <Text variant="titleMedium" style={styles.title}>
              Example with Function Expressions
            </Text>
            <CodeView html={explanation7} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Summary
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . var Declarations: Hoisted to the top of their scope and
              initialized with undefined.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . Function Declarations: Hoisted completely, including their
              definitions.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . let and const Declarations: Hoisted but not initialized, causing
              a temporal dead zone until the declaration is encountered.
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              . Function Expressions: Only the variable declaration is hoisted
              (if var), but the assignment is not.
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
