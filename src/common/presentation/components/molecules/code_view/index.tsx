import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import RenderHtml from 'react-native-render-html';

const classStyles = {
  main: {
    backgroundColor: '#0D0D0D',
    color: 'white',
    padding: 20,
  },
  'hljs-number': {
    color: '#df3079',
  },
  'hljs-string': {
    color: '#00a67d',
  },
  'hljs-comment': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  'hljs-literal': {
    color: '#2e95d3',
  },
  'hljs-keyword': {
    color: '#2e95d3',
  },
  'hljs-variable': {
    color: '#df3079',
  },
  'hljs-title': {
    color: '#f22c3d',
  },
};

const tagsStyles = {
  span: {
    lineHeight: 22,
  },
};

export default function CodeView({html}: {html: string}) {
  const {width} = useWindowDimensions();

  const source = {
    html: `
      <style>
        .main {
            background-color: "#0D0D0D"
        }
      </style>
      <div class="main">
      <code class="!whitespace-pre hljs language-javascript">
      ${html}
    </code>
      </div>
      `,
  };

  return (
    <View style={styles.viewWrapper}>
      <View style={styles.codeLabelWrapper}>
        <Text style={styles.codeLabelText}>javascript</Text>
      </View>
      <RenderHtml
        contentWidth={width}
        source={source}
        classesStyles={classStyles}
        baseStyle={styles.htmlBaseStyle}
        tagsStyles={tagsStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    marginTop: 10,
  },
  htmlBaseStyle: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
  },
  codeLabelWrapper: {
    backgroundColor: '#2F2F2F',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  codeLabelText: {
    color: '#CDCDCD',
  },
});
