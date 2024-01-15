import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View, FlatList, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {isIOS} from '../../../shared/utils/device';
import {
  Convert2Currency,
  getRandomNumber,
  shortExchangeName,
} from '../../../shared/utils/functions';
import HETradingCard from '../components/tradingCard/HETradingCard';
import {HECardExchange} from '../components/cardExchange';
import CFText from '../../../shared/components/text/HEText';
import {colors} from '../../theme/Theme';
import CFCardView from '../../../shared/components/cardView/CFCardView';
import CFTouchableFeedback from '../../../shared/components/button/CFTouchableFeedback';
import useMarketStore from '../../../store/market.store';

enum TextDashboard {
  balance = 'Balance general',
  market = 'Mercados',
  loading = 'Cargando...',
  showMore= 'Cargar más'
}

const DashboardContainer = () => {
   const [items, setItems] = useState(10);
  const {fetchMarket, fetchMarketTrend, marketInfo, loadingMarket} =   useMarketStore();

  useEffect(() => {
    const getInfoTrend = async () => {
      await fetchMarketTrend();
    };
    getInfoTrend();
  }, []);

  useEffect(() => {
    const getInfoMarket = async () => {
      await fetchMarket(1, items);
    };
    getInfoMarket();
  }, [items]);


const isVisible:ViewStyle =useMemo(() => marketInfo.market.length> 40 ? {display: 'none'} : {display: 'flex'}, [marketInfo.market])

  return (
    <SafeAreaView
      style={[
        styles.baseContainer,
        styles.withoutMargin,
        {marginBottom: isIOS ? 0 : 35},
      ]}>
      <View style={{margin: 18}}>
        <View style={styles.balanceContainer}>
          <View style={styles.flexD}>
            <CFText
              text={Convert2Currency(getRandomNumber(10) * 250)}
              type="title_1"
            />
            <CFText
              text={TextDashboard.balance}
              type="caption_r"
              style={{
                ...styles.dashboardSubText,
                color: colors.textTertiary,
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.dashboardSection}>
        <ScrollView
          removeClippedSubviews={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {loadingMarket.trend ? (
            <CFText text={TextDashboard.loading} />
          ) : (
            marketInfo.marketTrend &&
            marketInfo.marketTrend.map((item, index) => (
              <HETradingCard
                key={`${item.simbolo}-${index}`}
                data={item.puntosGrafica.map(element => element.valor)}
                image={item.logoClaro}
                percent={item.porcentajeGanancia}
                title={item.simbolo}
                price={item.precioActualMxn}
                onPress={() => console.log(item.simbolo, item.simbolo)}
              />
            ))
          )}
        </ScrollView>
      </View>

      <View style={[styles.dashboardLastSection, styles.baseContainer]}>
        <CFText
          text={TextDashboard.market}
          type="title_2"
          style={{color: colors.textPrimary}}
        />
        {loadingMarket.market ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <CFText text={TextDashboard.loading} />
          </View>
        ) : (
          <FlatList
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={marketInfo.market}
            ListFooterComponent={
              <CFCardView style={[styles.contentCardShowMore, isVisible  ]}>
                <CFTouchableFeedback
                  onPress={() => setItems(prev => prev + 10)}>
                  <CFText
                    text={TextDashboard.showMore}
                    type="caption_r"
                    style={styles.textShowMore}
                  />
                </CFTouchableFeedback>
              </CFCardView>
            }
            renderItem={({item, index}) => (
              <HECardExchange
                image={item.pathLogoClaro}
                name={shortExchangeName(item.nombre, 30)}
                priceChangePercent={item.porcentajeCambio.toString()}
                price={`${item.valorActual}`}
                symbol={item.simbolo}
                isLast={marketInfo.market.length - 1 === index}
                onPress={() => console.log(item.simbolo, item.nombre)}
              />
            )}
            keyExtractor={item => item.nombre}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default DashboardContainer;

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    margin: isIOS ? 10 : 8,
    backgroundColor: colors.backgroundColor,
    marginHorizontal: 16,
  },
  dashboardSection: {
    marginVertical: 10,
  },
  dashboardLastSection: {
    marginTop: 10,
  },
  dashboardSubText: {
    marginVertical: 5,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexD: {flexDirection: 'column'},
  withoutMargin: {marginHorizontal: 0, marginVertical: 0},
  contentCardShowMore: {
    height: 30,
    borderRadius: 0,
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    elevation: 0,
  },
  textShowMore: {
    textDecorationLine: 'underline',
  },
});
