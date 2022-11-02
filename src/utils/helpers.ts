import {
  DecreaseChangeWrapper,
  IncreaseChangeWrapper,
  NotChangingWrapper,
} from "../components/Change/ChangeStyles";

const formatPrice = (price: number) => (Math.round(price*100) / 100).toFixed(2);
const formatCoinRequest = (uuid: string, timePeriod: number) => (
  `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}h`
);

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

export {
  formatPrice,
  setChangeWrapper,
  formatCoinRequest,
};
