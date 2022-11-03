import {
  DecreaseChangeWrapper,
  IncreaseChangeWrapper,
  NotChangingWrapper,
} from "../components/Change/ChangeStyles";

const formatPrice = (price: number): string => (Math.round(price*100) / 100).toFixed(2);
const formatCoinRequest = (uuid: string): string => (
  `https://coinranking1.p.rapidapi.com/coin/${uuid}`
);

const getUuidFromPathName = (path: string): string => path.split('/')[2];

const setChangeWrapper = (change: number) => {
  switch(true) {
    case change > 1:
      return IncreaseChangeWrapper;
    case change < -1:
      return DecreaseChangeWrapper;
    default:
      return NotChangingWrapper;
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
};
