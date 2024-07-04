import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import CodeView from '../../../../../../../../common/presentation/components/molecules/code_view';
import PageScaffold from '../../../../../../../../common/presentation/components/molecules/page_scaffold';

const explanation1 = `<span class="hljs-comment">// Opens a new window</span></br>
<span class="hljs-keyword">let</span> newWindow = <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">open</span>(<span class="hljs-string">'https://www.example.com'</span>, <span class="hljs-string">'_blank'</span>);</br>
</br>
<span class="hljs-comment">// Closes the new window</span></br>
newWindow.<span class="hljs-title function_">close</span>();
`;

const explanation2 = `<span class="hljs-comment">// Inside a worker script</span></br>
self.<span class="hljs-title function_">close</span>();
`;

const explanation3 = `<span class="hljs-keyword">const</span> eventSource = <span class="hljs-keyword">new</span> <span class="hljs-title class_">EventSource</span>(<span class="hljs-string">'https://example.com/events'</span>);</br>
</br>
<span class="hljs-comment">// Closes the EventSource connection</span></br>
eventSource.<span class="hljs-title function_">close</span>();
`;

const explanation4 = `<span class="hljs-keyword">const</span> socket = <span class="hljs-keyword">new</span> <span class="hljs-title class_">WebSocket</span>(<span class="hljs-string">'wss://example.com/socket'</span>);</br>
</br>
<span class="hljs-comment">// Closes the WebSocket connection</span></br>
socket.<span class="hljs-title function_">close</span>();
`;

const explanation5 = `<span class="hljs-keyword">const</span> request = indexedDB.<span class="hljs-title function_">open</span>(<span class="hljs-string">'MyDatabase'</span>);</br>
</br>
request.<span class="hljs-property">onsuccess</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) {</br>
  <span class="hljs-keyword">const</span> db = event.<span class="hljs-property">target</span>.<span class="hljs-property">result</span>;</br>
  </br>
  <span class="hljs-comment">// Perform database operations...</span></br>
</br>
  <span class="hljs-comment">// Closes the database</span></br>
  db.<span class="hljs-title function_">close</span>();</br>
};</br>
`;

export default function JavaScriptCloseFunctionScreen() {
  return (
    <PageScaffold>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.explanation}>
            <Text variant="titleLarge" style={styles.title}>
              JavaScript close() function
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              The close() function in JavaScript is used to close certain types
              of objects or contexts, primarily related to web APIs. Here are
              the most common uses of the close() function:
            </Text>

            <Text variant="titleLarge" style={styles.title}>
              1. Closing a Window or Tab
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              When a function is defined within another function, it forms a
              closure. The inner function has access to:
            </Text>
            <CodeView html={explanation1} />
            <Text variant="titleLarge" style={styles.title}>
              2. Closing Web Workers
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              In the context of Web Workers, the close() method is used to
              terminate a worker from within itself.
            </Text>
            <CodeView html={explanation2} />
            <Text variant="titleLarge" style={styles.title}>
              3. Closing Server-Sent Events (EventSource)
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              The close() method is used to close an EventSource connection,
              which is used for receiving server-sent events.
            </Text>
            <CodeView html={explanation3} />
            <Text variant="titleLarge" style={styles.title}>
              4. Closing WebSockets
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              WebSockets have a close() method to close the connection to the
              server.
            </Text>
            <CodeView html={explanation4} />
            <Text variant="titleLarge" style={styles.title}>
              5. Closing IndexedDB Transactions
            </Text>
            <Text variant="bodyMedium" style={styles.text}>
              The close() method is used to close an open database in IndexedDB.
            </Text>
            <CodeView html={explanation5} />
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
