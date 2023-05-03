import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

ClipboardComponent.instructions = `
This component lets you copy and paste text from clipboard.

It now uses the expo-clipboard package:

[https://docs.expo.dev/versions/latest/sdk/clipboard/](https://docs.expo.dev/versions/latest/sdk/clipboard/)
`;

function ClipboardComponent() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          Clipboard.setStringAsync('Hello From Workshops');
        }}
        title="Copy to clipboard"
      />
      <Button
        onPress={() => {
          Clipboard.getStringAsync().then(Alert.alert);
        }}
        title="Read from clipboard"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: 'center',
  },
  pdf: {
    flex: 1,
  },
});

export default ClipboardComponent;
