import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {HECardTradingProps} from './tradingCard.types';
import {Convert2Currency} from '../../../../shared/utils/functions';
import CFText from '../../../../shared/components/text/HEText';
import CFTouchableFeedback from '../../../../shared/components/button/CFTouchableFeedback';
import CFCardView from '../../../../shared/components/cardView/CFCardView';
import {LineChart} from 'react-native-svg-charts';
import {colors} from '../../../theme/Theme';

const HETradingCard: React.FC<HECardTradingProps> = ({
  data,
  image,
  onPress,
  price,
  percent,
  title,
  style,
}) => {

  const getStyleComponent = () =>
    StyleSheet.create({
      cardTradingContainer: {
        width: 160,
        height: 180,
        paddingVertical: 10,
        margin: 5,
        backgroundColor: colors.cardBackground,
      },
      cardTradingPercent: {
        width: '40%',
        backgroundColor: colors.backgroundColor,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        borderRadius: 50,
      },
      text: {
        color: colors.textPrimary,
      },
    });

  const getColorLabel = () =>
    parseFloat(percent) > 0 ? colors.positiveColor : colors.negativeColor;

  const convertToAbsolute = () => `${Math.abs(parseFloat(percent))}%`;

  return (
    <CFTouchableFeedback onPress={onPress}>
      <CFCardView style={style || getStyleComponent().cardTradingContainer}>
        <CFText
          text={title}
          type="caption_b"
          style={[styles.cardTradingTitle, getStyleComponent().text]}
        />
        <View style={getStyleComponent().cardTradingPercent}>
          <CFText
            text={convertToAbsolute()}
            type="caption_r"
            style={{color: getColorLabel()}}
          />
        </View>
        <View style={styles.cardTradingChart}>
          <LineChart
          
            style={{height: 200, paddingHorizontal: 4}}
            data={data}
            svg={{stroke: getColorLabel()}}
            contentInset={{top: 10, bottom: 120}}>
          </LineChart>
        </View>

        <View style={styles.cardTradingFooter}>
          <Image source={{uri: image}} style={styles.image} />
          <CFText
            text={Convert2Currency(price)}
            type="caption_b"
            style={[styles.cardTradingAmount, getStyleComponent().text]}
          />
        </View>
      </CFCardView>
    </CFTouchableFeedback>
  );
};

export default HETradingCard;

const styles = StyleSheet.create({
  cardTradingChart: {
    width: '100%',
    height: 60,
  },

  cardTradingFooter: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTradingTitle: {
    paddingBottom: 5,
    marginHorizontal: 15,
  },
  cardTradingAmount: {
    alignSelf: 'baseline',
  },
  webView: {
    backgroundColor: 'transparent',
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
});
