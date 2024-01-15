import axios from 'axios';
import  {InDashboardEntities, InRequestMarketData} from './Dashboard.types'

const API='https://ipk2d4a2p8.execute-api.ca-central-1.amazonaws.com/dev/api/'

class DashboardRepository {
  async topGraphList(): Promise<InDashboardEntities['graph'][]> {
    try {
    
      const URL= API + 'mercado/v1/tendencia-acciones'
      const response = await axios.get(URL);
      return response.data; 
    } catch (error) {
      console.error('Error al obtener las gráficas de acciones:', error);
      return []; 
    }
  }

  async getMarketData(page:number, size:number):Promise<InDashboardEntities['market'][]> {
    try {
    const URL= API + `mercado/v1/datos-acciones?page=${page}&size=${size}`
      const {data: response}= await axios.get<InRequestMarketData>(URL);
      return response.elementos; 
    } catch (error) {
      console.error('Error al obtener el mercado de acciones::: ', error);
      return []; 
    }
  }

}

export default DashboardRepository;
