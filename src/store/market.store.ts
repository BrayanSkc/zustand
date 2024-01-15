import {create} from 'zustand';
import {persist, devtools, createJSONStorage} from 'zustand/middleware';
import DashboardService from '../modules/dashboard/services/DashboardServices';
import {InDashboardEntities} from '../modules/dashboard/repositories/Dashboard.types';
import DashboardRepository from '../modules/dashboard/repositories/DashboardRepositories';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MarketStoreState {
  marketInfo: InMarketInfo;
  fetchMarket: (page: number, size: number) => Promise<void>;
  fetchMarketTrend: () => Promise<void>;
  loadingMarket: {
    trend: boolean;
    market: boolean;
  };
}

interface InMarketInfo {
  marketTrend: InDashboardEntities['graph'][];
  market: InDashboardEntities['market'][];
}

const dashboardRepository = new DashboardRepository();
const dashboardService = new DashboardService(dashboardRepository);

const useMarketStore = create<MarketStoreState>()(
  devtools(
    persist(
      set => ({
        marketInfo: {
          marketTrend: [],
          market: [],
        },
        loadingMarket: {trend: false, market: false},
        fetchMarket: async (page, size) => {
          try {
            console.log('Fetching market data...');
            set(state => ({
              loadingMarket: {...state.loadingMarket, market: true},
            }));
            const market = await dashboardService.getMarketData(page, size);
            set(state => ({
              marketInfo: {...state.marketInfo, market},
              loadingMarket: {...state.loadingMarket, market: false},
            }));
            console.log('Market data fetched successfully.');
          } catch (error) {
            console.error('Error fetching market data:', error);
          }
        },
        fetchMarketTrend: async () => {
          try {
            console.log('Fetching market trend...');
            set(state => ({
              loadingMarket: {...state.loadingMarket, trend: true},
            }));
            const marketTrend = await dashboardService.getTopGraph();
            set(state => ({
              marketInfo: {
                ...state.marketInfo,
                marketTrend,
              },
              loadingMarket: {...state.loadingMarket, trend: false},
            }));
            console.log('Market trend fetched successfully.');
          } catch (error) {
            console.error('Error fetching market trend:', error);
          }
        },
      }),
      {name: 'marketStore',  storage: createJSONStorage(() => AsyncStorage)},
    ),
  ),
);

export default useMarketStore;
