export const Convert2Currency = (
  amount: string | number,
  withoutSymbol=true,
) => {
  try {
    const value = typeof amount === 'string' ? parseFloat(amount) : amount;
    return withoutSymbol
      ? value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + " MXN"
      : '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } catch (err) {
    return '$0';
  }
};

export const isLessThanZero = (number: string) =>
  parseFloat(number) > 0 ? false : true;

export const getTimestampKey = () =>
  `${Math.round(new Date().getTime() / 1000)}-HeyLogin-`;

export const showError = (message: any, route: string) =>
  console.log('An error ocurred in:\n', route, '=>', message);

export const shortExchangeName = (name: string, long = 60) => {
  if (name.length <= long) {
    return name;
  }
  const words = name.split(' ');
  if (words.length === 1) {
    return name.slice(0, long) + '...';
  }
  let newName = words[0];
  for (let i = 1; i < words.length; i++) {
    if (newName.length + words[i].length + 1 <= long) {
      newName += ' ' + words[i];
    } else {
      break;
    }
  }

  return newName + '...';
};


export const getRandomNumber=(value:number)=> Math.floor(Math.random() * value);


export const getIconBySymbol = () => {
  const coins = [
    "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    "https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1696512319",
    "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1696502525",
    "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1696501717",
    "https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1696508607",
    "https://assets.coingecko.com/coins/images/10365/large/near.jpg?1696510367",
    "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
    "https://assets.coingecko.com/coins/images/31967/large/tia.jpg?1696530772",
    "https://assets.coingecko.com/coins/images/25751/large/kaspa-icon-exchanges.png?1696524837",
    "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159",
  ];
  const index = Math.floor(Math.random() * getRandomNumber(coins.length));
  return coins[index] ||  "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400";
};


