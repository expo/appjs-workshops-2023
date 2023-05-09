import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getValue from 'react-native-get-values';

StringsComponent.instructions = `
We can read strings from \`Info.plist\` AND \`strings.xml\` files and display them in the UI.
`;

const KEY = 'OurConfigKey';

function StringsComponent() {
  const [{ error, value }, setRes] = React.useState<{
    value?: string;
    error?: string;
  }>({});
  useEffect(() => {
    getValue(KEY)
      .then((v) => {
        setRes({ value: v });
      })
      .catch((e) => {
        setRes({ error: e.message });
      });
  }, []);

  return (
    <View style={styles.container}>
      {value && <Text style={styles.text}>✅ {value}</Text>}
      {error && <Text style={styles.error}>❌ {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  error: {
    fontSize: 14,
    color: 'red',
  },
});

export default StringsComponent;
