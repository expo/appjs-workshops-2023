import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from 'expo-modules-core';

// Import the native module. On web, it will be resolved to WorkshopCharts.web.ts
// and on native platforms to WorkshopCharts.ts
import WorkshopChartsModule from './src/WorkshopChartsModule';
import RadialChart from './src/WorkshopChartsView';
import {
  ChangeEventPayload,
  WorkshopChartsViewProps as RadialChartProps,
} from './src/WorkshopCharts.types';

// Get the native constant value.
export const PI = WorkshopChartsModule.PI;

export function hello(): string {
  return WorkshopChartsModule.hello();
}

export async function setValueAsync(value: string) {
  return await WorkshopChartsModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  WorkshopChartsModule ?? NativeModulesProxy.WorkshopCharts,
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void,
): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export {RadialChart};
export type {RadialChartProps};
