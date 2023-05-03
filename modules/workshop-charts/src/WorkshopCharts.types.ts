import {ViewStyle} from 'react-native/types';

export type ChangeEventPayload = {
  value: string;
};

type Series = {
  color: string;
  percentage: number;
};

export type WorkshopChartsViewProps = {
  style?: ViewStyle;
  data: Series[];
};
