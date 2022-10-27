import {
  DecreaseChangeWrapper,
  IncreaseChangeWrapper,
  NotChangingWrapper,
} from "../components/Change/ChangeStyles";

const formatPrice = (price: number) => (Math.round(price*100) / 100).toFixed(2);

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
};
