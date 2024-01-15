export type HECoinCardProps = {
  // función de tipo void opcional el cual se ejecuta al tocar solo el elemento (solo si existe)
  onPress?: () => void;

  //atributo de tipo string que simboliza el simbolo de la acción
  symbol: string;

  //atributo de tipo string que simboliza el nombre de la acción
  name: string;

  //atributo de tipo string que simboliza el icono o logo de la acción
  image: string;

  //atributo de tipo string que simboliza el precio de la acción
  price: string;

  //atributo de tipo string que simboliza el porcentaje de variación de la acción

  priceChangePercent: string;

  //atributo de tipo boolean que deshabilita el borde inferior
  isLast?: boolean;
};

export type HECoinGrowProps = {
  //atributo de tipo númerico que simboliza el porcentaje de variación en el precio de la acción
  priceChange: number;

  //atributo de tipo string que simboliza el lapsus de tiempo de la información mostrada
  timeRecord?: string;
};
