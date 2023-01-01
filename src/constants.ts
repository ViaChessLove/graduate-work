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
};

export const SCREEN_RESOLUTIONS = {
  laptop: '1200px',
  tabletL: '960px',
  tablet: '768px',
  mobileL: '500px',
  mobile: '420px',
};

export const X_RAPIDAPI_KEY = '517ae7c2b3mshca817e8d77e12f8p1ef4e2jsnbee733730bd1';

export const COINS_API = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

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
