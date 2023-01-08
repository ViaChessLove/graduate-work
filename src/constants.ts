export const COLORS = {
  black: '#000',
  red: '#ff0000',
  green: '#11ff00',
  yellow: '#ffe93b',
  bioticGrasp: '#f24e77',
  riveraSea: '#198280',
  oreBluishBlack: '#182b33',
  poisonousIceCream: '#ded82c',
  ruskinBlueColor: '#546b75',
  stegadonScaleGreen: '#094c69',
  carrierPigeonBlue: '#87959c',
  white: '#fff',
  duckEggBlue: '#b4cdc7',
};

export const SCREEN_RESOLUTIONS = {
  laptop: '1200px',
  tabletL: '960px',
  tablet: '768px',
  mobileL: '500px',
  mobile: '420px',
};

export const X_RAPIDAPI_KEY = '517ae7c2b3mshca817e8d77e12f8p1ef4e2jsnbee733730bd1';

export const getCoinsApi = (
  limit: number,
  offset: number,
  search = '',
  orderBy = 'marketCap',
  orderDirection = 'desc',
  timePeriod = '24h',
  ) => (
  `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}&search=${search}&tiers%5B0%5D=1&orderBy=${orderBy}&orderDirection=${orderDirection}&limit=${limit}&offset=${offset}
`);

export const COINS_API = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0';

export const SEARCH_API = 'https://coinranking1.p.rapidapi.com/search-suggestions';

export const COIN_API_URL = 'https://coinranking1.p.rapidapi.com/coin/';

export const NEWS_API = 'https://blockchain-news1.p.rapidapi.com/news/NDTV';

export const COINS_REQUEST_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': X_RAPIDAPI_KEY,
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  },
};

export const NEWS_REQUEST_OPTIONS = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': X_RAPIDAPI_KEY,
		'X-RapidAPI-Host': 'blockchain-news1.p.rapidapi.com'
	},
};

export const ORDER_OPTIONS = [
  {
    type: 'marketCap',
    name: 'Sort by Market Cap'
  },
  {
    type: 'price',
    name: 'Sort by price',
  },
  {
    type: 'change',
    name: 'Sort by change',
  },
  {
    type: 'listedAt',
    name: 'Sort by listing'
  }
];

export const ORDER_DIRECTIONS = [
  {
    type: 'desc',
    name: 'Direction: Descending',
  },
  {
    type: 'asc',
    name: 'Direction: Ascending',
  },
];

export const TIME_PERIODS = [
  {
    type: '24h',
    name: '24 HOURS',
  },
  {
    type: '7d',
    name: '7 DAYS',
  },
  {
    type: '30d',
    name: '30 DAYS',
  },
]

export const OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: COLORS.black,
        font: {
          family: 'Neucha',
        },
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      bodyFont: {
        family: 'Neucha',
      },
      titleFont: {
        family: 'Neucha',
      }
    },
  },
  scales: {
    yAxes: {
      grid: {
        display: false,
        zeroLineColor: "transparent"
      },
      ticks: {
        color: COLORS.black,
        font: {
          family: 'Neucha',
          size: 14,
        }
      }
    },
    xAxes: {
      grid: {
        display: false,
        zeroLineColor: "transparent"
      },
      ticks: {
        color: COLORS.black,
        font: {
          family: 'Neucha',
          size: 14,
        }
      }
    },
  },
};
