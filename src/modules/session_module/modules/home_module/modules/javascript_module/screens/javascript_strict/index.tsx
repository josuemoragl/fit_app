import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-meta">"use strict"</span>;</br>
</br>
<span class="hljs-comment">// All code in this file runs in strict mode</span></br>
<span class="hljs-keyword">let</span> x = <span class="hljs-number">3.14</span>;
;`;

const explanation2 = `<span class="hljs-keyword">function</span> <span class="hljs-title function_">myFunction</span>(<span class="hljs-params"></span>) {</br>
 &emsp; <span class="hljs-string">"use strict"</span>;</br>
 &emsp; <span class="hljs-comment">// Code here runs in strict mode</span></br>
  &emsp;<span class="hljs-keyword">let</span> y = <span class="hljs-number">3.14</span>;</br>
}</br>
</br>
<span class="hljs-comment">// Code here does not run in strict mode</span></br>
<span class="hljs-keyword">let</span> z = <span class="hljs-number">3.14</span>;
`;

const explanation3 = `<span class="hljs-meta">"use strict"</span>;</br>
x = <span class="hljs-number">3.14</span>; <span class="hljs-comment">// ReferenceError: x is not defined</span></br>
`;

const explanation4 = `<span class="hljs-meta">"use strict"</span>;</br>
myVar = <span class="hljs-number">17</span>; <span class="hljs-comment">// ReferenceError: myVar is not defined</span></br>
`;

const explanation5 = `<span class="hljs-meta">"use strict"</span>;</br>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">f</span>(<span class="hljs-params"></span>) {</br>
  &emsp; <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>; <span class="hljs-comment">// undefined</span></br>
}
`;

const explanation6 = `<span class="hljs-meta">"use strict"</span>;</br>
 &emsp;<span class="hljs-keyword">function</span> <span class="hljs-title function_">sum</span>(<span class="hljs-params">a, a, c</span>) { <span class="hljs-comment">// SyntaxError: Duplicate parameter name not allowed in this context</span></br>
  &emsp; <span class="hljs-keyword">return</span> a + a + c;</br>
}`;

const explanation7 = `<span class="hljs-meta">"use strict"</span>;</br>
<span class="hljs-keyword">let</span> sum = <span class="hljs-number">015</span> + <span class="hljs-number">197</span>; <span class="hljs-comment">// SyntaxError: Octal literals are not allowed in strict mode.</span></br>
`;

const explanation8 = `<span class="hljs-meta">"use strict"</span>;</br>
<span class="hljs-keyword">let</span> x = <span class="hljs-number">10</span>;</br>
<span class="hljs-keyword">delete</span> x; <span class="hljs-comment">// SyntaxError: Delete of an unqualified identifier in strict mode.</span>
`;

const explanation9 = `<span class="hljs-meta">"use strict"</span>;
<span class="hljs-keyword">with</span> (<span class="hljs-title class_">Math</span>) { <span class="hljs-comment">// SyntaxError: Strict mode code may not include a with statement</span>
  <span class="hljs-keyword">let</span> x = <span class="hljs-title function_">cos</span>(<span class="hljs-number">2</span>);
}`;

export default function JavaScriptStrictScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              JavaScript strict directives
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              JavaScript's strict mode, introduced in ECMAScript 5, is a way to
              opt into a stricter version of JavaScript. It helps you write more
              secure and reliable code by catching common coding mistakes and
              preventing potentially unsafe actions. You can enable strict mode
              by adding the directive "use strict"; at the beginning of a script
              or a function.
            </Text>

            <Text variant="titleLarge" style={styles.title}>
              Enabling Strict Mode
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              1. Global Scope:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Add "use strict"; at the beginning of a script file to enable
              strict mode for the entire script.
            </Text>
            <CodeView html={explanation1} />
            <Text variant="titleMedium" style={styles.text}>
              2. Function Scope:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Add "use strict"; at the beginning of a function to enable strict
              mode only within that function.
            </Text>
            <CodeView html={explanation2} />
          </View>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              Benefits of Strict Mode
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Strict mode makes several changes to normal JavaScript semantics:
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              1. Eliminates Some Silent Errors:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Some JavaScript errors that are silent (fail silently) in normal
              mode will throw errors in strict mode, making debugging easier.
            </Text>
            <CodeView html={explanation3} />
            <Text variant="titleMedium" style={styles.text}>
              2. Prevents Accidental Globals:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              In strict mode, assigning a value to an undeclared variable throws
              an error instead of creating a global variable.
            </Text>
            <CodeView html={explanation4} />
            <Text variant="titleMedium" style={styles.text}>
              3. Fixes this in Functions:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              In strict mode, this remains undefined in functions that are
              called without an owner object, instead of being implicitly
              converted to the global object.
            </Text>
            <CodeView html={explanation5} />
            <Text variant="titleMedium" style={styles.text}>
              4. Disallows Duplicates:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Strict mode disallows duplicate parameter names in functions.
            </Text>
            <CodeView html={explanation6} />
            <Text variant="titleMedium" style={styles.text}>
              5. Throws Error on Octal Syntax:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              In strict mode, octal literals (numbers starting with 0) are not
              allowed.
            </Text>
            <CodeView html={explanation7} />
            <Text variant="titleMedium" style={styles.text}>
              6. Prevents Deleting Variables, Functions, or Arguments:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              Strict mode disallows deleting variables, functions, or arguments.
            </Text>
            <CodeView html={explanation8} />
            <Text variant="titleMedium" style={styles.text}>
              7. Disallows with Statement:
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              The with statement is not allowed in strict mode.
            </Text>
            <CodeView html={explanation9} />
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
