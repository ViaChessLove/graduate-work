import * as styled from "../components/Change/ChangeStyles";
import { COIN_API_URL } from "../constants";

const formatPrice = (price: number): string => (Math.round(price*100) / 100).toFixed(2);

const formatDescription = (description: string): string => (
  description.length > 2000 ? `${description.slice(0,121)}...` : description
);

const formatCoinRequest = (uuid: string, timePeriod = '24h'): string => (
  `${COIN_API_URL}${uuid}?timePeriod=${timePeriod}`
);

const getUuidFromPathName = (path: string): string => path.split('/')[2];

const setChangeWrapper = (change: number) => {
  switch(true) {
    case change > 1:
      return styled.IncreaseChangeWrapper;
    case change < -1:
      return styled.DecreaseChangeWrapper;
    default:
      return styled.NotChangingWrapper;
  }
};

//функция высшего порядка для упрощения синтаксиса
const compose = (...functions: any) => (initialValue: any) => (
  functions.reduceRight((result: any, func: any) => func((result), initialValue))
);

export {
  formatPrice,
  setChangeWrapper,
  formatCoinRequest,
  getUuidFromPathName,
  compose,
  formatDescription,
};
