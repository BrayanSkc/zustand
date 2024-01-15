import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import type {CFCardViewProps} from './types';
import {colors} from '../../../modules/theme/Theme';

// Componente que representa una tarjeta.
const CFCardView = ({children, style = {}}: CFCardViewProps): JSX.Element => {
  return <View style={[styles.cardView, style]}>{children || null}</View>;
};

export default CFCardView;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: colors.backgroundTabColor,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 20,
    elevation: 4,
    zIndex: 0,
  },
});
