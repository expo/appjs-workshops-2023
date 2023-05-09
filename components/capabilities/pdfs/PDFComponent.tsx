import React from 'react';
import { StyleSheet, View } from 'react-native';
import Pdf from 'react-native-pdf';

PDFComponent.instructions = `
This component renders a PDF file.

It uses this library:

[https://www.npmjs.com/package/react-native-pdf](https://www.npmjs.com/package/react-native-pdf)
`;

const source = {
  uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
};

function PDFComponent() {
  return (
    <View style={styles.container} pointerEvents="none">
      <Pdf source={source} style={styles.pdf} singlePage trustAllCerts={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  pdf: {
    flex: 1,
  },
});

export default PDFComponent;
