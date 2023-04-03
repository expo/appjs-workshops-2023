import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </SafeAreaView>
  );
}

export default App;
