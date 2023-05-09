import HealthKit, {
  HKAuthorizationRequestStatus,
  HKQuantityTypeIdentifier,
} from '@kingstinct/react-native-healthkit';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const { useHealthkitAuthorization, useMostRecentQuantitySample } = HealthKit;

HealthKitComponent.instructions = `
This component will let you use HealthKit in React Native.

It uses this library:
[https://github.com/Kingstinct/react-native-healthkit](https://github.com/Kingstinct/react-native-healthkit)

Follow these steps to add sample data:
[https://developer.apple.com/documentation/healthkit/samples/accessing_sample_data_in_the_simulator](https://developer.apple.com/documentation/healthkit/samples/accessing_sample_data_in_the_simulator)


`;

function HealthKitData() {
  const bodyTemperature = useMostRecentQuantitySample(HKQuantityTypeIdentifier.bodyTemperature);

  return (
    <Text style={styles.container}>
      <Text style={styles.value}>
        🌡️ {bodyTemperature?.quantity}
        {bodyTemperature?.unit}
        {'\n'}
      </Text>
      {JSON.stringify({
        bodyTemperature,
      })}
    </Text>
  );
}

function HealthKitComponent() {
  const [authorizationStatus, requestAuthorization] = useHealthkitAuthorization([
    HKQuantityTypeIdentifier.bodyTemperature,
  ]);
  if (authorizationStatus === HKAuthorizationRequestStatus.unnecessary) {
    return <HealthKitData />;
  }

  return (
    <View style={styles.container}>
      <Button onPress={requestAuthorization} title="Request HealthKit Authorization" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 32,
  },
});

export default HealthKitComponent;
