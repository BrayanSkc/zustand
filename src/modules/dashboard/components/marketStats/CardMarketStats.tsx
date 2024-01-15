import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardMarketProps} from './cardMarket.types';
import { Convert2Currency } from '../../../../shared/utils/functions';
import { isIOS } from '../../../../shared/utils/device';
import CFText from '../../../../shared/components/text/HEText';
import CFCardView from '../../../../shared/components/cardView/CFCardView';
import { colors } from '../../../theme/Theme';





const CardMarketStats: React.FC<CardMarketProps> = ({
  closingPrice,
  openingPrice,
  minYear,
  maxDay,
  minDay,
  market_volume,
  averagePrice,
  maxYear,
  currentPrice,
  utilityPrice,
  utilityBySymbol,
  marketCapitalization
}) => {

  const getPriceClose = () => (closingPrice > 0 ? closingPrice : currentPrice);
  return (
    <CFCardView
      style={{
        ...styles.cardMarketContainer,
        backgroundColor: colors.backgroundTabColor,
      }}>
      <View
        style={{
          ...styles.cardMarketContent,
          borderBottomColor: colors.borderColor,
        }}>
        <CFText
          text={"t('cardmarketstats_cmp_msg_closing')"}
          style={styles.textCardMarket}
        />
        <View style={styles.cardMarketRow}>
          <CFText
            text={Convert2Currency(getPriceClose()) + ' MXN'}
            style={styles.textCardMarket}
          />
        </View>
      </View>
      <View
        style={{
          ...styles.cardMarketContent,
          borderBottomColor: colors.borderColor,
        }}>
        <CFText
          text={'cardmarketstats_cmp_msg_opening'}
          style={styles.textCardMarket}
        />
        <View style={styles.cardMarketRow}>
          <CFText
            text={Convert2Currency(openingPrice) + ' MXN'}
            style={styles.textCardMarket}
          />
        </View>
      </View>
      <View
        style={{
          ...styles.cardMarketContent,
          borderBottomColor: colors.borderColor,
        }}>
        <View style={styles.viewMarket}>
          <CFText
            text={"t('cardmarketstats_cmp_msg_minDay')"}
            style={styles.textCardMarket}
          />
        </View>
        <CFText
          text={Convert2Currency(minDay) + ' MXN'}
          style={styles.textConvert}
        />
      </View>
      <View
        style={{
          ...styles.cardMarketContent,
          borderBottomColor: colors.borderColor,
        }}>
        <View style={styles.viewMarket}>
          <CFText
            text={"t('cardmarketstats_cmp_msg_maxDay')"}
            style={styles.textCardMarket}
          />
        </View>
        <CFText
          text={Convert2Currency(maxDay) + ' MXN'}
          style={styles.textConvert}
        />
      </View>
      <View
        style={[
          {...styles.cardMarketContent, borderBottomColor: colors.borderColor}]}>
        <CFText
          text={'cardmarketstats_cmp_msg_minYear'}
          style={styles.textRecord}
        />
        <CFText
          text={Convert2Currency(minYear) + ' MXN'}
          style={styles.textConvert}
        />
      </View>
      <View
        style={[
          {...styles.cardMarketContent, borderBottomColor: colors.borderColor}]}>
        <CFText
          text={'cardmarketstats_cmp_msg_maxYear'}
          style={styles.textRecord}
        />
        <CFText
          text={Convert2Currency(maxYear) + ' MXN'}
          style={styles.textConvert}
        />
      </View>
      <View
        style={[
          {...styles.cardMarketContent, borderBottomColor: colors.borderColor}]}>
        <CFText
          text={'cardmarketstats_cmp_msg_average'}
          style={styles.textRecord}
        />
        <CFText
          text={Convert2Currency(averagePrice) + ' MXN'}
          style={styles.textConvert}
        />
      </View>
      <View
        style={[
          {...styles.cardMarketContent, borderBottomColor: colors.borderColor}]}>
        <CFText
          text={'cardmarketstats_cmp_msg_utility'}
          style={styles.textRecord}
        />
        <CFText text={Convert2Currency(utilityPrice || 0) + ' MXN'} style={styles.textConvert} />
      </View>
      <View
        style={[
          {...styles.cardMarketContent, borderBottomColor: colors.borderColor},
         
        ]}>
        <CFText
          text={'cardmarketstats_cmp_msg_volume'}
          style={styles.textRecord}
        />
        <CFText text={String(market_volume)} style={styles.textConvert} />
      </View>
      <View
        style={[
          {...styles.cardMarketContent, borderBottomColor: colors.borderColor},
         
        ]}>
        <CFText
          text={'cardmarketstats_cmp_msg_utility_action'}
          style={styles.textRecord}
        />
        <CFText text={Convert2Currency(utilityBySymbol || 0) + ' MXN'} style={styles.textConvert} />
      </View>
      <View
        style={[
          {...styles.cardMarketContent, borderBottomColor: colors.borderColor},
          styles.mbNone,
        ]}>
        <CFText
          text={'cardmarketstats_cmp_msg_market_capitalization'}
          style={styles.textRecord}
        />
        <CFText text={Convert2Currency(marketCapitalization || 0) + ' MXN'} style={styles.textConvert} />
      </View>
    </CFCardView>
  );
};
const styles = StyleSheet.create({
  cardMarketContainer: {
    borderRadius: 8,
    padding: 2,
    paddingBottom: 0,
    marginVertical: isIOS ? 15 : 10,
  },
  cardMarketContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 18,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    alignItems: 'flex-start',
  },
  cardMarketRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMarketColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mbNone: {
    borderBottomColor: 'none',
    borderBottomWidth: 0,
  },
  iconTooltip: {
    marginHorizontal: 10,
    height: 22,
    width: 22,
  },
  textCardMarket: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  viewMarket: {
    flexDirection: 'row',
    flex: 3,
  },
  textConvert: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    flex: 3,
    width: '100%',
    textAlign: 'right',
  },
  textRecord: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    flex: 3,
  },
});
export default CardMarketStats;