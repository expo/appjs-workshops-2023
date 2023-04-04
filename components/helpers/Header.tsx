import React from 'react';
import {View, ViewProps, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome 👋</Text>
        <Text style={styles.subtitle}>
          This is a sample application showcasing some capabilities possible in
          React Native.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Header;
