import {getIconBySymbol} from '../../../shared/utils/functions';
import DashboardRepository from '../repositories/DashboardRepositories';

class DashboardService {
  private dashboardRepository: DashboardRepository;

  constructor(dashboardRepository: DashboardRepository) {
    this.dashboardRepository = dashboardRepository;
  }

  async getMarketData(page: number, size: number) {
    try {
      const market = await this.dashboardRepository.getMarketData(page, size);
      if (market.length < 1) return [];
      const newMarket = market.map(item => {
        return {
          ...item,
          pathLogoClaro: getIconBySymbol(),
          pathLogoObscuro: getIconBySymbol(),
        };
      });
      return newMarket;
    } catch (error) {
      throw new Error('Error al obtener mercado');
    }
  }

  async getTopGraph() {
    try {
      const market = await this.dashboardRepository.topGraphList();
      if (market.length < 1) return [];

      const newMarket = market.map(item => {
        return {
          ...item,
          logoClaro: getIconBySymbol(),
          logoObscuro: getIconBySymbol(),
        };
      });
      return newMarket;
    } catch (error) {
      throw new Error('Error al obtener mercado');
    }
  }
}

export default DashboardService;
