 type InGraphList ={
  simbolo: string
  porcentajeGanancia: string
  precioActualMxn: string
  cantidadPuntos: number
  puntosGrafica: PuntosGrafica[]
  logoClaro: string
  logoObscuro: string

}

type InMarketData = {
  simbolo: string
  nombre: string
  valorActual: number
  moneda: string
  porcentajeCambio: number
  pathLogoClaro: string
  pathLogoObscuro: string
}

type InMarketDataDetails = {
  simbolo: string
  nombre: string
  valorActual: number
  moneda: string
  porcentajeCambio: number
  pathLogoClaro: string
  pathLogoObscuro: string
}


export type InDashboardEntities = {
  graph: InGraphList,
  market: InMarketData
  marketDetails: InMarketDataDetails
}



export interface InRequestMarketData {
  numeroPagina: number
  elementos: InMarketData[]
  totalPaginas: number
  tamanioPagina: number
}


 interface PuntosGrafica {
  valor: number
  fecha: string
}
