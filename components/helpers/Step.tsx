import React from 'react';
import { View, ViewProps, Text, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';
interface StepProps extends ViewProps {
  label: string;
  number: number;
  component?: React.ComponentType;
}

function Step(props: StepProps) {
  const Component = props.component ?? View;
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.stepNumber}>
          <Text style={styles.stepNumberText}>{props.number}</Text>
        </View>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <View style={styles.instructions}>
        <Text style={styles.instructionsText}>
          {/* @ts-ignore */}
          <Markdown>{props.component?.instructions}</Markdown>
        </Text>
      </View>
      <View style={styles.preview}>
        <Component />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  instructions: {
    marginRight: 8,
    marginLeft: 60,
  },
  instructionsText: {},
  stepNumber: {
    borderRadius: 100,
    height: 42,
    width: 42,
    backgroundColor: '#ccc',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  preview: {
    height: 400,
    borderRadius: 8,
    backgroundColor: '#eee',
    margin: 8,
    overflow: 'hidden',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Step;
