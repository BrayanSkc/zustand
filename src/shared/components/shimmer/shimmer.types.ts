import {ViewStyle} from 'react-native';

export type ShimmerProps = {
  quantity: number;
  contentStyle?: ViewStyle;
  boxStyle: ViewStyle;
  colorSkeleton: string;
  containerStyle?: string;
};
