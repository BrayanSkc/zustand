import {ViewStyle} from 'react-native';


export type HECardTradingProps = {
  title: string;
  data: number[];
  image: string;
  price: string;
  onPress?: () => void;
  style?: ViewStyle;
  percent: string;
};

 type LineChartItem = {
  // Fecha.
  time: string | number;
  // Valor.
  value: number;
};
