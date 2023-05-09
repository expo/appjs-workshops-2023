import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Mock() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚠️</Text>
      <Text style={styles.title}>This is a module mock.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fac0c2',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9c0022',
  },
});
export default Mock;
