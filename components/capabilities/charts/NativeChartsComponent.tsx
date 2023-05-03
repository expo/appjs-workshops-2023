import React from 'react';
import { StyleSheet } from 'react-native';

import { RadialChart } from '../../../modules/workshop-charts';

NativeChartsComponent.instructions = `
This component will let you use Swift charts and a charting Android Library in React Native.
`;

function NativeChartsComponent() {
  return (
    <RadialChart
      data={[
        { color: '#ff0000', percentage: 0.3 },
        { color: '#00ff00', percentage: 0.5 },
      ]}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NativeChartsComponent;
