import {requireNativeViewManager} from 'expo-modules-core';
import * as React from 'react';

import {WorkshopChartsViewProps} from './WorkshopCharts.types';

const NativeView: React.ComponentType<WorkshopChartsViewProps> =
  requireNativeViewManager('WorkshopCharts');

export default function WorkshopChartsView(props: WorkshopChartsViewProps) {
  return <NativeView {...props} />;
}
