import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {HECoinCardProps, HECoinGrowProps} from '.';
import { Convert2Currency } from '../../../../shared/utils/functions';
import CFTouchableFeedback from '../../../../shared/components/button/CFTouchableFeedback';
import CFCardView from '../../../../shared/components/cardView/CFCardView';
import CFText from '../../../../shared/components/text/HEText';
import { colors } from '../../../theme/Theme';




const HECardExchange: React.FC<HECoinCardProps> = ({
  symbol,
  image,
  price,
  name,
  onPress,
  priceChangePercent,
  isLast = false,
}) => {

  const getStyle = (style: ViewStyle | TextStyle) =>
    StyleSheet.create({
      contentCard: {
        ...style,
        borderBottomColor: isLast ? 'transparent' : colors.borderColor,
      },
      text: {
        ...style,
        color: colors.textPrimary,
      },

      subText: {
        ...style,
        color: colors.textTertiary,
      },
    });

  const getImage = (urlImage: string | ImageSourcePropType) => {
    if (typeof urlImage === 'string') {
      return {uri: urlImage};
    } else {
      return urlImage;
    }
  };
  return (
    <CFTouchableFeedback
      contentStyle={styles.coinCardContainer}
      onPress={onPress}>
      <CFCardView style={getStyle(styles.coinCardContent).contentCard}>
        <View style={styles.coinCardContentRow}>
          <Image
            source={getImage(image)}
            style={styles.coinCardImage}
          />
          <View style={styles.coinCardElementView}>
            <CFText
              text={symbol}
              style={getStyle(styles.coinCardText).text}
              type="body_m"
            />
            <CFText
              text={name}
              numberOfLines={2}
              ellipsizeMode={'tail'}
              type="caption_r"
              style={getStyle(styles.coinCardSubText).subText}
            />
          </View>
        </View>

        <View style={styles.coinCardElement}>
          <CFText
            text={`${Convert2Currency(price)}`}
            style={getStyle(styles.coinCardText).text}
          />
          <CoinGrowth priceChange={parseFloat(priceChangePercent)} />
        </View>
      </CFCardView>
    </CFTouchableFeedback>
  );
};

export const CoinGrowth = ({priceChange, timeRecord = ''}: HECoinGrowProps) => {

  const getArrow = () =>
    priceChange < 0
      ? <CFText text='↓' type='body_b' style={{color: colors.negativeColor}} />
      : priceChange === 0
      ? null
      : <CFText text='↑' type='body_b' style={{color: colors.positiveColor}} />

  return (
    <View style={styles.coinGrowthContent}>
      {getArrow()}
      <CFText
        text={`${Math.abs(priceChange).toFixed(2)}% ${timeRecord}`}
        type="caption_r"
        style={{...styles.coinCardSubText, color: colors.textTertiary}}
      />
    </View>
  );
};

export default HECardExchange;

const styles = StyleSheet.create({
  coinCardContainer: {
    height: 80,
    width: '100%',
  },
  coinCardContent: {
    height: 80,
    marginHorizontal: 10,
    borderRadius: 0,
    elevation: 0,
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  coinCardContentRow: {
    flexDirection: 'row',
    flex: 1,
  },
  coinCardElement: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginStart: 12,
    marginVertical: 10,
  },
  coinCardElementView: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  coinCardImage: {
    height: 24,
    width: 24,
    marginRight: 16,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 24 / 2,
  },
  coinCardText: {
    textAlign: 'right',
  },
  coinCardSubText: {
    fontWeight: '400',
    marginLeft: 1,
  },
  coinGrowthContent: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
