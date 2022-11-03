import { CoinsListProps } from '../../types';
import { formatPrice } from '../../utils/helpers';

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
    change,
    uuid
  } = props;

  return (
    <CoinContainer to={`/coin/${uuid}`}>
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
      <Change
        change={Number(change)}
      />
    </CoinContainer>
  )
}

export default Coin;
