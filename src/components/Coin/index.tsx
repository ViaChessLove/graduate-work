import { CoinsListProps } from '../../types';
import { formatPrice } from '../../utils/utils';
import { COLORS } from '../../constants';

import {
  CoinImageContent,
  CoinContainer,
  CoinNameContent,
  PriceNameContent,
} from './CoinStyles';
import Change from '../Change';

const Coin = (props: CoinsListProps) => {
  const {
    iconUrl,
    name,
    price,
    sparkline,
    change,
    rank,
  } = props;

  return (
    <CoinContainer to={`/coins/${rank}`}>
      <CoinImageContent
        src={iconUrl}
        alt={`icon--${iconUrl}`}
      />
      <CoinNameContent>
        {name}
      </CoinNameContent>
      <PriceNameContent>
        {`${formatPrice(price)}$`}
      </PriceNameContent>
      <Change change={change} />
    </CoinContainer>
  )
}

export default Coin;
